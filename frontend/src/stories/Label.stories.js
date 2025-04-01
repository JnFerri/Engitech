
import Label from "../Components/Label/Label";


export default {
    title: 'Components/Label',
    component: Label,
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
          component: 'styled-component para uma label.'
          ,
        },
      },
    },
    argTypes: {
      tamanho : { control: 'text' , default: 'medio' , description : 'Define o tamanho da fonte do componente, 3 variações, "pequeno" , "medio" e "grande" . ' , type : 'string' , table : { category: 'Props'}},

      width : { control: 'text' , default: '100%' , description : 'Define o comprimento do componente. ' , type : 'string' , table : { category: 'Props'}},

      color : { control: 'text' , default: '100%' , description : 'Define a cor do texto do componente. ' , type : 'string' , table : { category: 'Props'}},

      textAlign : { control: 'text' , default: 'left' , description : 'Define o alinhamento do texto no componente. ' , type : 'string' , table : { category: 'Props'}}
    },
  };
  
  const Template = (args) =>  <Label {...args}> Texto de teste storybook. </Label>;
  
  export const Pequeno = Template.bind({});
  Pequeno.args = {
    tamanho:'pequeno',
    width:'50%'
  };
  export const Medio = Template.bind({});
  Medio.args = {
    tamanho:'medio',
    width:'50%'
  };
  export const Grande = Template.bind({});
  Grande.args = {
    tamanho:'grande',
    width:'50%'
  };
  export const Editado = Template.bind({});
  Editado.args = {
    tamanho:'medio',
    width:'100%',
    color:'red',
    textalign:'right'
  };

