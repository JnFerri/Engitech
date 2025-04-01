import { createContext, useContext, useState } from "react";


const MenuLateralContext = createContext()

/**
 * Contexto de MenuLateral
 *
 * Este contexto fornece os estados e funções necessários para gerenciar o menu lateral da Single Page Application:
 * 
 * ###Estados:
 * - `OpcaoSelecionadaMenuLateral` : Guarda informação da pagina selecionada no menu lateral e define Painel de utilização conforme seu valor.
 * - `TipoOpcoesMenuLateral` : Estado que possui a informação do tipo de informação que deve ser exibida no menu lateral quando acessado alguma pagina com um sub-menu.
 * 
 * ###Funções:
 * - `HandleOpcaoSelecionadaMenuLateral` : Define valor do estado OpcaoSelecionadaMenuLateral.
 * - `HandleTipoMenu` : Define Valor do estado TipoOpcoesMenuLateral.
 * 
 * Exemplo de uso:
 * ```
 * import { useChapasCadastradas } from 'caminho/do/contexto';
 * const { OpcaoSelecionadaMenuLateral , TipoOpcoesMenuLateral } = useMenuLateral();
 * ```
 */
export const MenuLateralProvider = ({children}) => {
    const [OpcaoSelecionadaMenuLateral, setOpcaoSelecionadaMenuLateral] = useState('')
    const [TipoOpcoesMenuLateral, setTipoOpcoesMenuLateral] = useState('')

    /**
     * Define valor do estado OpcaoSelecionadaMenuLateral conforme valor de opcaoNome repassado nos parametros.
     * 
     * @param {string} opcaoNome Nome da opção selecionada no menu lateral,  atualmente existentes são (`CalculadoraAproveitamento` , `ChapasCadastradas` , `CalculadoraPesoChapas` , `TodosUsuarios` , `CadastrarUsuario` ).
     */
    function HandleOpcaoSelecionadaMenuLateral(opcaoNome){
        setOpcaoSelecionadaMenuLateral(opcaoNome)
    }

    /**
     * Define valor do Estado TipoOpcoesMenuLateral conforme parametro `tipo` repassado.
     * 
     * @param {string} tipo Nome do sub-menu que esta sendo acessado. Atualmente existentes são (`CalculoChapas` , `UsuariosAdmin`) 
     */
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