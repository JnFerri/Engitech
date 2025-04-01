import React, { createContext, useContext } from 'react';
import {  useCalculadoraPesoChapa } from '../../Context/CalculadoraPesoChapa.js';

const calculadoraPesoChapaMockContext = createContext()

export const CalculadoraPesoChapaMockProvider = ({ children,value }) => {
  const {EspessuraFormCalculadoraPesoChapa, AlturaFormCalculadoraPesoChapa, ComprimentoFormCalculadoraPesoChapa, MaterialFormCalculadoraPesoChapa, HandleEspessuraFormCalculadoraPesoChapa, HandleAlturaFormCalculadoraPesoChapa, HandleComprimentoFormCalculadoraPesoChapa, HandleMaterialFormCalculadoraPesoChapa, HandleCalcularPesoChapa , DadosChapaResultado } = useCalculadoraPesoChapa()
  

  const contextValue = value && Object.keys(value).length !== 0 ? value : {
    EspessuraFormCalculadoraPesoChapa,
    AlturaFormCalculadoraPesoChapa,
    ComprimentoFormCalculadoraPesoChapa,
    MaterialFormCalculadoraPesoChapa,
    HandleEspessuraFormCalculadoraPesoChapa,
    HandleAlturaFormCalculadoraPesoChapa,
    HandleComprimentoFormCalculadoraPesoChapa,
    HandleMaterialFormCalculadoraPesoChapa,
    HandleCalcularPesoChapa,
    DadosChapaResultado
  };
  
  return (
    <calculadoraPesoChapaMockContext.Provider value={contextValue}>
      {children}
    </calculadoraPesoChapaMockContext.Provider>
  );
};

export const useCalculadoraPesoChapaMock = () => { return useContext(calculadoraPesoChapaMockContext) }