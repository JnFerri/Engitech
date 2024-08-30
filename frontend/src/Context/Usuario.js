import { createContext, useContext, useState } from "react"
import { loginUsuario } from "../Services/Usuarios.js"

const UsuarioContext = createContext()


export const UsuarioProvider = ({children}) => {
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
    const [error, setError] = useState('')
    const [IsAuth, setIsAuth] = useState(false)
    const [Usuario, setUsuario] = useState([])

    function handleEmail(e){
    setEmail(e.target.value)
    }
    
    function handleSenha(e){
    setSenha(e.target.value)
    }

    async function handleSubmit(e , navigate){
        e.preventDefault()
        const result = await loginUsuario(email,senha)
        if(result.status === 200){  
            localStorage.setItem('Usuario' , JSON.stringify(result.data.data))
            localStorage.setItem('tokenAuth', result.data.tokenAuth)
            setUsuario(result.data.data)
            setIsAuth(true)
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
        <UsuarioContext.Provider value={{ email , senha , error , handleSubmit , handleEmail , handleSenha , IsAuth , setIsAuth , handleLogout , Usuario}}>
      {children}
    </UsuarioContext.Provider>
  );
  
}


export const useUsuario =() => {
    return useContext(UsuarioContext)
}