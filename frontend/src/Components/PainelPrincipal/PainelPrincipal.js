import styled from "styled-components";
import MenuLateral from "../MenuLateral/MenuLateral.js";
import PainelUtilizacao from "../PainelUtilizacao/PainelUtilizacao.js";
import { TodosUsuariosProvider } from "../../Context/TodosUsuarios.js";
import { CadastroUsuarioProvider } from "../../Context/CadastroUsuario.js";
import { CalculadoraPesoChapaProvider } from "../../Context/CalculadoraPesoChapa.js";
import { CalculadoraAproveitamentoProvider } from "../../Context/CalculadoraAproveitamento.js";
import { ChapasCadastradasProvider } from "../../Context/ChapasCadastradas.js";


const PainelPrincipalContainer = styled.section`
width:100%;
height:94vh;
display:flex;
align-items:center;
justify-content:space-around;
`

function PainelPrincipal(){
    return(
        <TodosUsuariosProvider>
            <CadastroUsuarioProvider>
                <ChapasCadastradasProvider>
                <CalculadoraAproveitamentoProvider>
                <CalculadoraPesoChapaProvider>
                <PainelPrincipalContainer>
                    <MenuLateral/>
                    <PainelUtilizacao/>
                </PainelPrincipalContainer>
                </CalculadoraPesoChapaProvider>
                </CalculadoraAproveitamentoProvider>
                </ChapasCadastradasProvider>
            </CadastroUsuarioProvider>
        </TodosUsuariosProvider>
    )
}

export default PainelPrincipal
