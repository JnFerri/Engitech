import { createContext, useContext, useEffect, useState } from "react"
import { alterarSenhaUsuario, InativarUsuario, pegarTodosUsuariosPorEmailPesquisa, PegaTodosOsUsuarios } from "../Services/Usuarios.js"


const TodosUsuariosContext = createContext()

export const TodosUsuariosProvider = ({children}) => {
    const [DadosTodosUsuarios, setDadosTodosUsuarios] = useState([])
    const [DadosPesquisa, setDadosPesquisa] = useState([])
    const [ModalAlteracaoSenhaEstaAtivo, setModalAlteracaoSenhaEstaAtivo] = useState(false)
    const [NovaSenhaFormModal, setNovaSenhaFormModal] = useState('')
    const [ConfirmaNovaSenhaFormModal, setConfirmaNovaSenhaFormModal] = useState('')
    const [DadosUsuarioModalAlteracaoSenha, setDadosUsuarioModalAlteracaoSenha] = useState([])
    const [PaginaSucessoAlteracaoSenhaEstaAtiva, setPaginaSucessoAlteracaoSenhaEstaAtiva] = useState(false)


    useEffect( () => {
        async function pegarUsuarios() {
        const resultado = await PegaTodosOsUsuarios()
        setDadosTodosUsuarios(resultado.data) 
      }
      pegarUsuarios()
    }
    ,[])

    useEffect(() => {
      console.log(ModalAlteracaoSenhaEstaAtivo)
  }, [ModalAlteracaoSenhaEstaAtivo])

    useEffect(() => {
      setDadosTodosUsuarios(DadosPesquisa)
    }, [DadosPesquisa])

    async function PesquisaEmail(e){
        if(e.target.value !== ''){
          const result = await pegarTodosUsuariosPorEmailPesquisa(e.target.value)
          console.log(result)
          setDadosPesquisa(result.data)
        }else {
          async function pegarUsuarios() {
            const resultado = await PegaTodosOsUsuarios()
            setDadosTodosUsuarios(resultado.data) 
          }
          pegarUsuarios()
        }
      }

      function AbrirModalAlteracaoSenha(dadosUsuario){
        setModalAlteracaoSenhaEstaAtivo(true)
        setDadosUsuarioModalAlteracaoSenha(dadosUsuario)
      }

      function FecharModalAlteracaoSenha(){
        setModalAlteracaoSenhaEstaAtivo(false)
        setNovaSenhaFormModal('')
        setConfirmaNovaSenhaFormModal('')
        setPaginaSucessoAlteracaoSenhaEstaAtiva(false)
      }

      function HandleNovaSenhaFormModal(e){
        setNovaSenhaFormModal(e.target.value)
      }

      function HandleConfirmaNovaSenhaFormModal(e){
        setConfirmaNovaSenhaFormModal(e.target.value)
      }

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

    async function HandleInativarUsuario(dadosUsuario){
      const confirmacao = window.confirm(`Tem certeza que quer inativar o usuario ${dadosUsuario.usu_nome} ?`)
      if(confirmacao){
        const resultado = await InativarUsuario(dadosUsuario.usu_id)
        console.log(resultado)
        if(resultado.status === 200){
          const resultado = await PegaTodosOsUsuarios()
          setDadosTodosUsuarios(resultado.data)
          window.alert(`Usuario ${dadosUsuario.usu_nome} inativado com sucesso.`)
        }
      }
    }

      return(
        <TodosUsuariosContext.Provider value={{DadosTodosUsuarios, PesquisaEmail , ModalAlteracaoSenhaEstaAtivo , AbrirModalAlteracaoSenha , FecharModalAlteracaoSenha , HandleNovaSenhaFormModal , HandleConfirmaNovaSenhaFormModal , NovaSenhaFormModal , ConfirmaNovaSenhaFormModal , DadosUsuarioModalAlteracaoSenha , AlterarSenhaUsuario , PaginaSucessoAlteracaoSenhaEstaAtiva , HandleInativarUsuario , setDadosTodosUsuarios}}>
            {children}
        </TodosUsuariosContext.Provider>
      )

}

export const useTodosUsuarios =() => {
    return useContext(TodosUsuariosContext)
}