import styled from "styled-components";
import Imagem from "../Imagem/Imagem.js";
import logoEngitech from '../../Images/Engitech_logo.png'
import MenuDropDownUsuario from "../MenuDopDownUsuario/MenuDropDownUsuario.js";

const NavBarContainer = styled.section`
display:flex;
align-items:center;
justify-content:space-between;
background-color:#314159;
width:100%;
`

function NavBarSuperior(){
    return(
        <NavBarContainer>
            <Imagem src={logoEngitech} alt="logo engitech" width='4%' margin='0.5rem 1rem' />
            <MenuDropDownUsuario/>
        </NavBarContainer>
    )
}

export default NavBarSuperior