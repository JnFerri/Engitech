import styled from "styled-components";
import bannerImagem from '../../Images/background-login.png'

const BannerLogin  = styled.div`
background-image: url(${bannerImagem}); /* Substitua pelo caminho correto da sua imagem */
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    height: 100vh;
    width: 100vw;
    
    @media (max-width: 767px) {
    display:none; 
  }
`

export default BannerLogin