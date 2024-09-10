import styled from "styled-components";

const DivLinha = styled.div`
    display:flex;
    flex-direction:row;
    width:${props => props.width || '100%'};
    justify-content:${props=> props.justifyContent || 'center'};
    align-items:${props=> props.alignItems || 'center'};
    margin:${props => props.margin || ''};
`

export default DivLinha