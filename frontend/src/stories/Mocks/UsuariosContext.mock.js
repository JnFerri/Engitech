import React, { createContext, useContext } from 'react';
import { useUsuario } from '../../Context/Usuario.js';

const UsuarioMockContext = createContext()

export const UsuarioMockProvider = ({ children,value }) => {
  const {email , senha , error , handleSubmit , handleEmail , handleSenha , IsAuth , setIsAuth , handleLogout , Usuario, TipoUsuario , setTipoUsuario } = useUsuario()
  

  const contextValue = value && Object.keys(value).length !== 0 ? value : {
    email , senha , error , handleSubmit , handleEmail , handleSenha , IsAuth , setIsAuth , handleLogout , Usuario, TipoUsuario , setTipoUsuario
  };
  
  return (
    <UsuarioMockContext.Provider value={contextValue}>
      {children}
    </UsuarioMockContext.Provider>
  );
};

export const useUsuarioMock = () => { return useContext(UsuarioMockContext) }