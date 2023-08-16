'use client'

import { createContext, useContext, useState } from 'react';

interface IPropsProv {
  children: JSX.Element
}

interface IContextProps {
  isLoadingMiddleware: boolean
  updateIsLoadingMidd: (val: boolean) => void
}

const LoginMiddlewareContext = createContext<IContextProps>({} as IContextProps);

const LoginMiddlewareProvider = ({ children }: IPropsProv) => {
  const [isLoadingMiddleware, setIsLoadingMiddleware] = useState(true)

  const updateIsLoadingMidd = (
    val: boolean,
  ) => {
    setIsLoadingMiddleware(val);
  }

  return (
    <LoginMiddlewareContext.Provider
      value={{
        isLoadingMiddleware,
        updateIsLoadingMidd,
      }}
    >
      {children}
    </LoginMiddlewareContext.Provider>
  );
};

export default LoginMiddlewareProvider;

export const useLoginContext = () => {
  return useContext(LoginMiddlewareContext);
};