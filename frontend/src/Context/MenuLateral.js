import { createContext, useContext, useState } from "react";


const MenuLateralContext = createContext()

export const MenuLateralProvider = ({children}) => {
    const [OpcaoSelecionadaMenuLateral, setOpcaoSelecionadaMenuLateral] = useState('')


    function HandleOpcaoSelecionadaMenuLateral(opcaoNome){
        setOpcaoSelecionadaMenuLateral(opcaoNome)
    }


    return(
        <MenuLateralContext.Provider value={{OpcaoSelecionadaMenuLateral, HandleOpcaoSelecionadaMenuLateral}}>
            {children}
        </MenuLateralContext.Provider>
    )
}

export const useMenuLateral =() => {
    return useContext(MenuLateralContext)
}