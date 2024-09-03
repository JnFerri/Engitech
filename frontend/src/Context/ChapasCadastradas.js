import { createContext, useContext, useEffect, useState } from "react";
import { AtualizarChapa, cadastrarChapa, pegarChapaPorCodigo, pegarChapaPorMaterial, pegarTodasChapas } from "../Services/Chapas.js";


const ChapasCadastradasContext = createContext()

export const ChapasCadastradasProvider  = ({children}) => {
    const [DadosChapasLista, setDadosChapasLista] = useState([])
    const [InputPesquisaValor, setInputPesquisaValor] = useState('')
    const [TipoPesquisaSelecionado, setTipoPesquisaSelecionado] = useState('codigo')
    const [OpcoesMateriais, setOpcoesMateriais] = useState([])
    const [ModalCadastroChapaEstaVisivel, setModalCadastroChapaEstaVisivel] = useState(false)
    const [ModalAtualizacaoChapaEstaVisivel, setModalAtualizacaoChapaEstaVisivel] = useState(false)
    const [CodigoChapaFormModal, setCodigoChapaFormModal] = useState(0)
    const [DescricaoChapaFormModal, setDescricaoChapaFormModal] = useState('')
    const [ComprimentoChapaFormModal, setComprimentoChapaFormModal] = useState(0)
    const [AlturaChapaFormModal, setAlturaChapaFormModal] = useState(0)
    const [EspessuraChapaFormModal, setEspessuraChapaFormModal] = useState(0)
    const [MaterialChapaFormModal, setMaterialChapaFormModal] = useState(0)
    const [PaginaSucessoCadastroEstaAtiva, setPaginaSucessoCadastroEstaAtiva] = useState(false)
    

    useEffect(() => {
        async  function pegarTodosDadosDasChapas(){
              await HandlePegarTodosDadosChapas()
          }  
          pegarTodosDadosDasChapas()
      },[])

      useEffect(() => {
        console.log(CodigoChapaFormModal)
      },[CodigoChapaFormModal])

     
    

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

    async function HandlePegarTodosDadosChapas(){
        try{
            const resultado = await pegarTodasChapas()
            console.log(resultado.data)
            if(resultado.status === 200){
                setDadosChapasLista(resultado.data)
            }
        }catch(err){
            window.alert(err)
        }
    }

    function AbrirModalChapa(tipo , dadosChapaAtualizacao){
        if(tipo === 'cadastro'){
        setModalCadastroChapaEstaVisivel(true)
        } else if(tipo === 'atualizacao'){

            setCodigoChapaFormModal(dadosChapaAtualizacao.cha_codigo)
            setDescricaoChapaFormModal(dadosChapaAtualizacao.cha_nome)
            setComprimentoChapaFormModal(dadosChapaAtualizacao.cha_comprimento)
            setAlturaChapaFormModal(dadosChapaAtualizacao.cha_altura)
            setEspessuraChapaFormModal(dadosChapaAtualizacao.cha_espessura)
            setMaterialChapaFormModal(dadosChapaAtualizacao.mat_id)
            
            setModalAtualizacaoChapaEstaVisivel(true);
        }else{
            window.alert('Função AbrirModalChapa esta sem tipo definido, cadastro ou atualização. Contate o administrador do sistema.')
        }
    }

    function FecharModalCadastroChapa(){
        setPaginaSucessoCadastroEstaAtiva(false)
        setModalCadastroChapaEstaVisivel(false)
        setModalAtualizacaoChapaEstaVisivel(false)
        setCodigoChapaFormModal(0)
        setDescricaoChapaFormModal('')
        setComprimentoChapaFormModal(0)
        setAlturaChapaFormModal(0)
        setEspessuraChapaFormModal(0)
        setMaterialChapaFormModal('')
    }

    function HandleCodigoChapaFormModal(e){
            setCodigoChapaFormModal(e.target.value)
    }
    
    function HandleDescricaoChapaFormModal(e){
        setDescricaoChapaFormModal(e.target.value)
    }

    function HandleComprimentoChapaFormModal(e){
        setComprimentoChapaFormModal(e.target.value)
    }

    function HandleAlturaChapaFormModal(e){
        setAlturaChapaFormModal(e.target.value)
    }

    function HandleEspessuraChapaFormModal(e){
        setEspessuraChapaFormModal(e.target.value)
    }

    function HandleMaterialChapaFormModal(e){
        setMaterialChapaFormModal(e.target.value)
    }

    async function CadastrarChapa(e){
        e.preventDefault()
        if(CodigoChapaFormModal !== 0 && DescricaoChapaFormModal !== '' && ComprimentoChapaFormModal !== 0 && AlturaChapaFormModal !== 0 && EspessuraChapaFormModal !== 0 && MaterialChapaFormModal !== 0){
            const resultado = await cadastrarChapa(CodigoChapaFormModal,DescricaoChapaFormModal,ComprimentoChapaFormModal,AlturaChapaFormModal,EspessuraChapaFormModal,MaterialChapaFormModal)
            if(resultado.status === 201){
                setPaginaSucessoCadastroEstaAtiva(true)
                setCodigoChapaFormModal(0)
                setDescricaoChapaFormModal('')
                setComprimentoChapaFormModal(0)
                setAlturaChapaFormModal(0)
                setEspessuraChapaFormModal(0)
                setMaterialChapaFormModal(0)
            }else{
                window.alert(resultado.data.message)
            }
        }else{
            window.alert('Valores 0 ou campos vazios não são permitidos, favor colocar valores validos.')
        }
    }


    function HandleFecharPaginaSucesso(){
        setPaginaSucessoCadastroEstaAtiva(false)
    }
    
    async function HandleAtualizarChapa(e){
        e.preventDefault()
        await AtualizarChapa()
    }


    return(
        <ChapasCadastradasContext.Provider value={{DadosChapasLista, InputPesquisaValor, TipoPesquisaSelecionado, HandleInputPesquisaValor, HandleTipoPesquisaSelecionado, HandlePegaDadosPesquisados , setOpcoesMateriais, OpcoesMateriais , AbrirModalChapa, FecharModalCadastroChapa, ModalCadastroChapaEstaVisivel , HandleCodigoChapaFormModal , HandleDescricaoChapaFormModal , HandleComprimentoChapaFormModal , HandleAlturaChapaFormModal , HandleEspessuraChapaFormModal , HandleMaterialChapaFormModal , CadastrarChapa , PaginaSucessoCadastroEstaAtiva , HandleFecharPaginaSucesso , HandlePegarTodosDadosChapas, HandleAtualizarChapa , ModalAtualizacaoChapaEstaVisivel , CodigoChapaFormModal , DescricaoChapaFormModal , ComprimentoChapaFormModal , AlturaChapaFormModal , EspessuraChapaFormModal , MaterialChapaFormModal }}>
            {children}
        </ChapasCadastradasContext.Provider>
    )
}

export const useChapasCadastradas = () => {
    return useContext(ChapasCadastradasContext)
}