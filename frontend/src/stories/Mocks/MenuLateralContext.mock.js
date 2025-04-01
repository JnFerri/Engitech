import React, { createContext, useContext } from 'react';
import { useMenuLateral } from '../../Context/MenuLateral.js';

const MenuLateralMockContext = createContext()

export const MenuLateralMockProvider = ({ children,value }) => {
  const {OpcaoSelecionadaMenuLateral, HandleOpcaoSelecionadaMenuLateral , TipoOpcoesMenuLateral, HandleTipoMenu } = useMenuLateral()
  

  const contextValue = value && Object.keys(value).length !== 0 ? value : {
    OpcaoSelecionadaMenuLateral, HandleOpcaoSelecionadaMenuLateral , TipoOpcoesMenuLateral, HandleTipoMenu
  };
  
  return (
    <MenuLateralMockContext.Provider value={contextValue}>
      {children}
    </MenuLateralMockContext.Provider>
  );
};

export const useMenuLateralMock = () => { return useContext(MenuLateralMockContext) }