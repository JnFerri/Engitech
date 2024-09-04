import styled from "styled-components";
import Imagem from '../Imagem/Imagem.js'
import imagemSucesso from '../../Images/SucessoPagina.png'
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

function PaginaSucesso({handleRetornar, cadastro , atualizacao , mensagemSucesso}){
    
    return(
        <PaginaSucessoContainer>
           <Imagem src={imagemSucesso} alt="Gif demonstrando sucesso" width='40%'/>
           <p>{mensagemSucesso}</p>
           {
            cadastro ?
            <Button secundario tamanho= 'medio' width='40%' onClick={() => handleRetornar()}>Cadastrar Mais</Button>
            :
            null
           }
        </PaginaSucessoContainer>
    )
}

export default PaginaSucesso