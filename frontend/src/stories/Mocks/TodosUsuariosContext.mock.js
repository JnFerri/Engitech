import React, { createContext, useContext } from 'react';
import { useTodosUsuarios } from '../../Context/TodosUsuarios.js';

const TodosUsuariosMockContext = createContext()

export const TodosUsuariosMockProvider = ({ children,value }) => {
  const {DadosTodosUsuarios, PesquisaEmail , ModalAlteracaoSenhaEstaAtivo , AbrirModalAlteracaoSenha , FecharModalAlteracaoSenha , HandleNovaSenhaFormModal , HandleConfirmaNovaSenhaFormModal , NovaSenhaFormModal , ConfirmaNovaSenhaFormModal , DadosUsuarioModalAlteracaoSenha , AlterarSenhaUsuario , PaginaSucessoAlteracaoSenhaEstaAtiva , HandleInativarUsuario , setDadosTodosUsuarios , HandleAtivarUsuario } = useTodosUsuarios()
  

  const contextValue = value && Object.keys(value).length !== 0 ? value : {
    DadosTodosUsuarios, PesquisaEmail , ModalAlteracaoSenhaEstaAtivo , AbrirModalAlteracaoSenha , FecharModalAlteracaoSenha , HandleNovaSenhaFormModal , HandleConfirmaNovaSenhaFormModal , NovaSenhaFormModal , ConfirmaNovaSenhaFormModal , DadosUsuarioModalAlteracaoSenha , AlterarSenhaUsuario , PaginaSucessoAlteracaoSenhaEstaAtiva , HandleInativarUsuario , setDadosTodosUsuarios , HandleAtivarUsuario
  };
  
  return (
    <TodosUsuariosMockContext.Provider value={contextValue}>
      {children}
    </TodosUsuariosMockContext.Provider>
  );
};

export const useTodosUsuariosMock = () => { return useContext(TodosUsuariosMockContext) }