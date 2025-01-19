import { useState } from 'react';
import { createClient } from '../api/clientApi';
import { formProps } from '../types';
import { AxiosError } from 'axios';

type ErrorType = string | null;

export const useClient = () => {

  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<ErrorType>(null);

  const createNewClient = async (clientData: formProps) => {

    setLoading(true);
    setError(null);

    try {
      await createClient(clientData);
      return true;
    } catch (err) {
      if (err instanceof AxiosError) {
        if (!err.response) {
          setError('Erro de conexão');
          return;
        }
        setError(err.response?.data?.message);
        return false;
      }
      setError('Ocorreu um erro inesperado');
      return false;
    } finally {
      setLoading(false);
    }
  };
  
  return { createNewClient, loading, error };
};
