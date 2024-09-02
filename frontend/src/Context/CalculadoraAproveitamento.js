import { createContext, useContext, useEffect, useState } from "react";
import { pegarChapaPorMaterial } from "../Services/Chapas.js";
import { pegarChapasParaCalculo } from "../Services/Chapas.js";



const CalculadoraAproveitamentoContext = createContext()


export const CalculadoraAproveitamentoProvider = ({children}) => {
    const [MedidaA, setMedidaA] = useState(0)
    const [MedidaB, setMedidaB] = useState(0)
    const [Peso, setPeso] = useState(0)
    const [MaterialSelecionado, setMaterialSelecionado] = useState('')
    const [EspessurasOptions, setEspessurasOptions] = useState([])
    const [MaterialOptions, setMaterialOptions] =useState([])
    const [EspessuraSelecionada, setEspessuraSelecionada] = useState(0)
    const [DadosResultado, setDadosResultado] = useState([])

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

    function HandleMaterialSelecionado(e){
        setMaterialSelecionado(e.target.value)
    }

    function HandleEspessuraSelecionada(e){
        setEspessuraSelecionada(e.target.value)
    }

    useEffect(() => {
        async function pegarEspessuras(){
        const resultado = await pegarChapaPorMaterial(MaterialSelecionado)
        if(resultado.length){
            const espessuras = resultado
            setEspessurasOptions(espessuras)
        }
        }
        pegarEspessuras()
    }, [MaterialSelecionado])

    async function HandleSubmit(e){
        e.preventDefault()
        const resultado = await pegarChapasParaCalculo(MaterialSelecionado,EspessuraSelecionada)
        setDadosResultado(resultado.data)
        setMedidaA(0)
        setMedidaB(0)
        setPeso(0)
        setMaterialSelecionado('')
        setEspessuraSelecionada(0)
    }



    return (
    <CalculadoraAproveitamentoContext.Provider value={{ MedidaA , MedidaB , Peso , MaterialSelecionado , EspessuraSelecionada , DadosResultado , EspessurasOptions, HandleMedidaA , HandleMedidaB , HandlePeso , HandleMaterialSelecionado , HandleEspessuraSelecionada , HandleSubmit, setMaterialOptions , MaterialOptions}}>
      {children}
    </CalculadoraAproveitamentoContext.Provider>
  );

}

export const useCalculadoraAproveitamento =() => {
    return useContext(CalculadoraAproveitamentoContext)
}