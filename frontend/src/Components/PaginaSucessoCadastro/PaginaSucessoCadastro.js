import styled from "styled-components";
import Imagem from '../Imagem/Imagem.js'
import gifSucesso from '../../Images/Cadastrado-Sucesso.gif'
import Button from "../Button/Button.js"

const PaginaSucessoContainer = styled.section`
width:100%;
height:100%;
display:flex;
align-items:center;
justify-content:center;
flex-direction:column;
margin: 1rem 0 ;
`

function PaginaSucessoCadastro({handleRetornar}){
    
    return(
        <PaginaSucessoContainer>
           <Imagem src={gifSucesso} alt="Gif demonstrando que cadastro foi realizado com sucesso" width='40%'/>
           <Button secundario tamanho= 'medio' width='40%' onClick={() => handleRetornar()}>Cadastrar Mais</Button>
        </PaginaSucessoContainer>
    )
}

export default PaginaSucessoCadastro