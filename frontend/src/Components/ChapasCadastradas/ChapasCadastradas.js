import styled from "styled-components";
import FormPesquisaChapas from "./FormPesquisaChapas/FormPesquisaChapas.js";
import ListaChapas from "./ListaChapas/ListaChapas.js";
import { useChapasCadastradas } from "../../Context/ChapasCadastradas.js";
import ModalCadastroChapa from "./ModalCadastroChapa/ModalCadastroChapa.js";


const ChapasCadastradasContainer = styled.section`

display:flex;
flex-direction:column;
height:auto;
width:95%;
margin: 1rem 0;
`


function ChapasCadastradas(){
    const {ModalCadastroChapaEstaVisivel} = useChapasCadastradas()
    return(
        
        <ChapasCadastradasContainer>
            {
                ModalCadastroChapaEstaVisivel ?
                <ModalCadastroChapa/>
                :
                <div>
                    <FormPesquisaChapas/>
                    <ListaChapas/>
                </div>
            }
        </ChapasCadastradasContainer>
        
    )
}

export default ChapasCadastradas