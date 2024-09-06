import styled from "styled-components";

const Titulo2 = styled.h2`
    font-family: "Barlow Condensed", system-ui;
    font-weight: 500;
    font-style: normal;
    color: ${props => props.color || 'black'};
    width:${props => props.width || '100%'};
    font-size: ${props => props.size || '28px'}
`

export default Titulo2