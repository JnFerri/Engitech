import { CalculadoraAproveitamentoProvider } from "../Context/CalculadoraAproveitamento.js";
import { CalculadoraPesoChapaProvider } from "../Context/CalculadoraPesoChapa.js";
import FormCalculadoraPesoChapa from "../Components/CalculadoraPesoChapa/FormCalculadoraPesoChapa/FormCalculadoraPesoChapa.js";

export default {
    title: 'Components/FormCalculadoraPesoChapa',
    component: FormCalculadoraPesoChapa,
    tags: ['autodocs'],
    parameters: {
      docs: {
        description: {
          component: 'O FormCalculadoraPesoChapa utiliza os Contexts CalculadoraPesoChapa.js e CalculadoraAproveitamento.js através dos hooks useCalculadoraPesoChapa() e useCalculadoraAproveitamento() ,para gerenciar o estado e as ações relacionadas ao cálculo do peso da chapa com base nas dimensões e no material selecionado.',
        },
      },
    },
  argTypes: {
    EspessuraFormCalculadoraPesoChapa: { control: 'text', description: 'Armazena a espessura da chapa inserida no formulário.', type: 'String', table: { category: 'Estados' } },
    AlturaFormCalculadoraPesoChapa: { control: 'text',  description: 'Armazena a altura da chapa inserida no formulário.', type: 'String', table: { category: 'Estados' } },
    ComprimentoFormCalculadoraPesoChapa: { control: 'text', description: 'Armazena o comprimento da chapa inserido no formulário.', type: 'String', table: { category: 'Estados' } },
    MaterialFormCalculadoraPesoChapa: { control: 'number',  description: 'Armazena o id do material selecionado para a chapa no formulário.', type: 'Number', table: { category: 'Estados' } },
    HandleEspessuraFormCalculadoraPesoChapa: { description: 'Atualiza o valor da espessura da chapa no estado.', type: 'function', table: { category: 'Funções' } },
    HandleAlturaFormCalculadoraPesoChapa: {  description: 'Atualiza o valor da altura da chapa no estado.', type: 'function', table: { category: 'Funções' } },
    HandleComprimentoFormCalculadoraPesoChapa: {  description: 'Atualiza o valor do comprimento da chapa no estado.', type: 'function', table: { category: 'Funções' } },
    HandleMaterialFormCalculadoraPesoChapa: {  description: 'Atualiza o material selecionado no estado.', type: 'function', table: { category: 'Funções' } },
    HandleCalcularPesoChapa: { description: 'Função assíncrona chamada ao enviar o formulário, responsável por calcular o peso da chapa com base nas dimensões e no material.', type: 'function', table: { category: 'Funções' } },
    MaterialOptions: { control: 'array',  description: 'Lista de opções de materiais para o select de materiais no formulário. Populado com dados do banco de dados usando setMaterialOptions.', type: 'Array', table: { category: 'Estados'}}
  }
  };
  
  
  const Template = (args) => <CalculadoraAproveitamentoProvider> <CalculadoraPesoChapaProvider> <FormCalculadoraPesoChapa {...args} /></CalculadoraPesoChapaProvider>  </CalculadoraAproveitamentoProvider> ;
  
  export const Padrao = Template.bind({});
  Padrao.args = {
  };