import MenuDropDownUsuario from "../Components/MenuDropDownUsuario/MenuDropDownUsuario";



export default {
    title: "Components/MenuDropDownUsuario",
    component: MenuDropDownUsuario,
    parameters: {
      docs: {
        description: {
          component: `
           ## Menu que ao clicar ira ativar lista de opções do menu dropdown. 
            

           ## Estados do componente ou constantes com valores :
           - Usuario : Constante que ao carregar o componente guarda um objeto contendo informações do usuario para pegar seu nome.
           - estaAberto : Estado que armazena um booleano informando se o menu dropdown esta aberto ou fechado.
           - setEstaAberto : Função que alterá estado de estaAberto.
          `,
        },
      },
    },
    argTypes: {
    },
  };
  
  const Template = (args) => (
    
      <MenuDropDownUsuario value={args} />
  );
  
  export const Padrao= Template.bind({});
  Padrao.args = {
    
  };
  
  