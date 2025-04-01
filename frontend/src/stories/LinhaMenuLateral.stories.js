import LinhaMenuLateral from "../Components/ListaMenuLateral/LinhaMenuLateral/LinhaMenuLateral";

export default {
    title: 'Components/LinhaMenuLateral',
    component: LinhaMenuLateral,
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
          component: 'Styled-Component para linha de opção do menu lateral.'
          ,
        },
      },
    },
    argTypes: {
      ativado : { control: 'boolean' , default: 'false' , description : 'Informa que o componente esta ativado para alterar a cor do background do componente selecionado no menu lateral." . ' , type : 'boolean' , table : { category: 'Props'}}
    },
  };
  
  const Template = (args) =>  <LinhaMenuLateral {...args}> Opção do Menu Lateral </LinhaMenuLateral>;
  
  export const Desativado = Template.bind({});
  Desativado.args = {
    ativado:false
   
  };
  export const Ativado = Template.bind({});
  Ativado.args = {
    ativado:true
  };
  