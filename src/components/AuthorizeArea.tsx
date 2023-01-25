import React, { ReactNode } from 'react';
import { Navigate } from 'react-router-dom';
import { useAppSelector } from '../redux/hook';

interface AuthorizeProps {
  element: ReactNode;
}

export default function AuthorizeArea({ element }: AuthorizeProps) {
  const userState = useAppSelector((state) => state.user);

  if (!userState.isLogin) {
    return <Navigate to="/?login-modal=true" />;
  }

  return <>{element}</>;
}
