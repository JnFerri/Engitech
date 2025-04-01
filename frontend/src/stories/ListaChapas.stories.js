
import { ChapasCadastradasProvider } from "../Context/ChapasCadastradas.js"
import { ChapasCadastradasMockProvider } from "./Mocks/ChapasCadastradasContext.mock.js";
import { DadosChapasMock } from "./Mocks/DadosListaChapaMock.js";
import ListaChapas from "../Components/ChapasCadastradas/ListaChapas/ListaChapas.js";


export default {
    title: 'Components/ListaChapas',
    component: ListaChapas,
    tags: ['autodocs'],
    parameters: {
      docs: {
        description: {
          component: 'Componente que demonstra a lista de todas as chapas cadastradas com opção de adicionar nova chapa, alterar uma existente ou deletar.',
        },
      },
    },
    argTypes: {
      DadosChapaLista : { control: 'array' , default: [] , description : 'Array contendo todos os dados das chapas cadastradas no banco de dados.' , type : 'array', table: { category: 'Estados'}},
      AbrirModalChapa : { control: 'function' , default: false , description : 'Função responsável por abrir os modais de cadastro de nova chapa ou atualização de chapa, passa como parametro "cadastro" ou "atualizacao" definindo o tipo do modal.' , type : 'function', table: { category: 'Funções'}},
      HandleDeletarChapa : { control: 'function' , default: false , description : 'Função responsável por deletar uma chapa da lista e do banco de dados.' , type : 'function', table: { category: 'Funções'}}
    },
  };

  
  const Template = (args) => <ChapasCadastradasProvider> <ChapasCadastradasMockProvider value={args}> <ListaChapas /> </ChapasCadastradasMockProvider> </ChapasCadastradasProvider> ;
  
  export const SemResultado = Template.bind({});
  SemResultado.args = {
    DadosChapaLista : [],
    AbrirModalChapa : (e) => { window.alert(`Aqui abre modal de ${e} . Para visualizar funcionamento completo visualize o stories do componente ChapasCadastradas.`)},
    handleDeletarChapa : () => {window.alert("Aqui deleta esta chapa do banco de dados. Para visualizar funcionamento completo visualize o stories do componente ChapasCadastradas. ")}
  };

  export const ComResultado = Template.bind({});
  ComResultado.args = {
    DadosChapasLista : DadosChapasMock,
    AbrirModalChapa : (e) => { window.alert(`Aqui abre modal de ${e} . Para visualizar funcionamento completo visualize o stories do componente ChapasCadastradas.`)},
    handleDeletarChapa : () => {window.alert("Aqui deleta esta chapa do banco de dados. Para visualizar funcionamento completo visualize o stories do componente ChapasCadastradas. ")}
  };
  
  