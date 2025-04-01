import { createContext, useContext, useEffect, useState } from "react"
import { alterarSenhaUsuario, inativarUsuario, pegarTodosUsuariosPorEmailPesquisa, PegaTodosOsUsuarios ,ativarUsuario } from "../Services/Usuarios.js"


const TodosUsuariosContext = createContext()

/**
 * Contexto de TodosUsuarios
 *
 * Este contexto fornece os estados e funções necessários para gerenciar os usuarios na lista de visualização:
 * 
 * ###Estados:
 * - `DadosTodosUsuarios` : Contem array com os dados de todos os usuarios para exibir na lista.
 * - `DadosPesquisa` : Contem array com os dados dos usuarios que possuem email conforme pesquisa.
 * - `ModalALteracaoSenhaEstaAtivo` : Informa se o modal de alteração de senha esta ativo ou não.
 * - `NovaSenhaFormModal` e `ConfirmaNovaSenhaFormModal` : Possuem informação da nova senha e confirmação ao alterar senha.
 * - `DadosUsuarioModalAlteraçãoSenha` : Possui os dados do usuario que esta tendo a sua senha alterada.
 * - `PaginaSucessoAlteracaoSenhaEstaAtiva` : Informa se a pagina de sucesso de alteração de senha esta ativa ou não.
 * 
 * ###Funções:
 * - `PesquisaEmail` : Pesquisa usuarios no banco de dados contendo string digitada no input de pesquisa e salva os dados no estado `DadosPesquisa`.
 * - `AbrirModalAlteracaoSenha` e `FecharModalAlteracaoSenha` : Funções responsáveis por abrir ou fechar modal de alteração de senha de usuario.
 * - `HandleNovaSenhaFormModal` e `HandleConfirmaNovaSenhaFormModal` : Funções responsáveis por salvar valores dos inputs de nova senha e confirmação da nova senha no modal de alteração de senha de usuario.
 * - `AlterarSenhaUsuario` : Altera senha do usuario no banco de dados.
 * - `HandleInativarUsuario` : Altera status do usuario para inativo no banco de dados.
 * - `HandleAtivarUsuario` : Ativa usuario no banco de dados.
 * 
 * Exemplo de uso:
 * ```
 * import { useTodosUsuarios } from 'caminho/do/contexto';
 * const { DadosTodosUsuarios , DadosPesquisa } = useTodosUsuarios();
 * ```
 */
