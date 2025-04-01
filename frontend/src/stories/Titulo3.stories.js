

import Titulo3 from "../Components/Titulo3/Titulo3";


export default {
    title: 'Components/Titulo3',
    component: Titulo3,
    backgrounds: {
        default: 'light', // Define o background padrão
        values: [
          { name: 'light', value: '#ffffff' }, // Background branco
          { name: 'dark', value: '#333333' },  // Background escuro
          { name: 'custom-blue', value: '#d3e0ff' }, // Exemplo de cor personalizada
        ],
      },
    tags: ['autodocs'],
    parameters: {
      docs: {
        description: {
          component: 'styled-component para titulo h3.'
          ,
        },
      },
    },
    argTypes: {
      size: { control: 'text' , default: '24px' , description : 'Define o tamanho da fonte do componente. ' , type : 'string' , table : { category: 'Props'}},

      width : { control: 'text' , default: '100%' , description : 'Define o comprimento do componente. ' , type : 'string' , table : { category: 'Props'}},

      color : { control: 'text' , default: 'black' , description : 'Define a cor do texto do componente. ' , type : 'string' , table : { category: 'Props'}},

      
    },
  };
  
  const Template = (args) =>  <Titulo3 {...args}> Titulo h2 para teste </Titulo3>;
  
  export const Padrao = Template.bind({});
  Padrao.args = {
    
  };

  export const Editado = Template.bind({});
  Editado.args = {
    color:'red',
    size:'14px',
    width:'50%'
  };

  
  

