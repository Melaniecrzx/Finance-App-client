import { useMutation } from '@tanstack/react-query';
import { useAuth } from '../context/AuthContext';
import axiosInstance from '../services/axios';
import { useNavigate } from 'react-router-dom';

const useSignup = () => {
  const { login } = useAuth();
  const navigate = useNavigate();

  const { mutate, isPending, isError, error } = useMutation({
    mutationFn: (data) => axiosInstance.post('/auth/signup', data),
    onSuccess: (response) => {
      login(response.data.token, response.data.data.user);
      navigate('/');
    },
  });

  return { isPending, isError, error, mutate };
};

export default useSignup;
