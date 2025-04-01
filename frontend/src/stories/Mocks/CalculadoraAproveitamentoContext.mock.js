import React, { createContext, useContext } from 'react';

import { useCalculadoraAproveitamento } from '../../Context/CalculadoraAproveitamento.js';

const calculadoraAproveitamentoMockContext = createContext()

export const CalculadoraAproveitamentoMockProvider = ({ children,value }) => {
  const { MedidaA , MedidaB , Peso , MaterialSelecionado , EspessuraSelecionada , DadosResultado , EspessurasOptions, HandleMedidaA , HandleMedidaB , HandlePeso , HandleMaterialSelecionado , HandleEspessuraSelecionada , HandleSubmit, setMaterialOptions , MaterialOptions ,setEspessurasOptions , QuantidadesPecasChapa , AlturaChapaVisualizacao , ComprimentoChapaVisualizacao , AbreVisualizacaoCriaRetangulosPosicionamentos , FechaModalVisualizacao , ModalVisualizacaoEstaVisivel , DadosChapaVisualizacao , RetangulosPosicionamentoHorizontal , RetangulosPosicionamentoVertical , RetangulosPosicionamentoMaximoMisturado } = useCalculadoraAproveitamento()
  
  console.log(value)

  const contextValue = value && Object.keys(value).length !== 0 ? value : {
    MedidaA , MedidaB , Peso , MaterialSelecionado , EspessuraSelecionada , DadosResultado , EspessurasOptions, HandleMedidaA , HandleMedidaB , HandlePeso , HandleMaterialSelecionado , HandleEspessuraSelecionada , HandleSubmit, setMaterialOptions , MaterialOptions ,setEspessurasOptions , QuantidadesPecasChapa , AlturaChapaVisualizacao , ComprimentoChapaVisualizacao , AbreVisualizacaoCriaRetangulosPosicionamentos , FechaModalVisualizacao , ModalVisualizacaoEstaVisivel , DadosChapaVisualizacao , RetangulosPosicionamentoHorizontal , RetangulosPosicionamentoVertical , RetangulosPosicionamentoMaximoMisturado 
  };
  
  return (
    <calculadoraAproveitamentoMockContext.Provider value={contextValue}>
      {children}
    </calculadoraAproveitamentoMockContext.Provider>
  );
};

export const useCalculadoraAproveitamentoMock = () => { return useContext(calculadoraAproveitamentoMockContext) }