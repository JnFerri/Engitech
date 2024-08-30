import styled from "styled-components";
import MenuLateral from "../MenuLateral/MenuLateral.js";
import PainelUtilizacao from "../PainelUtilizacao/PainelUtilizacao.js";

const PainelPrincipalContainer = styled.section`
width:100%;
height:94%;
display:flex;
align-items:center;
justify-content:space-around;
`

function PainelPrincipal(){
    return(
        <PainelPrincipalContainer>
            <MenuLateral/>
            <PainelUtilizacao/>
        </PainelPrincipalContainer>
    )
}

export default PainelPrincipal
