import styled from "styled-components";

const Titulo3 = styled.h3`
    font-family: "Barlow Condensed", system-ui;
    font-weight: 500;
    font-style: normal;
    color: ${props => props.color || 'black'};
    width:${props => props.width || '100%'};
    font-size: ${props => props.size || '24px'}
`

export default Titulo3