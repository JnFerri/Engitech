import styled from "styled-components";

const DivColuna = styled.div`
    display:flex;
    flex-direction:column;
    width: ${props => props.width || '100%'};
`

export default DivColuna