import styled from "styled-components";
import Overlay from "../../Overlay/Overlay.js";
import DivLinha from "../../DivLinha/DivLinha.js";
import Button from "../../Button/Button.js";
import DivColuna from "../../DivColuna/DivColuna.js";
import Label from "../../Label/Label.js";
import Span from "../../Span/Span.js";
import Titulo2 from "../../Titulo2/Titulo2.js";
import { useEffect } from "react";
import { useCalculadoraAproveitamento } from "../../../Context/CalculadoraAproveitamento.js";
import Titulo3 from "../../Titulo3/Titulo3.js";
import VisualizacaoChapas from "../../VisualizacaoChapas/VisualizacaoChapas.js";


const ModalVisualizacaoResultadoContainer = styled.section`
position: absolut;
width:80%;
height:80vh;
margin:10vh 10%;
border:0.5px black solid;
border-radius:10px;
z-index: 1001;
overflow:auto;
background-color:white;
display:flex;
align-items:center;
justify-content:top;
flex-direction:column;
`

const SecoesVisualizacao = styled.div`
    width:95%;
    height:auto;
    display:flex;
    align-items:center;
    justify-content:top;
    flex-direction:column;
    margin:1rem 0;
    border-bottom:1px black solid;
`

const SecaoVisualizacaoResultadosChapas = styled.div`
    width:95%;
    display:flex;
    align-items:center;
    justify-content:center;
    border-bottom:1px black solid;
    margin:1rem 0;
    padding:1rem 0;

`
    



function ModalVisualizacaoResultadoAproveitamento(){
    const {DadosChapaVisualizacao , RetangulosPosicionamentoHorizontal, RetangulosPosicionamentoVertical, RetangulosPosicionamentoMaximoMisturado, FechaModalVisualizacao} = useCalculadoraAproveitamento()

    useEffect(() => {
        console.log(RetangulosPosicionamentoHorizontal)
    }, [RetangulosPosicionamentoHorizontal])
    
    return(
        <Overlay>
        {
            DadosChapaVisualizacao ? 

        <ModalVisualizacaoResultadoContainer>
        <DivLinha>
            <Button secundario tamanho='medio' width='20% ' margin='0.5rem 0.5rem' onClick={() => FechaModalVisualizacao()}>Fechar</Button>
        </DivLinha>
        <SecoesVisualizacao>
        <Titulo2>Dados da Chapa</Titulo2>
        <DivLinha>
            <DivColuna width='10%'>
                <Label tamanho = 'Medio' >Código Chapa</Label>
                <Span width='100%' textAlign='left'>{DadosChapaVisualizacao.cha_codigo}</Span>
            </DivColuna>
            <DivColuna width = '60%'>
                <Label tamanho = 'Medio' >Descrição Chapa</Label>
                <Span width='100%' textAlign='left'>{DadosChapaVisualizacao.cha_nome}</Span>
            </DivColuna>
       
            <DivColuna width = '30%'>
                <Label tamanho = 'Medio' >Tamanho da Chapa</Label>
                <Span width='100%' textAlign='left'> {DadosChapaVisualizacao.cha_espessura} X {DadosChapaVisualizacao.cha_altura} X {DadosChapaVisualizacao.cha_comprimento} </Span>
            </DivColuna>
        </DivLinha>
        </SecoesVisualizacao>
            <Titulo2>Dados Aproveitamentos em Cada Posição</Titulo2>
            {RetangulosPosicionamentoHorizontal.length ? 
            <SecaoVisualizacaoResultadosChapas>
                <DivColuna width='40%'>
                    <Titulo3>Posição Horizontal</Titulo3>
                    <DivLinha margin  ='0.5rem 0'>
                        <Span>Percentual de Perda Horizontal : {DadosChapaVisualizacao.perda_horizontal} % </Span>
                    </DivLinha>
                        <DivLinha margin  ='0.5rem 0'>
                        <Span>Quantidade de Pecas Horizontal : {DadosChapaVisualizacao.quantidade_pecas_horizontal}</Span>
                        </DivLinha>
                        <DivLinha margin  ='0.5rem 0'>
                        <Span>Valor em Und para Ficha : {(DadosChapaVisualizacao.valor_und).toFixed(6)}</Span>
                        </DivLinha>
                </DivColuna>
                <DivColuna width='70%'>
                    <VisualizacaoChapas  retangulos={RetangulosPosicionamentoHorizontal} alturaChapa={DadosChapaVisualizacao.cha_altura} comprimentoChapa={DadosChapaVisualizacao.cha_comprimento}/>
                </DivColuna>
                    
            </SecaoVisualizacaoResultadosChapas>
            : null
            }
            {RetangulosPosicionamentoVertical.length ? 
            <SecaoVisualizacaoResultadosChapas>
                <DivColuna width='40%'>
                    <Titulo3>Posição Vertical</Titulo3>
                    <DivLinha margin  ='0.5rem 0'>
                        <Span>Percentual de Perda Vertical : {DadosChapaVisualizacao.perda_vertical} % </Span>
                    </DivLinha>
                        <DivLinha margin  ='0.5rem 0'>
                        <Span>Quantidade de Pecas Vertical : {DadosChapaVisualizacao.quantidade_pecas_vertical}</Span>
                        </DivLinha>
                        <DivLinha margin  ='0.5rem 0'>
                        <Span>Valor em Und para Ficha : {(DadosChapaVisualizacao.valor_und).toFixed(6)}</Span>
                        </DivLinha>
                </DivColuna>
                <DivColuna width='70%'>
                    <VisualizacaoChapas  retangulos={RetangulosPosicionamentoVertical} alturaChapa={DadosChapaVisualizacao.cha_altura} comprimentoChapa={DadosChapaVisualizacao.cha_comprimento}/>
                </DivColuna>
                    
            </SecaoVisualizacaoResultadosChapas>
            : null
            }
            {RetangulosPosicionamentoMaximoMisturado.length ? 
            <SecaoVisualizacaoResultadosChapas>
                <DivColuna width='40%'>
                    <Titulo3>Posição Misturado Máximo</Titulo3>
                    <DivLinha margin  ='0.5rem 0'>
                        <Span>Percentual de Perda Horizontal Máximo : {DadosChapaVisualizacao.perda_misturado} % </Span>
                    </DivLinha>
                        <DivLinha margin  ='0.5rem 0'>
                        <Span>Quantidade de Pecas Horizontal Máximo: {DadosChapaVisualizacao.quantidade_maximo_misturado}</Span>
                        </DivLinha>
                        <DivLinha margin  ='0.5rem 0'>
                        <Span>Distribuição: {DadosChapaVisualizacao.distribuicaoMisturado.vertical} peça na vertical e {DadosChapaVisualizacao.distribuicaoMisturado.horizontal} peça na horizontal.</Span>
                        </DivLinha>
                        <DivLinha margin  ='0.5rem 0'>
                        <Span>Valor em Und para Ficha : {(DadosChapaVisualizacao.valor_und).toFixed(6)}</Span>
                        </DivLinha>
                </DivColuna>
                <DivColuna width='70%'>
                    <VisualizacaoChapas  retangulos={RetangulosPosicionamentoMaximoMisturado} alturaChapa={DadosChapaVisualizacao.cha_altura} comprimentoChapa={DadosChapaVisualizacao.cha_comprimento}/>
                </DivColuna>
                    
            </SecaoVisualizacaoResultadosChapas>
            : null
            }
        </ModalVisualizacaoResultadoContainer>
        :
        null
    }
    </Overlay>
    )
}

export default ModalVisualizacaoResultadoAproveitamento
