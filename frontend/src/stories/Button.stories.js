import React from 'react';
import Button from '../Components/Button/Button.js';



export default {
  title: 'Components/Button',
  component: Button,
  parameters: {
    docs: {
      description: {
        component: 'Componente estilizável de botão.'
  ,
      },
    },
  },
  argTypes: {
    sizes: {
      options: ['pequeno', 'medio', 'grande'],
      control: { type: 'select' },
      description:'Define o tamanho do componente. Medidas de border, padding e font-size.  ',
      type : 'string'
    },
    primario: { control: 'boolean', default: false , description : 'Configuração cor primaria do botão.' , type : 'boolean' },
    secundario: { control: 'boolean' , default: false , description : 'Configuração cor secundaria do botão.' , type : 'boolean' },
    deletar: { control: 'boolean' , default: false , description : 'Configuração cor deletar do botão.' , type : 'boolean'},
    ativar: { control: 'boolean'  , default: false , description : 'Configuração cor ativar do botão.' , type : 'boolean'},
    width: { control: 'text' , default: false , description : 'Configuração de comprimento do botão.' , type : 'string'},
    margin: { control: 'text' , default: false , description : 'Configuração de margem do componente.' , type : 'string'},
  },
  tags:['autodocs']
};

const Template = (args) => <Button {...args} />;

export const Primario = Template.bind({});
Primario.args = {
  children:'Ativar',
  primario: true
};

export const Secondario = Template.bind({});
Secondario.args = {
  children:'Ativar',
  secundario: true,
};

export const Deletar = Template.bind({});
Deletar.args = {
    children:'Ativar',
  deletar: true
};

export const Ativar = Template.bind({});
Ativar.args = {
    children:'Ativar',
  ativar: true
};
export const Pequeno = Template.bind({});
Pequeno.args = {
  children:'Ativar',
  tamanho: 'pequeno'
};

export const Medio = Template.bind({});
Medio.args = {
  children:'Ativar',
  tamanho: 'medio'
};

export const Grande = Template.bind({});
Grande.args = {
    children:'Ativar',
  tamanho: 'grande'
};


export const ComprimentoConfiguravel = Template.bind({});
ComprimentoConfiguravel.args = {
    children:'Ativar',
  width: '50%'
};

export const MargemConfiguravel = Template.bind({});
MargemConfiguravel.args = {
    children:'Ativar',
  margin: '1rem'
};
