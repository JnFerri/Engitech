import styled from "styled-components"

const fontSize = {
    pequeno: '18px',
    medio: '24px',
    grande: '34px'
}


const Label = styled.label`
    font-size: ${props => fontSize[props.tamanho] || fontSize.medio};
    color : ${props => props.color || 'black'};
    font-family: "Barlow Condensed", system-ui;
    font-weight: 400;
    font-style: normal;
    text-align : ${props => props.textAlignt || 'left'};
    width : ${props => props.width || '100%'};
    margin : 0.5rem 0 0 0;
}

`

export default Label	