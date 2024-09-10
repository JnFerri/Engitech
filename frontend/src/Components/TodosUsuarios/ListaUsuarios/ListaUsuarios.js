import styled from "styled-components";
import Button from "../../Button/Button.js";
import tranformarDataString from "../../../Helpers/tranformarDataString.js";
import Label from "../../Label/Label.js";
import InputForm from "../../InputForm/InputForm.js";
import { useTodosUsuarios } from "../../../Context/TodosUsuarios.js";

const ListaChapasContainer = styled.section`
display:flex;
flex-direction:column;
min-height:80vh;
width:100%;
margin: 1rem 0;
background-color:white;
box-shadow: 4px 4px 5px rgba(0,0,0,0.25);
border-radius:5px;
` 

const BarraPesquisa = styled.div`
width:100%;
background-color:#314159;
align-items:center;
justify-content:left;
display:flex;
border-radius:5px 5px 0 0;

`

const TabelaChapas = styled.table`
  width: 100%;
  text-align: left;
  border-collapse: collapse;
  overflow: auto;
`;

const TheadTabela = styled.thead`
  width: 100%;
  background-color: #f58634;
`;

const TbodyTabela = styled.tbody`
  width: 100%;
`;

const TrTabela = styled.tr`
  width: 100%;
  border-bottom: 1px solid #ddd;
`;

const ThTabela = styled.th`
  padding: 8px;
  border: 1px solid #ddd;
  color: white;
  width: ${({ width }) => width || 'auto'};
`;

const TdTabela = styled.td`
  padding: 8px;
  border: 1px solid #ddd;
  width: ${({ width }) => width || 'auto'};
`;



function ListaUsuarios() {
    const {DadosTodosUsuarios, PesquisaEmail , AbrirModalAlteracaoSenha , HandleInativarUsuario} = useTodosUsuarios()
    
    const colunas = {
        usu_id: { nome: "Id", largura: "5%" },
        usu_nome: { nome: "Nome", largura: "20%" },
        usu_email: { nome: "Email", largura: "30%" },
        usu_situacao: { nome: "Siituacao ", largura: "10%" },
        usu_data_hora_cadastro: { nome: "Data Cadastro", largura: "10%" },
        tpu_nome: { nome: "Tipo Usuario", largura: "10%" }
      };



    return(
        <ListaChapasContainer>
          <BarraPesquisa>
            <Label width='10%' color='white' textAlignt='center'>Email Usuario :</Label>
            <InputForm tamanho = 'pequeno' width='30%' type='text' onChange={(e) => PesquisaEmail(e)}></InputForm>
          </BarraPesquisa>
            <TabelaChapas>
        <TheadTabela>
          <TrTabela>
            {Object.keys(colunas).map((key) => (
              <ThTabela key={key} width={colunas[key].largura}>
                {colunas[key].nome}
              </ThTabela>
            ))}
          </TrTabela>
        </TheadTabela>
        <TbodyTabela>
          {DadosTodosUsuarios &&
            DadosTodosUsuarios.map((item, index) => (
              <TrTabela key={index}>
                {Object.keys(colunas).map((key, idx) => (
                  
                  <TdTabela key={idx} width={colunas[key].largura} >
                    {key === 'usu_data_hora_cadastro' ? tranformarDataString(item[key]) : item[key]}
                  </TdTabela>
                ))}
                <TdTabela>
                <Button primario width='90%' tamanho='pequeno' onClick={() =>AbrirModalAlteracaoSenha(item)}>Alterar Senha</Button>

                </TdTabela>
                <TdTabela>
                <Button deletar width='90%' tamanho='pequeno' onClick={ () => HandleInativarUsuario(item)}>Inativar</Button>

                </TdTabela>
              </TrTabela>
            ))}
        </TbodyTabela>
      </TabelaChapas>
        </ListaChapasContainer>
    )
}

export default ListaUsuarios