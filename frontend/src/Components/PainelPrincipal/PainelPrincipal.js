import styled from "styled-components";
import MenuLateral from "../MenuLateral/MenuLateral.js";
import PainelUtilizacao from "../PainelUtilizacao/PainelUtilizacao.js";
import { TodosUsuariosProvider } from "../../Context/TodosUsuarios.js";
import { CadastroUsuarioProvider } from "../../Context/CadastroUsuario.js";

const PainelPrincipalContainer = styled.section`
width:100%;
height:94%;
display:flex;
align-items:center;
justify-content:space-around;
`

function PainelPrincipal(){
    return(
        <TodosUsuariosProvider>
            <CadastroUsuarioProvider>
                <PainelPrincipalContainer>
                    <MenuLateral/>
                    <PainelUtilizacao/>
                </PainelPrincipalContainer>
            </CadastroUsuarioProvider>
        </TodosUsuariosProvider>
    )
}

export default PainelPrincipal
