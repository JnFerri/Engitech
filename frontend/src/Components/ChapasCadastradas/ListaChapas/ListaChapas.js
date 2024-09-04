import styled from "styled-components";
import { useChapasCadastradas } from "../../../Context/ChapasCadastradas.js";
import Button from "../../Button/Button.js";
import { useEffect } from "react";
import tranformarDataString from "../../../Helpers/tranformarDataString.js";

const ListaChapasContainer = styled.section`
display:flex;
flex-direction:column;
min-height:60vh;
width:100%;
margin: 1rem 0;
background-color:white;
box-shadow: 4px 4px 5px rgba(0,0,0,0.25);
border-radius:5px;
` 

const BarraAdicionarNovaChapa = styled.div`
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



function ListaChapas() {
    const {DadosChapasLista, AbrirModalChapa , handleDeletarChapa} = useChapasCadastradas()
    
    const colunas = {
        cha_codigo: { nome: "Código", largura: "5%" },
        cha_nome: { nome: "Nome", largura: "45%" },
        cha_altura: { nome: "Altura", largura: "10%" },
        cha_comprimento: { nome: "Comprimento ", largura: "10%" },
        cha_espessura: { nome: "Espessura", largura: "5%" },
        cha_data_hora_criacao: { nome: "Data Criação", largura: "10%" },
        cha_data_hora_atualizacao: { nome: "Data Atualização", largura: "10%" },
        mat_nome: { nome: "Material", largura: "15%" },
        mat_fator_densidade: { nome: "Densidade", largura: "10%" },
      };

    useEffect(() => {
        console.log(DadosChapasLista)
      },[DadosChapasLista])

    return(
        <ListaChapasContainer>
            <BarraAdicionarNovaChapa>
                <Button secundario tamanho='pequeno' width='15%' margin='0.5rem 0.5rem' onClick={() => AbrirModalChapa('cadastro')}>Adicionar Nova Chapa</Button>
            </BarraAdicionarNovaChapa>
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
          {DadosChapasLista &&
            DadosChapasLista.map((item, index) => (
              <TrTabela key={index}>
                {Object.keys(colunas).map((key, idx) => (
                  
                  <TdTabela key={idx} width={colunas[key].largura} >
                    {key === 'cha_data_hora_criacao' || key === 'cha_data_hora_atualizacao' ? tranformarDataString(item[key]) : item[key]}
                  </TdTabela>
                ))}
                <TdTabela>
                <Button primario width='110%' tamanho='pequeno'  onClick={ () => AbrirModalChapa('atualizacao' , item)}>Alterar</Button>

                </TdTabela>
                <TdTabela>
                <Button deletar width='110%' tamanho='pequeno' onClick={() => handleDeletarChapa(item.cha_id)}>Deletar</Button>

                </TdTabela>
              </TrTabela>
            ))}
        </TbodyTabela>
      </TabelaChapas>
        </ListaChapasContainer>
    )
}

export default ListaChapas