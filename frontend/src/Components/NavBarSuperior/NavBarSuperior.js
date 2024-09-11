import styled from "styled-components";
import Imagem from "../Imagem/Imagem.js";
import logoEngitech from '../../Images/Engitech_logo.png'
import MenuDropDownUsuario from "../MenuDropDownUsuario/MenuDropDownUsuario.js";
import { useMenuLateral } from "../../Context/MenuLateral.js";

const NavBarContainer = styled.section`
display:flex;
align-items:center;
justify-content:space-between;
background-color:#314159;
width:100%;
height:6%;
min-height:6%;
`


function NavBarSuperior(){
    const {HandleTipoMenu} = useMenuLateral()
    return(
        <NavBarContainer>
            <Imagem src={logoEngitech} alt="logo engitech" width='4%' height='auto' margin='0.5rem 1rem' onClick={() => HandleTipoMenu('')} />
            <MenuDropDownUsuario/>
        </NavBarContainer>
    )
}

export default NavBarSuperior