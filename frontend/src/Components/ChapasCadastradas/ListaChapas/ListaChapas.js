import styled from "styled-components";
import { useChapasCadastradas } from "../../../Context/ChapasCadastradas.js";
import Button from "../../Button/Button.js";

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
width:95%;
text-align:left;
`

const TheadTabela = styled.thead`
width:100%;
background-color:#314159;
`

const TbodyTabela = styled.tbody`
width:100%;
`


const TrTabela = styled.tr`
width:100%;
`

const ThTabela = styled.th`
width:100%;
`

const TdTabela = styled.td`
width:100%;
`




function ListaChapas() {
    const {DadosChapaLista, AbrirModalCadastroChapa} = useChapasCadastradas()

    return(
        <ListaChapasContainer>
            <BarraAdicionarNovaChapa>
                <Button secundario tamanho='pequeno' width='15%' margin='0.5rem 0.5rem' onClick={AbrirModalCadastroChapa}>Adicionar Nova Chapa</Button>
            </BarraAdicionarNovaChapa>
            <TabelaChapas>
                <TheadTabela>
                    <TrTabela>
                    {DadosChapaLista && DadosChapaLista.length > 0 && Object.keys(DadosChapaLista[0]).map((key) => (
                        <ThTabela key={key}>{key}</ThTabela>
                    ))}
                    </TrTabela>
                </TheadTabela>
                <TbodyTabela>
                {DadosChapaLista && DadosChapaLista.map((item, index) => (
                    <TrTabela key={index}>
                        {Object.values(item).map((value, idx) => (
                            <TdTabela key={idx}>{value}</TdTabela>
                        ))}
                    </TrTabela>
                ))}
                </TbodyTabela>
            </TabelaChapas>
        </ListaChapasContainer>
    )
}

export default ListaChapas