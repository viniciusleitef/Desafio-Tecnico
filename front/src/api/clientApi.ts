import axiosInstance from './axiosInstance';
import { formProps } from '../types';

export const createClient = async (userData: formProps) => {
  try {
    const response = await axiosInstance.post('/client', userData);
    console.log(response);
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};