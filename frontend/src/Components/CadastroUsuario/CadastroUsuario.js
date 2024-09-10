import styled from "styled-components";
import FormCadastroUsuario from "./FormCadastroUsuario/FormCadastroUsuario.js";


    const CadastroContainer = styled.section`
    display:flex;
    flex-direction:column;
    height:auto;
    width:95%;  
    margin: 1rem 0;
    
    `

    function CadastroUsuario(){
        return(
            <CadastroContainer>
                    <FormCadastroUsuario/>
            </CadastroContainer>
        )
    }

    export default CadastroUsuario
