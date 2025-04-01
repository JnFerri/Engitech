
import { ChapasCadastradasProvider } from "../Context/ChapasCadastradas.js";
import ChapasCadastradas from "../Components/ChapasCadastradas/ChapasCadastradas.js";
import { ChapasCadastradasMockProvider } from "./Mocks/ChapasCadastradasContext.mock.js";


export default {
    title: 'Components/ChapasCadastradas',
    component: ChapasCadastradas,
    tags: ['autodocs'],
    parameters: {
      docs: {
        description: {
          component: `
            ## Componente utilizado para englobar todos componentes relacionados a pagina de chapas cadastradas.
             - Componentes Utilizados :
             FormPesquisaChapas.js, ListaChapas.js e ModalChapa
            
             Caso o estado ModalCadastroChapaEstaVisivel é true, renderiza componente ModalChapa com estado 'cadastro'.
             Caso o estado ModalAtualizacaoChapaEstaVisivel é true, renderiza componente ModalChapa com estado 'atualizacao'.
          `,
        },
      },
    },
    argTypes: {
      ModalCadastroChapaEstaVisivel : { control: 'boolean' , default: false , description : 'Booleano responsável por definir se o modal esta visivel ou não e caso esta visivel define o tipo do modal como cadastro.' , type : 'boolean'},
      ModalAtualizacaoChapaEstaVisivel : { control: 'boolean' , default: false , description : 'Booleano responsável por definir se o modal esta visivel ou não e caso esta visivel define o tipo do modal como atualizacao.' , type : 'boolean'}
    },
  };
  
  const Template = (args) => <ChapasCadastradasProvider> <ChapasCadastradasMockProvider> <ChapasCadastradas {...args} /> </ChapasCadastradasMockProvider> </ChapasCadastradasProvider> ;
  
  export const FuncionamentoCompleto = Template.bind({});
  FuncionamentoCompleto.args = {};