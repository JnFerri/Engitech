import styled from "styled-components";


const Imagem = styled.img`
width:${props => props.width || '100%'};
height:${props => props.height || '100%'};
margin :${props => props.margin || '0'};
`

export default Imagem
