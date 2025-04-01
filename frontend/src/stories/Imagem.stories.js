
import Imagem from "../Components/Imagem/Imagem";
import imagemTeste from "../Images/week.png"

export default {
    title: 'Components/Imagem',
    component: Imagem,
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
          component: 'Styled-component de Imagem.'
          ,
        },
      },
    },
    argTypes: {
      width : { control: 'text' , default: '100%' , description : 'Define o comprimento do componente.' , type : 'string' , table : { category: 'Props'}},

      height : { control: 'text' , default: '100%' , description : 'Define a altura do componente.' , type : 'string' , table : { category: 'Props'}},

      margin : { control: 'text' , default: '0' , description : 'Define a tamanho da margem do componente.' , type : 'string' , table : { category: 'Props'}},

      src : { control: 'text' , default: '' , description : 'Caminho para o arquivo de imagem.' , type : 'string' , table : { category: 'Props'}},

    alt : { control: 'text' , default: '' , description : 'Texto alternativo para a imagem.' , type : 'string' , table : { category: 'Props'}}
    },
  };
  
  const Template = (args) =>  <Imagem {...args}/>  ;
  
  export const SemImagem = Template.bind({});
  SemImagem.args = {
    alt:'imagem de teste, texto alternativo para a imagem.'
  };

  export const ComImagem = Template.bind({});
  ComImagem.args = {
    src: imagemTeste,
    alt:'imagem de teste, texto alternativo para a imagem.',
    width:'20%'
  };