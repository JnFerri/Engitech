import { createContext, useContext, useState } from "react";
import { pegarChapaPorCodigo, pegarChapaPorMaterial } from "../Services/Chapas.js";


const ChapasCadastradasContext = createContext()

export const ChapasCadastradasProvider  = ({children}) => {
    const [DadosChapasLista, setDadosChapasLista] = useState([])
    const [InputPesquisaValor, setInputPesquisaValor] = useState('')
    const [TipoPesquisaSelecionado, setTipoPesquisaSelecionado] = useState('codigo')
    const [OpcoesMateriais, setOpcoesMateriais] = useState([])
    const [ModalCadastroChapaEstaVisivel, setModalCadastroChapaEstaVisivel] = useState(false)
    

    function HandleTipoPesquisaSelecionado(e){
        setInputPesquisaValor('')
        setTipoPesquisaSelecionado(e.target.value)
    }

    function HandleInputPesquisaValor(e){
        setInputPesquisaValor(e.target.value)
    }

    async function HandlePegaDadosPesquisados(e){
        try{
            e.preventDefault()
            if(TipoPesquisaSelecionado !== '') {
                if(TipoPesquisaSelecionado === 'codigo'){
                    const resultado = await pegarChapaPorCodigo(InputPesquisaValor)
                    if(resultado.status === 200){
                        setDadosChapasLista(resultado.data)
                    }
                }else if(TipoPesquisaSelecionado === 'material'){
                    const resultado = await pegarChapaPorMaterial(InputPesquisaValor)
                    if(resultado.status === 200){
                        console.log(resultado.data)
                        setDadosChapasLista(resultado.data)
                    }
            }
        }
        }catch(err){
            window.alert(err)
        }
    }

    function AbrirModalCadastroChapa(){
        setModalCadastroChapaEstaVisivel(true)
    }

    function FecharModalCadastroChapa(){
        setModalCadastroChapaEstaVisivel(false)
    }
    


    return(
        <ChapasCadastradasContext.Provider value={{DadosChapasLista, InputPesquisaValor, TipoPesquisaSelecionado, HandleInputPesquisaValor, HandleTipoPesquisaSelecionado, HandlePegaDadosPesquisados , setOpcoesMateriais, OpcoesMateriais , AbrirModalCadastroChapa, FecharModalCadastroChapa, ModalCadastroChapaEstaVisivel }}>
            {children}
        </ChapasCadastradasContext.Provider>
    )
}

export const useChapasCadastradas = () => {
    return useContext(ChapasCadastradasContext)
}