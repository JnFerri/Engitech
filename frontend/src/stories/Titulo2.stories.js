
import Titulo2 from "../Components/Titulo2/Titulo2";


export default {
    title: 'Components/Titulo2',
    component: Titulo2,
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
          component: 'styled-component para titulo h2.'
          ,
        },
      },
    },
    argTypes: {
      size: { control: 'text' , default: '28px' , description : 'Define o tamanho da fonte do componente. ' , type : 'string' , table : { category: 'Props'}},

      width : { control: 'text' , default: '100%' , description : 'Define o comprimento do componente. ' , type : 'string' , table : { category: 'Props'}},

      color : { control: 'text' , default: 'black' , description : 'Define a cor do texto do componente. ' , type : 'string' , table : { category: 'Props'}},

      
    },
  };
  
  const Template = (args) =>  <Titulo2 {...args}> Titulo h2 para teste </Titulo2>;
  
  export const Padrao = Template.bind({});
  Padrao.args = {
    
  };

  export const Editado = Template.bind({});
  Editado.args = {
    color:'red',
    size:'16px',
    width:'50%'
  };

  
  

