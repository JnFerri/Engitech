
import VisualizacaoChapas from "../Components/VisualizacaoChapas/VisualizacaoChapas";
import { retangulosDadosMock } from "./Mocks/DadosRetangulosVisualizacaoMock";



export default {
    title: 'Components/VisualizacaoChapas',
    component: VisualizacaoChapas,
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
          component: 'Componente utilizado para visualizar as posições dos produtos na chapa.'
          ,
        },
        
      },
    },
    argTypes: {
        retangulos: { control: 'array' , default: '[]' , description : 'Array contendo objetos com as informações de width , heigth , id , x , y de cada retangulo que representa a peça, sendo x e y a posição deste retangulo na imagem' , type : 'array' , table : { category: 'Props'}},
        alturaChapa: { control: 'number' , default: 0 , description : 'Altura da chapa em mm, que será convertido em pixels para representar a chapa na imagem.',type : 'number' , table : { category: 'Props'}},
        ComprimentoChapa: { control: 'number' , default: 0 , description : 'Comprimento da chapa em mm, que será convertido em pixels para representar a chapa na imagem.',type : 'number' , table : { category: 'Props'}},
    },
    
  };
  
  const Template = (args) =>   <VisualizacaoChapas {...args}/>
  
  export const Exemplo = Template.bind({});
  Exemplo.args = {
    retangulos : retangulosDadosMock,
    alturaChapa : 1240,
    comprimentoChapa : 3000
  };



  
  

