import { createContext, useContext, useEffect, useState } from "react"
import { loginUsuario } from "../Services/Usuarios.js"

const UsuarioContext = createContext()


export const UsuarioProvider = ({children}) => {
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
    const [error, setError] = useState('')
    const [IsAuth, setIsAuth] = useState(false)
    const [Usuario, setUsuario] = useState([])
    const [TipoUsuario, setTipoUsuario] = useState(0)

    function handleEmail(e){
    setEmail(e.target.value)
    }
    
    function handleSenha(e){
    setSenha(e.target.value)
    }

    useEffect(() => {
        const Usuarios = localStorage.getItem('Usuario')
        if(Usuarios){
            const Usuario = JSON.parse(Usuarios)
            setTipoUsuario(Usuario.tpu_id)
        }
    }, [])

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