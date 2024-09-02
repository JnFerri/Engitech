import styled from 'styled-components'

const sizes = {
    pequeno: '10px 0',
    medio: '11px 0',
    grande: '13px 0'
};

const fontSize = {
    pequeno: '18px',
    medio: '22px',
    grande: '34px'
}

const borderSize = {
    pequeno: '0.1px solid #000',
    medio: '0.5px solid #000',
    grande: '0.8px solid #000'
}

const borderRadiusSize = {
    pequeno: '5px',
    medio: '7.5px',
    grande: '10px'
}

const Button = styled.button`
    background-color: ${props => props.primario ? '#32578F' : props.secundario ? '#f58634' : '#313233'};
    color: ${props => props.primario ? 'white' : props.secundario ? 'white' : 'white' };
    border: ${props => borderSize[props.tamanho] || borderSize.medio};
    border-radius: ${props => borderRadiusSize[props.tamanho] || borderRadiusSize.medio};
    padding: ${props => sizes[props.tamanho] || sizes.medio};
    font-size: ${props => fontSize[props.tamanho] || fontSize.medio};
    cursor: pointer;
    text-align:center;
    width: ${props => props.width || '100%'};
    margin :${props => props.margin || '0.5rem 0'};
    font-family: "Barlow Condensed", system-ui;
  font-weight: 500;
  font-style: normal;

    &&:hover {
    background-color: ${props => props.primario ? '#4580bf' : props.secundario ? '#bf8845' : '#807f7e'};
    }

    &&:active {
    background-color: ${props => props.primario ? '#0b243d' : props.secundario ? '#7a4205' : '#171615'};
    box-shadow: inset 0px 2px 4px rgba(0, 0, 0, 0.5);
    
    }

`

export default Button