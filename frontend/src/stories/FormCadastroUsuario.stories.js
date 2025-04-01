import React from 'react';
import FormCadastroUsuario from '../Components/CadastroUsuario/FormCadastroUsuario/FormCadastroUsuario.js';
import { CadastroUsuarioProvider } from '../Context/CadastroUsuario.js';

export default {
  title: 'Components/FormCadastroUsuario',
  component: FormCadastroUsuario,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'O FormCadastroUsuario utiliza o Context CadastroUsuario.js através do hook useCadastroUsuario() para gerenciar o estado e as ações do formulário de cadastro.',
      },
    },
  },
  argTypes: {
    TiposUsuarios: { control: 'object', default: [] , description : 'Lista de tipos de usuários disponíveis para o select do formulario. Definido no componente ao renderizar, através do setTiposUsuarios() em um hook useEffect. Pega do banco de dados os tipos de usuarios.' , type : 'Array', table : {category : 'Estados'} },
    NomeForm: { control: 'text' , default: '' , description : 'Estado para o campo de nome do formulário.' , type : 'String' , table : {category : 'Estados'}  },
    EmailForm: { control: 'text' , default: '' , description : 'Estado para o campo email do formulário.' , type : 'String' , table : {category : 'Estados'}},
    SenhaForm : { control: 'text' , default: '' , description : 'Estado para o campo senha do formulário.' , type : 'String' , table : {category : 'Estados'}},
    TipoUsuarioForm: { control: 'text' , default: '' , description : 'Estado para o campo tipo de usuario do formulário.' , type : 'String' , table : {category : 'Estados'} },
    HandleNomeForm: { control: 'function' , description : 'Atualiza o valor do nome no estado.' , type : 'function' , table : {category : 'Funções'}},
    HandleEmailForm: {  control: 'function' , description : 'Atualiza o valor do email no estado.', type : 'function' , table : {category : 'Funções'}},
    HandleSenhaForm: {  control: 'function' , description : 'Atualiza o valor da senha no estado.', type : 'function' , table : {category : 'Funções'}},
    HandleTipoUsuarioForm: { control: 'function' , description : 'Atualiza o tipo de usuario selecionado.', type : 'function' , table : {category : 'Funções'}},
    HandleCadastrarUsuario: { control: 'function' , description : 'Envia os dados de cadastro para o backend e reseta o formulario.' , type : 'function' , table : {category : 'Funções'}}

  },
};

const Template = (args) => <CadastroUsuarioProvider> <FormCadastroUsuario {...args} /> </CadastroUsuarioProvider> ;

export const Padrao = Template.bind({});
Padrao.args = {
};
