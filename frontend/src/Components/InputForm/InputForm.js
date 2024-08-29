import styled from "styled-components"

const sizes = {
    pequeno: '10px 5px',
    medio: '11px 5px',
    grande: '13px 5px'
}

const fontSize = {
    pequeno: '15px',
    medio: '22px',
    grande: '34px'
}

const borderSize = {
    pequeno: '0.1px solid rgba(153, 151, 151,0.8)',
    medio: '0.5px solid rgba(153, 151, 151,0.8)',
    grande: '0.8px solid rgba(153, 151, 151,0.8)'
}

const borderRadiusSize = {
    pequeno: '5px',
    medio: '7.5px',
    grande: '10px'
}

const InputForm = styled.input`
    border: ${props => borderSize[props.tamanho] || borderSize.medio};
    border-radius: ${props => borderRadiusSize[props.tamanho] || borderRadiusSize.medio};
    padding: ${props => sizes[props.tamanho] || sizes.medio};
    font-size: ${props => fontSize[props.tamanho] || fontSize.medio};
    background-color : #f0f0f0;
    width: ${props => props.width || '100%'};
    margin : 0.5rem 0;
    font-family: "Barlow Condensed", system-ui;
    font-weight: 300;
    font-style: normal;
` 

export default InputForm