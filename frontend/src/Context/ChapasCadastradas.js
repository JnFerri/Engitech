import { createContext, useContext, useEffect, useState } from "react";
import { AtualizarChapa, cadastrarChapa, pegarChapaPorCodigo, pegarChapaPorMaterial, pegarTodasChapas ,deletarChapaPorId } from "../Services/Chapas.js";




const ChapasCadastradasContext = createContext()


/**
 * Contexto de ChapasCadastradas
 *
 * Este contexto fornece os estados e funções necessários para gerenciar as chapas cadastradas.:
 * 
 * ###Estados:
 * - Dados das chapas que aparecerão na lista de chapas cadastradas. (`DadosChapaLista`)
 * - Valor do input do campo de pesquisa (`InputPesquisaValor`)
 * - Tipo de pesquisa que foi selecionado no select de tipo de pesquisa (`TipoPesquisaSelecionado`)
 * - Array com dados dos tipos de materiais existentes para pesquisa por material (`OpcoesMateriais`)
 * - Informa se modal de cadastro ou de atualização estão visiveis (`ModalCadastroChapaEstaVisivel`, `ModalAtualizacaoChapaEstaVisivel`)
 * - Valores dos inputs de cadastro ou atualização de chapa metalica (`CodigoChapaFormModal` , `DescricaoChapaFormModal` , `ComprimentoChapaFormModal` , `AlturaChapaFormModal` , `EspessuraChapaFormModal` , `MaterialChapaFormModal`)
 * - Informa se a pagina de sucesso de atualização ou cadastro de chapas esta ativa (`PaginaSucessoEstaAtiva`)
 * - Guarda informação do id da chapa que esta sendo atualizada (`idChapaAtualizacao`)
 * 
 * ###Funções:
 * - Salva dados dos inputs referentes a pesquisa (`HandleTipoPesquisaSelecionado` , HandleInputPesquisaValor )
 * - Altera dados salvos no componente DadosChapasLista conforme Pesquisa ( `HandlePegaDadosPesquisados` ) 
 * - Pega todos os dados de chapas do banco de dados e salva no estado DadosChapasLista (`HandlePegarTodosDadosChapas`)
 * - Abre modal para atualização ou cadastro de chapa metalica (`AbrirModalChapa`)
 * - Fecha modal de atualizacao ou cadastro de chapa metalica (`FecharModalCadastroChapa`)
 * - Salva valores dos inputs do modal de cadastro ou atualizacao em seus estados (`HandleCodigoChapaFormModal`,`HandleDescricaoChapaFormModal`,`HandleComprimentoChapaFormModal`,`HandleAlturaChapaFormModal`,`HandleEspessuraChapaFormModal`,`HandleMaterialChapaFormModal`)
 * - Cadastra nova chapa (`CadastrarChapa`)
 * - Fecha Pagina de sucesso do modal (`HandleFecharPaginaSucesso`)
 * - Atualiza chapa existente (`HandleAtualizarChapa`)
 * - Deleta chapa (`handleDeletarChapa`)
 * 
 * Exemplo de uso:
 * ```
 * import { useChapasCadastradas } from 'caminho/do/contexto';
 * const { DadosChapaLista, OpcoesMateriais } = useChapasCadastradas();
 * ```
 */
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
    const [MaterialChapaFormModal, setMaterialChapaFormModal] = useState('')
    const [PaginaSucessoEstaAtiva, setPaginaSucessoEstaAtiva] = useState(false)
    const [idChapaAtualizacao, setIdChapaAtualizacao] = useState(0)

    //Pega todos os dados das chapas ao carregar o componente.
    useEffect(() => {
        async  function pegarTodosDadosDasChapas(){
              await HandlePegarTodosDadosChapas()
          }  
          pegarTodosDadosDasChapas()
      },[])


   /**
    * Salva informação de tipo de pesquisa selecionado no estado 'TipoPesquisaSelecionado'
    * 
    * @param {*} e - Evento ativador da função
    */
    function HandleTipoPesquisaSelecionado(e){
        setInputPesquisaValor('')
        setTipoPesquisaSelecionado(e.target.value)
    }

    /**
     * Salva valor do input de pesquisa no estado 'InputPesquisaValor'
     * 
     * @param {*} e - Evento ativador da função.
     */
    function HandleInputPesquisaValor(e){
        setInputPesquisaValor(e.target.value)
    }

    /**  Caso estado 'TipoPesquisaSelecionado' for código pega dados das chapas conforme rota da API para pegar dados pelo código. Caso for material, ira pegar os dados das chapas pela rota de pegar chapas por material conforme material selecionado.
     * 
     * @param {*} e - Evento ativador da função.
     */ 
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
                        setDadosChapasLista(resultado.data)
                    }
            }
        }
        }catch(err){
            window.alert(err)
        }
    }

    /**  Pega todos os dados das chapas existentes no banco de dados da aplicação e salva no estado DadosChapasLista.*/
    async function HandlePegarTodosDadosChapas(){
        try{
            const resultado = await pegarTodasChapas()
            if(resultado.status === 200){
                setDadosChapasLista(resultado.data)
            }
        }catch(err){
            window.alert(err)
        }
    }

    /**  Abre modal para cadastro ou atualização de chapa, caso o tipo for cadastro ira abrir o formulario com inputs vazios, caso for atualização ira abrir o formulario com inputs já preenchidos conforme dados da chapa que esta sendo atualizada.
     * @param {'cadastro' | 'atualizacao'} tipo - Tipo de operação: "cadastro" ou "atualizacao".
     * @param {Object} dadosChapaAtualizacao - Objeto contendo os dados da chapa a ser atualizada.
     * */
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
            setIdChapaAtualizacao(dadosChapaAtualizacao.cha_id)
            setModalAtualizacaoChapaEstaVisivel(true);
        }else{
            window.alert('Função AbrirModalChapa esta sem tipo definido, cadastro ou atualização. Contate o administrador do sistema.')
        }
    }

    /**
     * Fecha o modal de cadastro ou atualização de chapa.
     */
    function FecharModalCadastroChapa(){
        setPaginaSucessoEstaAtiva(false)
        setModalCadastroChapaEstaVisivel(false)
        setModalAtualizacaoChapaEstaVisivel(false)
        setCodigoChapaFormModal(0)
        setDescricaoChapaFormModal('')
        setComprimentoChapaFormModal(0)
        setAlturaChapaFormModal(0)
        setEspessuraChapaFormModal(0)
        setMaterialChapaFormModal('')
    }

    /**
     * Salva o valor do input no estado CodigoChapaFormModal.
     * 
     * @param {*} e Evento de ativação da função.
     *  
     */
    function HandleCodigoChapaFormModal(e){
            setCodigoChapaFormModal(e.target.value)
    }
    
    /**
     * Salva o valor do input no estado DescricaoChapaFormModal.
     * 
     * @param {*} e Evento de ativação da função.
     *  
     */
    function HandleDescricaoChapaFormModal(e){
        setDescricaoChapaFormModal(e.target.value)
    }

    /**
     * Salva o valor do input no estado ComprimentoChapaFormModal.
     * 
     * @param {*} e Evento de ativação da função.
     *  
     */
    function HandleComprimentoChapaFormModal(e){
        setComprimentoChapaFormModal(e.target.value)
    }

    /**
     * Salva o valor do input no estado AlturaChapaFormModal.
     * 
     * @param {*} e Evento de ativação da função.
     *  
     */
    function HandleAlturaChapaFormModal(e){
        setAlturaChapaFormModal(e.target.value)
    }

    /**
     * Salva o valor do input no estado EspessuraChapaFormModal.
     * 
     * @param {*} e Evento de ativação da função.
     *  
     */
    function HandleEspessuraChapaFormModal(e){
        setEspessuraChapaFormModal(e.target.value)
    }

    /**
     * Salva o valor do input no estado MaterialChapaFormModal.
     * 
     * @param {*} e Evento de ativação da função.
     *  
     */
    function HandleMaterialChapaFormModal(e){
        setMaterialChapaFormModal(e.target.value)
    }
    
    /**
     * Cadastra nova chapa metalica conforme dados dos estados (CodigoChapaFormModal, DescricaoChapaFormModal, ComprimentoChapaFormModal, AlturaChapaFormModal, EspessuraChapaFormModal, MaterialChapaFormModal)
     * 
     * @param {*} e  Evento de ativação da função.
     */
    async function CadastrarChapa(e){
        e.preventDefault()
        if(CodigoChapaFormModal !== 0 && DescricaoChapaFormModal !== '' && ComprimentoChapaFormModal !== 0 && AlturaChapaFormModal !== 0 && EspessuraChapaFormModal !== 0 && MaterialChapaFormModal !== 0){
            const resultado = await cadastrarChapa(CodigoChapaFormModal,DescricaoChapaFormModal,ComprimentoChapaFormModal,AlturaChapaFormModal,EspessuraChapaFormModal,MaterialChapaFormModal)
            if(resultado.status === 201){
                setPaginaSucessoEstaAtiva(true)
                setCodigoChapaFormModal(0)
                setDescricaoChapaFormModal('')
                setComprimentoChapaFormModal(0)
                setAlturaChapaFormModal(0)
                setEspessuraChapaFormModal(0)
                setMaterialChapaFormModal('')
                HandlePegarTodosDadosChapas()
            }else{
                window.alert(resultado.data.message)
            }
        }else{
            window.alert('Valores 0 ou campos vazios não são permitidos, favor colocar valores validos.')
        }
    }

    /**
     * Fecha pagina de sucesso.
     */
    function HandleFecharPaginaSucesso(){
        setPaginaSucessoEstaAtiva(false)
    }
    
    /**
     * Atualiza chapa conforme dados dos estados ( CodigoChapaFormModal , DescricaoChapaFormModal , ComprimentoChapaFormModal , AlturaChapaFormModal , EspessuraChapaFormModal , MaterialChapaFormModal )
     * 
     * @param {*} e Evento ativador da função. 
     */
    async function HandleAtualizarChapa(e){
        e.preventDefault()
       const resultado =  await AtualizarChapa(CodigoChapaFormModal, DescricaoChapaFormModal, ComprimentoChapaFormModal, AlturaChapaFormModal, EspessuraChapaFormModal, MaterialChapaFormModal, idChapaAtualizacao)
       if(resultado.status === 200){
           setPaginaSucessoEstaAtiva(true)
           HandlePegarTodosDadosChapas()
       }else{
        window.alert(`Algum erro ao atualizar a chapa, ${resultado.data.message} `)
       }
    }

    /**
     * Deleta uma chapa no banco de dados conforme id repassado nos parametros.
     * 
     * @param {number} cha_id - id da chapa no banco de dados que será deletada.
     */
    async function handleDeletarChapa(cha_id){
        const confirmacao = window.confirm('Atenção : Voce realmente quer excluir a chapa ?')
        if(confirmacao === true){
            const resultado = await deletarChapaPorId(cha_id)
            if(resultado.status === 204){
                window.alert(resultado.data.message)
                HandlePegarTodosDadosChapas()
            }else{
                window.alert(`Algum erro ao deletar chapa : status : ${resultado.status} , message : ${resultado.data.message}`)
            }
        }
        }


    return(
        <ChapasCadastradasContext.Provider value={{DadosChapasLista, InputPesquisaValor, TipoPesquisaSelecionado, HandleInputPesquisaValor, HandleTipoPesquisaSelecionado, HandlePegaDadosPesquisados , setOpcoesMateriais, OpcoesMateriais , AbrirModalChapa, FecharModalCadastroChapa, ModalCadastroChapaEstaVisivel , HandleCodigoChapaFormModal , HandleDescricaoChapaFormModal , HandleComprimentoChapaFormModal , HandleAlturaChapaFormModal , HandleEspessuraChapaFormModal , HandleMaterialChapaFormModal , CadastrarChapa , PaginaSucessoEstaAtiva , HandleFecharPaginaSucesso , HandlePegarTodosDadosChapas, HandleAtualizarChapa , ModalAtualizacaoChapaEstaVisivel , CodigoChapaFormModal , DescricaoChapaFormModal , ComprimentoChapaFormModal , AlturaChapaFormModal , EspessuraChapaFormModal , MaterialChapaFormModal, handleDeletarChapa }}>
            {children}
        </ChapasCadastradasContext.Provider>
    )
}

export const useChapasCadastradas = () => {
    return useContext(ChapasCadastradasContext)
}