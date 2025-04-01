
import InputForm from "../Components/InputForm/InputForm";


export default {
    title: 'Components/InputForm',
    component: InputForm,
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
          component: 'styled-component para um input.'
          ,
        },
      },
    },
    argTypes: {
      tamanho : { control: 'text' , default: 'medio' , description : 'Define o tamanho do componente, 3 variações, "pequeno" , "medio" e "grande" . ' , type : 'string' , table : { category: 'Props'}},

      width : { control: 'text' , default: '100%' , description : 'Define o comprimento do componente. ' , type : 'string' , table : { category: 'Props'}}
    },
  };
  
  const Template = (args) =>  <InputForm {...args} /> ;
  
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