export const TodosUsuariosProvider = ({children}) => {
    const [DadosTodosUsuarios, setDadosTodosUsuarios] = useState([])
    const [DadosPesquisa, setDadosPesquisa] = useState([])
    const [ModalAlteracaoSenhaEstaAtivo, setModalAlteracaoSenhaEstaAtivo] = useState(false)
    const [NovaSenhaFormModal, setNovaSenhaFormModal] = useState('')
    const [ConfirmaNovaSenhaFormModal, setConfirmaNovaSenhaFormModal] = useState('')
    const [DadosUsuarioModalAlteracaoSenha, setDadosUsuarioModalAlteracaoSenha] = useState([])
    const [PaginaSucessoAlteracaoSenhaEstaAtiva, setPaginaSucessoAlteracaoSenhaEstaAtiva] = useState(false)

  // Pega os dados de todos os usuarios quando carrega o componente e salva no estado `DadosTodosUsuarios`.
    useEffect( () => {
        async function pegarUsuarios() {
        const resultado = await PegaTodosOsUsuarios()
        setDadosTodosUsuarios(resultado.data) 
      }
      pegarUsuarios()
    }
    ,[])

    
    // Sempre que alterado o valor do estado `DadosPesquisa` ira atualizar o estado `DadosTodosUsuarios`conforme valor de DadosPesquisa.
    useEffect(() => {
      setDadosTodosUsuarios(DadosPesquisa)
    }, [DadosPesquisa])

    /**
     * Pesquisa os usuarios no banco de dados conforme email descrito no input ativador da função.
     * 
     * @param {*} e  Evento ativador da função.
     */
    async function PesquisaEmail(e){
        if(e.target.value !== ''){
          const result = await pegarTodosUsuariosPorEmailPesquisa(e.target.value)
          setDadosPesquisa(result.data)
        }else {
          async function pegarUsuarios() {
            const resultado = await PegaTodosOsUsuarios()
            setDadosTodosUsuarios(resultado.data) 
          }
          pegarUsuarios()
        }
      }

      /**
       * Abre modal de alteração de senha do usuario.
       * 
       * @param {object} dadosUsuario Objeto contendo os dados do usuario que será alterado a senha. 
       */
      function AbrirModalAlteracaoSenha(dadosUsuario){
        console.log(dadosUsuario)
        setModalAlteracaoSenhaEstaAtivo(true)
        setDadosUsuarioModalAlteracaoSenha(dadosUsuario)
      }

      /**
       * Fecha modal de alteração de senha do usuario.
       */
      function FecharModalAlteracaoSenha(){
        setModalAlteracaoSenhaEstaAtivo(false)
        setNovaSenhaFormModal('')
        setConfirmaNovaSenhaFormModal('')
        setPaginaSucessoAlteracaoSenhaEstaAtiva(false)
      }
      /**
       * Define o estado `NovaSenhaFormModal`conforme valor do input que ativou a função.
       * 
       * @param {*} e  Evento disparador da função.
       */
      function HandleNovaSenhaFormModal(e){
        setNovaSenhaFormModal(e.target.value)
      }

      /**
       * Define o estado ConfirmaNovaSenhaFormModal com o valor do input que ativou a função.
       * 
       * @param {*} e Evento disparador da função. 
       */
      function HandleConfirmaNovaSenhaFormModal(e){
        setConfirmaNovaSenhaFormModal(e.target.value)
      }

      /**
       * Altera a senha de um usuario conforme valor do estado `NovaSenhaFormModal`.  
       * 
       * @param {number} id Id do usuario que terá sua senha alterada. 
       * @param {*} e Evento disparador da função.
       */
     async function AlterarSenhaUsuario(id, e){
        e.preventDefault()
        if(NovaSenhaFormModal === ConfirmaNovaSenhaFormModal){
          if(NovaSenhaFormModal.length >= 6){
            const resultado = await alterarSenhaUsuario(id, NovaSenhaFormModal)
            if(resultado.status === 200){
              setPaginaSucessoAlteracaoSenhaEstaAtiva(true)
            }else{
              window.alert(resultado.data.message)
            }
          }else{
            window.alert('Coloque uma senha com ao menos 6 digitos.')
          }
      }else{
        window.alert('Confirmação de senha falhou, verifique se as duas senhas são iguais.')
      }
    }

    /**
     * Inativa um usuario.
     * 
     * @param {object} dadosUsuario Dados do usuario que será inativado. 
     */
    async function HandleInativarUsuario(dadosUsuario){
      const confirmacao = window.confirm(`Tem certeza que quer inativar o usuario ${dadosUsuario.usu_nome} ?`)
      if(confirmacao){
        const resultado = await inativarUsuario(dadosUsuario.usu_id)
        if(resultado.status === 200){
          const resultado = await PegaTodosOsUsuarios()
          setDadosTodosUsuarios(resultado.data)
          window.alert(`Usuario ${dadosUsuario.usu_nome} inativado com sucesso.`)
        }
      }
    }
    
    /**
     * Ativa um usuario.
     * 
     * @param {object} dadosUsuario Dados do usuario que será ativado. 
     */
    async function HandleAtivarUsuario(dadosUsuario){
      const resultado = await ativarUsuario(dadosUsuario.usu_id)
        if(resultado.status === 200){
          const resultado = await PegaTodosOsUsuarios()
          setDadosTodosUsuarios(resultado.data)
          window.alert(`Usuario ${dadosUsuario.usu_nome} ativado com sucesso.`)
        }
    }

      return(
        <TodosUsuariosContext.Provider value={{DadosTodosUsuarios, PesquisaEmail , ModalAlteracaoSenhaEstaAtivo , AbrirModalAlteracaoSenha , FecharModalAlteracaoSenha , HandleNovaSenhaFormModal , HandleConfirmaNovaSenhaFormModal , NovaSenhaFormModal , ConfirmaNovaSenhaFormModal , DadosUsuarioModalAlteracaoSenha , AlterarSenhaUsuario , PaginaSucessoAlteracaoSenhaEstaAtiva , HandleInativarUsuario , setDadosTodosUsuarios , HandleAtivarUsuario}}>
            {children}
        </TodosUsuariosContext.Provider>
      )

}

export const useTodosUsuarios =() => {
    return useContext(TodosUsuariosContext)
}