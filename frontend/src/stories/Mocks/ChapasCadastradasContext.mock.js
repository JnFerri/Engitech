import React, { createContext, useContext } from 'react';
import { useChapasCadastradas } from '../../Context/ChapasCadastradas.js';

const ChapasCadastradasMockContext = createContext()

export const ChapasCadastradasMockProvider = ({ children,value }) => {
  const { DadosChapasLista, InputPesquisaValor, TipoPesquisaSelecionado, HandleInputPesquisaValor, HandleTipoPesquisaSelecionado, HandlePegaDadosPesquisados , setOpcoesMateriais, OpcoesMateriais , AbrirModalChapa, FecharModalCadastroChapa, ModalCadastroChapaEstaVisivel , HandleCodigoChapaFormModal , HandleDescricaoChapaFormModal , HandleComprimentoChapaFormModal , HandleAlturaChapaFormModal , HandleEspessuraChapaFormModal , HandleMaterialChapaFormModal , CadastrarChapa , PaginaSucessoEstaAtiva , HandleFecharPaginaSucesso , HandlePegarTodosDadosChapas, HandleAtualizarChapa , ModalAtualizacaoChapaEstaVisivel , CodigoChapaFormModal , DescricaoChapaFormModal , ComprimentoChapaFormModal , AlturaChapaFormModal , EspessuraChapaFormModal , MaterialChapaFormModal, handleDeletarChapa } = useChapasCadastradas()
  
  console.log(value)

  const contextValue = value && Object.keys(value).length !== 0 ? value : {
    DadosChapasLista, InputPesquisaValor, TipoPesquisaSelecionado, HandleInputPesquisaValor, HandleTipoPesquisaSelecionado, HandlePegaDadosPesquisados , setOpcoesMateriais, OpcoesMateriais , AbrirModalChapa, FecharModalCadastroChapa, ModalCadastroChapaEstaVisivel , HandleCodigoChapaFormModal , HandleDescricaoChapaFormModal , HandleComprimentoChapaFormModal , HandleAlturaChapaFormModal , HandleEspessuraChapaFormModal , HandleMaterialChapaFormModal , CadastrarChapa , PaginaSucessoEstaAtiva , HandleFecharPaginaSucesso , HandlePegarTodosDadosChapas, HandleAtualizarChapa , ModalAtualizacaoChapaEstaVisivel , CodigoChapaFormModal , DescricaoChapaFormModal , ComprimentoChapaFormModal , AlturaChapaFormModal , EspessuraChapaFormModal , MaterialChapaFormModal, handleDeletarChapa
  };
  
  return (
    <ChapasCadastradasMockContext.Provider value={contextValue}>
      {children}
    </ChapasCadastradasMockContext.Provider>
  );
};

export const useChapasCadastradasMock = () => { return useContext(ChapasCadastradasMockContext) }