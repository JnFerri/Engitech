import { createContext, useContext, useEffect, useState } from "react"
import { loginUsuario } from "../Services/Usuarios.js"

const UsuarioContext = createContext()

/**
 * Contexto de Usuario
 *
 * Este contexto fornece os estados e funções necessários para gerenciar o usuario na tela de login.
 * 
 * ###Estados:
 * - `email` , `senha` : Contem os valores dos inputs do formulario de login.
 * - `error` : Guarda mensagem de erro para aparecer no formulario de login.
 * - `isAuth` : Informa se o usuario esta logado ou não na aplicação.
 * - `Usuario` : Guarda informação do usuario quando logado.
 * - `TipoUsuario` : Id do tipo de usuario logado, se ele é membro ou administrador.
 * 
 * ###Funções:
 * - `handleEmail` e `handleSenha` : Salvam os estados email e senha com os valores dos inputs do formulario de login.
 * - `handleSubmit` : Faz login na aplicação.
 * - `handleLogout` : Faz logout da aplicação.
 * 
 * Exemplo de uso:
 * ```
 * import { useUsuario } from 'caminho/do/contexto';
 * const { TipoUsuario , IsAuth } = useUsuario();
 * ```
 */
export const UsuarioProvider = ({children}) => {
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
    const [error, setError] = useState('')
    const [IsAuth, setIsAuth] = useState(false)
    const [Usuario, setUsuario] = useState([])
    const [TipoUsuario, setTipoUsuario] = useState(0)

    /**
     * Define valor do estado `email` conforme valor do input que ativou a função.
     * 
     * @param {*} e Evento ativador da função. 
     */
    function handleEmail(e){
    setEmail(e.target.value)
    }
    
    /**
     * Define valor do estado `senha`conforme valor do input que ativou a função.
     * 
     * @param {*} e Evento ativador da função. 
     */
    function handleSenha(e){
    setSenha(e.target.value)
    }

    // Ao carregar o componente ira pegar informações do usuario salvos na localstorage e caso exista, ira definir o TipoUsuario conforme tpu_id do usuario.
    useEffect(() => {
        const Usuarios = localStorage.getItem('Usuario')
        if(Usuarios){
            const Usuario = JSON.parse(Usuarios)
            setTipoUsuario(Usuario.tpu_id)
        }
    }, [])

    /**
     * Faz login na aplicação e Salva dados do usuario no localstorage e dados do token de autorização.
     * 
     * @param {*} e Evento ativador da função.
     * @param {function} navigate Função hook useNavigate() do react router. Passada como parametro pois precisa definir useNavigate() em componente de rota.  
     */
    async function handleSubmit(e , navigate){
        e.preventDefault()
        const result = await loginUsuario(email,senha)
        if(result.status === 200){  
            localStorage.setItem('Usuario' , JSON.stringify(result.data.data))
            localStorage.setItem('tokenAuth', result.data.tokenAuth)
            setUsuario(result.data.data)
            setIsAuth(true)
            setEmail('')
            setSenha('')
            navigate('/home')
        }else {
            setError(result.data.message)
        }
    }
    /**
     * Faz logout na aplicação retornando para a rota inicial '/' e removendo dados salvos no localStorage. 
     * 
     * @param {function} navigate Função hook useNavigate() do react router. Passada como parametro pois precisa definir useNavigate() em componente de rota.
     */
    async function handleLogout(navigate){
        localStorage.removeItem('Usuario')
        localStorage.removeItem('tokenAuth')
        setIsAuth(false)
        navigate('/')
    }

    

    
    return (
        <UsuarioContext.Provider value={{ email , senha , error , handleSubmit , handleEmail , handleSenha , IsAuth , setIsAuth , handleLogout , Usuario, TipoUsuario , setTipoUsuario}}>
      {children}
    </UsuarioContext.Provider>
  );
  
}


export const useUsuario =() => {
    return useContext(UsuarioContext)
}