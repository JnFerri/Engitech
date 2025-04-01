import styled from "styled-components";
import Imagem from "../Components/Imagem/Imagem.js";
import engiTechLogo from '../Images/Engitech_logo.png'
import FormLogin from "../Components/FormLogin/FormLogin.js";
import BannerLogin from "../Components/BannerLogin.js/BannerLogin.js";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useUsuario } from "../Context/Usuario.js";

const LoginPage = styled.section`
display:flex;
align-items:center;
width:100%;
height:100vh;


`

const LoginFormContainer = styled.div`
display:flex;
flex-direction: column;
align-items:center;
justify-content:center;
width:30%;
height:100%;
background-color:black;

@media (max-width: 767px) {
   width:100%; 
  }
`

// Componente de pagina de login, une o componente de formulario de login e Banner da tela de login.
function Login(){
    const {IsAuth} = useUsuario()

    const navigate = useNavigate()

    // Caso o estado isAuth for true já encaminha o usuario para a rota /home.
    useEffect(() => {
        if(IsAuth){
            navigate('/home')
        }
    })

    return(
    <LoginPage>
        <LoginFormContainer>
            <Imagem src={engiTechLogo} alt="Logo Engitech" width='60%' height='auto' />
            <FormLogin width='80%' />
        </LoginFormContainer>
        <BannerLogin/>
    </LoginPage>
    )
}

export default Login

