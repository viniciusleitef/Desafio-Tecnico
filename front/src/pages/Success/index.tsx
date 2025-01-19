import { SuccessContainer } from './styles';
import { FaCheck } from 'react-icons/fa';
import { useNavigate, useLocation } from 'react-router-dom';
import { useEffect } from 'react';

export function Success() {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (!location.state?.canAccessSuccessPage) {
      navigate('/');
    }
  }, [location.state, navigate]);
  return (
    <>
      <SuccessContainer>
        <div className="content">
          <header>
            <FaCheck className="icon" />
            <h1>Tudo certo!</h1>
          </header>
          <p>Cliente cadastrado com sucesso</p>
          <button onClick={() => navigate(-1)}>Realizar novo cadastro</button>
        </div>
      </SuccessContainer>
    </>
  );
}
