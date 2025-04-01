import { createContext, useContext, useState } from "react";
import {  pegarEspessurasChapasPorMaterial } from "../Services/Chapas.js";
import { pegarChapasParaCalculo } from "../Services/Chapas.js";
import calculaMaximoDePecasChapa from "../Helpers/calculaMaximoDePecasChapa.js";
import calculaInformacoesResultado from "../Helpers/calculaInformacoesResultados.js";
import criaRetangulosPosicionamentos from "../Helpers/criaRetangulosPosicionamentos.js";



const CalculadoraAproveitamentoContext = createContext()

/**
 * Contexto CalculadoraAproveitamento.js
 * 
 * O contexto **CalculadoraAproveitamento** gerencia o estado e as funções para o cálculo de aproveitamento de chapas
 * com base em dimensões e material. É usado em formulários e componentes de visualização para manipular dados de chapas
 * e calcular quantidades e posicionamentos de peças na chapa.
 * 
 * Estados e Funções Disponíveis:
 * 
 * ### Estados:
 * - `MedidaA` e `MedidaB`: Dimensões das peças a serem posicionadas na chapa.
 * - `Peso`: Peso especificado para a peça.
 * - `MaterialSelecionado`: Material selecionado para a chapa.
 * - `EspessuraSelecionada`: Espessura da chapa selecionada.
 * - `EspessurasOptions`: Lista de espessuras disponíveis para o material selecionado.
 * - `MaterialOptions`: Lista de materiais disponíveis.
 * - `DadosResultado`: Resultado final com as informações de cálculo do aproveitamento.
 * - `QuantidadesPecasChapa`: Quantidade de peças que cabem na chapa.
 * - `RetangulosPosicionamentoHorizontal`, `RetangulosPosicionamentoVertical`, `RetangulosPosicionamentoMaximoMisturado`: 
 *   Arrays que contêm as coordenadas para visualização do posicionamento das peças.
 * - `AlturaChapaVisualizacao` e `ComprimentoChapaVisualizacao`: Dimensões da chapa para a visualização.
 * - `DadosChapaVisualizacao`: Dados detalhados da chapa sendo visualizada.
 * - `ModalVisualizacaoEstaVisivel`: Controle da visibilidade do modal de visualização dos posicionamentos.
 * - `MedidaAPecaEmResultado` e `MedidaBPecaEmResultado`: Armazenam as medidas da peça usadas no último cálculo.
 * 
 * ### Funções:
 * - `HandleMedidaA` e `HandleMedidaB`: Atualizam as medidas `A` e `B` das peças.
 * - `HandlePeso`: Atualiza o peso da peça.
 * - `HandleMaterialSelecionado`: Define o material selecionado e atualiza as opções de espessura disponíveis.
 * - `HandleEspessuraSelecionada`: Define a espessura da chapa.
 * - `CalcularAproveitamento`: Calcula o aproveitamento da chapa com base nos parâmetros atuais, chamando as funções auxiliares para cálculo e visualização.
 * - `AbreVisualizacaoCriaRetangulosPosicionamentos`: Cria retângulos para a visualização dos posicionamentos de peças e abre o modal de visualização.
 * - `FechaModalVisualizacao`: Reseta dados de visualização e fecha o modal.
 * 
 */
