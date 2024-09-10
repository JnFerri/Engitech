import { createContext, useContext, useState } from "react";


const MenuLateralContext = createContext()

export const MenuLateralProvider = ({children}) => {
    const [OpcaoSelecionadaMenuLateral, setOpcaoSelecionadaMenuLateral] = useState('')
    const [TipoOpcoesMenuLateral, setTipoOpcoesMenuLateral] = useState('')

    function HandleOpcaoSelecionadaMenuLateral(opcaoNome){
        setOpcaoSelecionadaMenuLateral(opcaoNome)
    }

    function HandleTipoMenu(tipo){
        setTipoOpcoesMenuLateral(tipo)
    }


    return(
        <MenuLateralContext.Provider value={{OpcaoSelecionadaMenuLateral, HandleOpcaoSelecionadaMenuLateral , TipoOpcoesMenuLateral, HandleTipoMenu}}>
            {children}
        </MenuLateralContext.Provider>
    )
}

export const useMenuLateral =() => {
    return useContext(MenuLateralContext)
}