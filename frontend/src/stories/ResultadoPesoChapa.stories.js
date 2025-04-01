import ResultadoPesoChapa from "../Components/CalculadoraPesoChapa/ResultadoPesoChapa/ResultadoPesoChapa.js";
import { CalculadoraPesoChapaMockProvider } from "./Mocks/CalculadoraPesoChapaContext.mock.js";
import { CalculadoraPesoChapaProvider } from "../Context/CalculadoraPesoChapa.js";

// Storybook configuration
export default {
  title: "Components/ResultadoPesoChapa",
  component: ResultadoPesoChapa,
  parameters: {
    docs: {
      description: {
        component: `
          O ResultadoPesoChapa utiliza do Context CalculadoraPesoChapa.js o estado DadosResultadoPesoChapa. Para Mock dos resultados no stories utiliza-se o context CalculadoraPesoChapaContext.mock.js.

          ## Estado no Context CalculadoraPesoChapa

          Estado:

           DadosChapaResultado: Armazena os dados do resultado do cálculo do peso da chapa (incluindo espessura, altura, comprimento, material e o peso calculado).
        `,
      },
    },
  },
  argTypes: {
    DadosChapaResultado: { control: 'object', default: {} , description : 'Armazena os dados do resultado do cálculo do peso da chapa (incluindo espessura, altura, comprimento, material e o peso calculado).' , type : 'object' }
  },
};

const Template = (args) => (
<CalculadoraPesoChapaProvider>
  <CalculadoraPesoChapaMockProvider value={args}>
    <ResultadoPesoChapa />
  </CalculadoraPesoChapaMockProvider>
  </CalculadoraPesoChapaProvider>
);

export const SemResultado = Template.bind({});
SemResultado.args = {
    DadosChapaResultado : {
        
      }
};

export const ComResultado = Template.bind({});
ComResultado.args = {
 DadosChapaResultado : {
  espessura: 1.2,
  altura: 1200,
  comprimento: 1875,
  material: "Inox304",
  resultado: "21.6000",
}};
