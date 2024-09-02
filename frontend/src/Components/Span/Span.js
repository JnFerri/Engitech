import styled from "styled-components";

const Span = styled.span`
    font-family: "Barlow Condensed", system-ui;
    font-weight: 300;
    font-style: normal;
    color: ${props => props.color || 'black'};
    width:${props => props.width || '100%'};

`

export default Span