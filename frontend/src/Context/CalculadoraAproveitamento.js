import { createContext, useContext, useEffect, useState } from "react";
import {  pegarEspessurasChapasPorMaterial } from "../Services/Chapas.js";
import { pegarChapasParaCalculo } from "../Services/Chapas.js";
import calculaMaximoDePecasChapa from "../Helpers/calculaMaximoDePecasChapa.js";
import calculaInformacoesResultado from "../Helpers/calculaInformacoesResultados.js";
import criaRetangulosPosicionamentos from "../Helpers/criaRetangulosPosicionamentos.js";



const CalculadoraAproveitamentoContext = createContext()


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

    function HandleMedidaA(e){
        let medida = e.target.value
        if(medida > 0 || medida === ''){
            setMedidaA(parseFloat(medida.replace(',', '.')))
        }else{
            setMedidaA(0)
        }
    }

    function HandleMedidaB(e){
        let medida = e.target.value
        if(medida > 0 || medida === ''){
            setMedidaB( parseFloat(medida.replace(',', '.')))
        }else{
            setMedidaB(0)
        }
    }

    function HandlePeso(e){
        let peso = e.target.value
        if(peso > 0 || peso === ''){
            setPeso(parseFloat(peso.replace(',', '.')))
        }else{
            setPeso(0)
        }
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

    async function AbreVisualizacaoCriaRetangulosPosicionamentos(dadoChapa){
        setDadosChapaVisualizacao(dadoChapa)

        const resultadosPosicionamentos = await criaRetangulosPosicionamentos(dadoChapa , MedidaAPecaEmResultado , MedidaBPecaEmResultado )
        
        
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