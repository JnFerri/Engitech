import styled from "styled-components";

const DivLinha = styled.div`
    display:flex;
    flex-direction:row;
    width:100%;
    justify-content:center;
    margin:${props => props.margin || ''};
`

export default DivLinha