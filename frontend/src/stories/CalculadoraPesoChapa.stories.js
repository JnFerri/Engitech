import { CalculadoraAproveitamentoProvider } from "../Context/CalculadoraAproveitamento.js";
import { CalculadoraPesoChapaProvider } from "../Context/CalculadoraPesoChapa.js";
import CalculadoraPesoChapa from "../Components/CalculadoraPesoChapa/CalculadoraPesoChapa.js";
import { CalculadoraPesoChapaMockProvider } from "./Mocks/CalculadoraPesoChapaContext.mock.js";

export default {
    title: 'Components/CalculadoraPesoChapa',
    component: CalculadoraPesoChapa,
    tags: ['autodocs'],
    parameters: {
      docs: {
        description: {
          component: 'Componente utilizado para englobar todos componentes relacionados a pagina de calculadora de Peso das Chapas. Componentes Utilizados : FormCalculadoraPesoChapa.js e ResultadoPesoChapa.js',
        },
      },
    },
  };
  
  const Template = (args) =><CalculadoraPesoChapaProvider> <CalculadoraAproveitamentoProvider><CalculadoraPesoChapaMockProvider> <CalculadoraPesoChapa {...args} /></CalculadoraPesoChapaMockProvider></CalculadoraAproveitamentoProvider></CalculadoraPesoChapaProvider> ;
  
  export const Padrao = Template.bind({});
  Padrao.args = {};