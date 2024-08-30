import styled from "styled-components";
import ListaMenuCalculoChapas from "./ListaMenuCalculoChapas.js/ListaMenuCalculoChapas.js";


const MenuLateralContainer = styled.section`
display:flex;
flex-direction:column;
align-items:center;
justify-content:top;
background-color:#383838;
width: 20%;
height:100%;
`

function MenuLateral(){
    return(
        <MenuLateralContainer>
            <ListaMenuCalculoChapas/>
        </MenuLateralContainer>
    )
}

export default MenuLateral