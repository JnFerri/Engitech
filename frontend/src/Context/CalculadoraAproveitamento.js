import { createContext, useContext, useEffect, useState } from "react";
import {  pegarEspessurasChapasPorMaterial } from "../Services/Chapas.js";
import { pegarChapasParaCalculo } from "../Services/Chapas.js";
import calculaMaximoDePecasChapa from "../Helpers/calculaMaximoDePecasChapa.js";
import calculaInformacoesResultado from "../Helpers/calculaInformacoesResultados.js";
import criaRetangulosPosicionamentos from "../Helpers/criaRetangulosPosicionamentos.js";
import ordenarChapasPorMenorPerda from "../Helpers/ordenarChapasMenorPerda.js";


const CalculadoraAproveitamentoContext = createContext()


export const CalculadoraAproveitamentoProvider = ({children}) => {
    const MedidaBordaSegurancaChapa = 10
    const [MedidaA, setMedidaA] = useState(0)
    const [MedidaB, setMedidaB] = useState(0)
    const [Peso, setPeso] = useState(0)
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


    function HandleMedidaA(e){
        let medida = e.target.value
        setMedidaA(parseFloat(medida.replace(',', '.')))
    }

    function HandleMedidaB(e){
        let medida = e.target.value
        setMedidaB( parseFloat(medida.replace(',', '.')))
    }

    function HandlePeso(e){
        let peso = e.target.value
        setPeso(parseFloat(peso.replace(',', '.')))
    }

   async function HandleMaterialSelecionado(e){
        setMaterialSelecionado(e.target.value)
        const resultado = await pegarEspessurasChapasPorMaterial(e.target.value)
        if(resultado.status === 200){  
            const espessuras = resultado.data
            setEspessurasOptions(espessuras)
        }
    }

    function HandleEspessuraSelecionada(e){
        setEspessuraSelecionada(e.target.value)
    }

   

    useEffect(() => {
        console.log(DadosResultado)
        console.log(QuantidadesPecasChapa)
    }, [DadosResultado, QuantidadesPecasChapa])


    async function HandleSubmit(e){
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
                MedidaB,
                MedidaBordaSegurancaChapa
            );
            
            // Atualiza o estado de forma funcional, garantindo o valor correto de cada iteração
            setQuantidadesPecasChapa((prevQuantidades) => [...prevQuantidades, quantidadePecas]);
            
            
            const DadosTotaisChapas = await calculaInformacoesResultado(resultadoDados[i], quantidadePecas, Peso)

            setDadosResultado((ValorAnnteriorDadosResultado) => [...ValorAnnteriorDadosResultado , DadosTotaisChapas])
            
               
            }

        setMedidaAPecaEmResultado(MedidaA)
        setMedidaBPecaEmResultado(MedidaB)
        setMedidaA(0)
        setMedidaB(0)
        setPeso(0)
        setMaterialSelecionado('')
        setEspessuraSelecionada(0)
    }

    async function AbreVisualizacaoCriaRetangulosPosicionamentos(dadoChapa){
        setDadosChapaVisualizacao(dadoChapa)

        const resultadosPosicionamentos = await criaRetangulosPosicionamentos(dadoChapa , MedidaAPecaEmResultado , MedidaBPecaEmResultado , MedidaBordaSegurancaChapa)
        
        
        setAlturaChapaVisualizacao(dadoChapa.cha_altura)
        setComprimentoChapaVisualizacao(dadoChapa.cha_comprimento) 

        setRetangulosPosicionamentoHorizontal(resultadosPosicionamentos.retangulosHorizontalResultado)
        setRetangulosPosicionamentoVertical(resultadosPosicionamentos.retangulosVerticalResultado)
        setRetangulosPosicionamentoMaximoMisturado(resultadosPosicionamentos.retangulosMaximoMisturadoResultado)

        setModalVisualizacaoEstaVisivel(true)
    }

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
    <CalculadoraAproveitamentoContext.Provider value={{ MedidaA , MedidaB , Peso , MaterialSelecionado , EspessuraSelecionada , DadosResultado , EspessurasOptions, HandleMedidaA , HandleMedidaB , HandlePeso , HandleMaterialSelecionado , HandleEspessuraSelecionada , HandleSubmit, setMaterialOptions , MaterialOptions ,setEspessurasOptions , QuantidadesPecasChapa , AlturaChapaVisualizacao , ComprimentoChapaVisualizacao , AbreVisualizacaoCriaRetangulosPosicionamentos , FechaModalVisualizacao , ModalVisualizacaoEstaVisivel , DadosChapaVisualizacao , RetangulosPosicionamentoHorizontal , RetangulosPosicionamentoVertical , RetangulosPosicionamentoMaximoMisturado}}>
      {children}
    </CalculadoraAproveitamentoContext.Provider>
  );

}

export const useCalculadoraAproveitamento =() => {
    return useContext(CalculadoraAproveitamentoContext)
}