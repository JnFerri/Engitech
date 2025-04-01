
import Span from "../Components/Span/Span";


export default {
    title: 'Components/Span',
    component: Span,
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
          component: 'styled-component para uma Span.'
          ,
        },
      },
    },
    argTypes: {
      tamanho : { control: 'text' , default: '22px' , description : 'Define o tamanho da fonte do componente, 3 variações, "pequeno" , "medio" e "grande" . ' , type : 'string' , table : { category: 'Props'}},

      width : { control: 'text' , default: '100%' , description : 'Define o comprimento do componente. ' , type : 'string' , table : { category: 'Props'}},

      color : { control: 'text' , default: 'black' , description : 'Define a cor do texto do componente. ' , type : 'string' , table : { category: 'Props'}},

      textAlign : { control: 'text' , default: 'center' , description : 'Define o alinhamento do texto no componente. ' , type : 'string' , table : { category: 'Props'}}
    },
  };
  
  const Template = (args) =>  <Span {...args}> Texto de teste storybook. </Span>;
  
  export const Padrao = Template.bind({});
  Padrao.args = {
    
  };

  export const Editado = Template.bind({});
  Editado.args = {
    color:'red',
    textAlign:'left',
    tamanho:'16px',
    width:'50%'
  };

  
  

