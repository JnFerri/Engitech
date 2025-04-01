import React from 'react';
import SelectForm from '../Components/SelectForm/SelectForm.js';



export default {
  title: 'Components/SelectForm',
  component: SelectForm,
  parameters: {
    docs: {
      description: {
        component: 'Componente estilizável de input de Select.'
  ,
      },
    },
  },
  argTypes: {
    tamanho: {
      options: ['pequeno', 'medio', 'grande'],
      control: { type: 'select' },
      description:'Define o tamanho do componente. Medidas de border, padding e font-size.  ',
      type : 'string'
    },
    width: { control: 'text' , default: false , description : 'Configuração de comprimento do componente de select.' , type : 'string'},
    
  },
  tags:['autodocs']
};

const Template = (args) => 
    <SelectForm {...args}>
    <option value="1">Teste 1</option>
    <option value="2">Teste 2</option>
    <option value="3">Teste 3</option>
     </SelectForm>;


export const Pequeno = Template.bind({});
Pequeno.args = {
  tamanho: 'pequeno'
};

export const Medio = Template.bind({});
Medio.args = {
  tamanho: 'medio'
};

export const Grande = Template.bind({});
Grande.args = {
  tamanho: 'grande'
};


export const ComprimentoConfiguravel = Template.bind({});
ComprimentoConfiguravel.args = {
  width: '50%'
};