export const CalculadoraAproveitamentoProvider = ({children}) => {
    const [MedidaA, setMedidaA] = useState('')
    const [MedidaB, setMedidaB] = useState('')
    const [Peso, setPeso] = useState('')
    const [MaterialSelecionado, setMaterialSelecionado] = useState('')
    const [EspessurasOptions, setEspessurasOptions] = useState([])
    const [MaterialOptions, setMaterialOptions] =useState([])
    const [EspessuraSelecionada, setEspessuraSelecionada] = useState(0)
    const [DadosResultado, setDadosResultado] = useState([])
    const [QuantidadesPecasChapa, setQuantidadesPecasChapa] = useState([]) 
    const [RetangulosPosicionamentoHorizontal, setRetangulosPosicionamentoHorizontal] = useState([])
    const [RetangulosPosicionamentoVertical, setRetangulosPosicionamentoVertical] = useState([])
    const [RetangulosPosicionamentoMaximoMisturado, setRetangulosPosicionamentoMaximoMisturado] = useState([])
    const [AlturaChapaVisualizacao, setAlturaChapaVisualizacao] = useState(0)
    const [ComprimentoChapaVisualizacao, setComprimentoChapaVisualizacao] = useState(0)
    const [DadosChapaVisualizacao, setDadosChapaVisualizacao] = useState({})
    const [ModalVisualizacaoEstaVisivel , setModalVisualizacaoEstaVisivel] = useState(false)
    const [MedidaAPecaEmResultado, setMedidaAPecaEmResultado] = useState(0)
    const [MedidaBPecaEmResultado, setMedidaBPecaEmResultado] = useState(0)

    /**
     * Define valor do estado MedidaA conforme valor do input que ativou a função.
     * 
     * @param {*} e Evento ativador da função. 
     */
    function HandleMedidaA(e){
        let medida = e.target.value
        if(medida > 0 || medida === ''){
            setMedidaA(parseFloat(medida.replace(',', '.')))
        }else{
            setMedidaA(0)
        }
    }

    /**
     * Define valor do estado MedidoB conforme valor do input que ativou a função.
     * 
     * @param {*} e Evento ativador da função 
     */
    function HandleMedidaB(e){
        let medida = e.target.value
        if(medida > 0 || medida === ''){
            setMedidaB( parseFloat(medida.replace(',', '.')))
        }else{
            setMedidaB(0)
        }
    }

    /**
     * Define valor do estado Peso conforme valor do input que ativou a função.
     * 
     * @param {*} e Evento ativador da função 
     */
    function HandlePeso(e){
        let peso = e.target.value
        if(peso > 0 || peso === ''){
            setPeso(parseFloat(peso.replace(',', '.')))
        }else{
            setPeso(0)
        }
    }

    /**
     * Define valor do estado MaterialSelecionado conforme valor do input que ativou a função.
     * 
     * @param {*} e Evento ativador da função 
     */
   async function HandleMaterialSelecionado(e){
        setMaterialSelecionado(e.target.value)
        const resultado = await pegarEspessurasChapasPorMaterial(e.target.value)
        if(resultado.status === 200){  
            const espessuras = resultado.data
            setEspessurasOptions(espessuras)
        }
    }

    /**
     * Define valor do estado EspessuraSelecionada conforme valor do input que ativou a função.
     * 
     * @param {*} e Evento ativador da função. 
     */
    function HandleEspessuraSelecionada(e){
        setEspessuraSelecionada(e.target.value)
    }

    /**
     * Calcula melhor aproveitamento das peças nas chapas de mesmo material e espessura existentes no banco de dados. Define o estado DadosResultado com todos os dados de aproveitamento em cada chapa. Define tambem estados MedidaAPecaEmResultado e MedidaBPecaEmResultado conforme valores dos estados MedidaA e MedidaB.
     * 
     * @param {*} e Evento ativador da função. 
     */
    async function CalcularAproveitamento(e){
        e.preventDefault()
        setMedidaAPecaEmResultado(0)
        setMedidaBPecaEmResultado(0)
        setDadosResultado([])

        setQuantidadesPecasChapa([])

        const resultado = await pegarChapasParaCalculo(MaterialSelecionado,EspessuraSelecionada)
        const resultadoDados = resultado.data

        for(let i = 0; i < resultadoDados.length;i++){


            const quantidadePecas = await calculaMaximoDePecasChapa(
                resultadoDados[i],
                MedidaA,
                MedidaB
            );
            
            // Atualiza o estado de forma funcional, garantindo o valor correto de cada iteração
            setQuantidadesPecasChapa((prevQuantidades) => [...prevQuantidades, quantidadePecas]);
            
            
            const DadosTotaisChapas = await calculaInformacoesResultado(resultadoDados[i], quantidadePecas, Peso)



            setDadosResultado((ValorAnnteriorDadosResultado) => [...ValorAnnteriorDadosResultado , DadosTotaisChapas])
            
               
        }

        setMedidaAPecaEmResultado(MedidaA)
        setMedidaBPecaEmResultado(MedidaB)
        setMedidaA('')
        setMedidaB('')
        setPeso('')
        setMaterialSelecionado('')
        setEspessuraSelecionada(0)
    }

    /**
     * Abre o modal de visualização de resultado de chapa, define todos os estados contendo informações dos posicionamentos dos retangulos para visualização (`RetangulosPosicionamentoHorizontal` , `RetangulosPosicionamentoVertical` , `RetangulosPosicionamentoMaximoMisturado`), Define `DadosChapaVisualizacao` conforme dadoChapa repassado como parametro.
     * 
     * @param {Object} dadoChapa Objeto contendo todos os dados da chapa. 
     */
    async function AbreVisualizacaoCriaRetangulosPosicionamentos(dadoChapa){
        setDadosChapaVisualizacao(dadoChapa)
        console.log(dadoChapa)
        const resultadosPosicionamentos = await criaRetangulosPosicionamentos(dadoChapa , MedidaAPecaEmResultado , MedidaBPecaEmResultado )
        
        
        setAlturaChapaVisualizacao(dadoChapa.cha_altura)
        setComprimentoChapaVisualizacao(dadoChapa.cha_comprimento) 

        setRetangulosPosicionamentoHorizontal(resultadosPosicionamentos.retangulosHorizontalResultado)
        setRetangulosPosicionamentoVertical(resultadosPosicionamentos.retangulosVerticalResultado)
        setRetangulosPosicionamentoMaximoMisturado(resultadosPosicionamentos.retangulosMaximoMisturadoResultado)

        setModalVisualizacaoEstaVisivel(true)
    }

    /**
     * Fecha modal de visualização de resultado de chapa.
     */
    function FechaModalVisualizacao(){
        setAlturaChapaVisualizacao(0)
        setComprimentoChapaVisualizacao(0)
        setRetangulosPosicionamentoHorizontal([])
        setRetangulosPosicionamentoVertical([])
        setRetangulosPosicionamentoMaximoMisturado([])
        
        setDadosChapaVisualizacao({})
        setModalVisualizacaoEstaVisivel(false)
    }

    

    return (
    <CalculadoraAproveitamentoContext.Provider value={{ MedidaA , MedidaB , Peso , MaterialSelecionado , EspessuraSelecionada , DadosResultado , EspessurasOptions, HandleMedidaA , HandleMedidaB , HandlePeso , HandleMaterialSelecionado , HandleEspessuraSelecionada , CalcularAproveitamento, setMaterialOptions , MaterialOptions ,setEspessurasOptions , QuantidadesPecasChapa , AlturaChapaVisualizacao , ComprimentoChapaVisualizacao , AbreVisualizacaoCriaRetangulosPosicionamentos , FechaModalVisualizacao , ModalVisualizacaoEstaVisivel , DadosChapaVisualizacao , RetangulosPosicionamentoHorizontal , RetangulosPosicionamentoVertical , RetangulosPosicionamentoMaximoMisturado}}>
      {children}
    </CalculadoraAproveitamentoContext.Provider>
  );

}

export const useCalculadoraAproveitamento =() => {
    return useContext(CalculadoraAproveitamentoContext)
}