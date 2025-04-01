
import { ChapasCadastradasProvider } from "../Context/ChapasCadastradas.js"
import FormPesquisaChapas from "../Components/ChapasCadastradas/FormPesquisaChapas/FormPesquisaChapas.js";
import { todosMateriais } from "./Mocks/todosMateriaisMock.js";
import { ChapasCadastradasMockProvider } from "./Mocks/ChapasCadastradasContext.mock.js";


export default {
    title: 'Components/FormPesquisaChapas',
    component: FormPesquisaChapas,
    tags: ['autodocs'],
    parameters: {
      docs: {
        description: {
          component: 'Componente para fazer pesquisa na lista de chapas cadastradas, sendo feito a pesquisa por código do produto ou por material.',
        },
      },
    },
    argTypes: {
        HandleTipoPesquisaSelecionado : { control: 'function' , description : 'Função responsavel por pegar os dados do valor do input de material selecionado.' , type : 'function', table: { category: 'Funções'}},
        TipoPesquisaSelecionado : { control: 'string' , default: '' , description : 'Estado que guarda o valor do tipo de pesquisa selecionado, "codigo" ou "material"' , type : 'string', table: { category: 'Estados'}},
        setOpcoesMateriais : { control: 'function' , default: false , description : 'Função de useState responsável por definir novo valor para o estado OpcoesMateriais' , type : 'function', table: { category: 'Funções'}},
        OpcoesMateriais :{ control: 'array' , default: [] , description : 'Estado React que guarda array com dados dos tipos de materiais no banco de dados para colocar como opção no select.' , type : 'array', table: { category: 'Estados'}},
        HandlePegaDadosPesquisados : { control: 'function' , default: false , description : 'Função utilizada no submit do formulario para filtrar e definir nova lista de chapas visualizadas conforme pesquisa.' , type : 'function', table: { category: 'Funções'}},
        InputPesquisaValor : {control: 'string' , default: '' , description : 'Estado que guarda o valor do input de pesquisa.' , type : 'string', table: { category: 'Estados'}},
        HandleInputPesquisaValor :  { control: 'function' , default: false , description : 'Função utilizada para salvar valor do input no estado InputPesquisaValor ' , type : 'function', table: { category: 'Funções'}}
    },
  };

  
  const Template = (args) => <ChapasCadastradasProvider> <ChapasCadastradasMockProvider {...args}> <FormPesquisaChapas  /> </ChapasCadastradasMockProvider>  </ChapasCadastradasProvider> ;
  
  export const Codigo = Template.bind({});
    Codigo.args = {
      OpcoesMateriais : todosMateriais,
      TipoPesquisaSelecionado : 'codigo'
  };

  export const Material = Template.bind({});
    Material.args = {
      OpcoesMateriais : todosMateriais,
      TipoPesquisaSelecionado : 'material'
  };

  
  