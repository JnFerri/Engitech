import { createContext, useContext, useState } from "react";
import { pegarMaterialPorId } from "../Services/Materiais.js";

const CalculadoraPesoChapaContext = createContext()

export const CalculadoraPesoChapaProvider = ({children}) => {
    const [EspessuraFormCalculadoraPesoChapa, setEspessuraFormCalculadoraPesoChapa] = useState('')
    const [AlturaFormCalculadoraPesoChapa, setAlturaFormCalculadoraPesoChapa] = useState('')
    const [ComprimentoFormCalculadoraPesoChapa, setComprimentoFormCalculadoraPesoChapa] = useState('')
    const [MaterialFormCalculadoraPesoChapa, setMaterialFormCalculadoraPesoChapa] = useState('')
    const [DadosChapaResultado, setDadosChapaResultado] = useState([])

    function HandleEspessuraFormCalculadoraPesoChapa(e){
        if(e.target.value > 0 || e.target.value === ''){
            setEspessuraFormCalculadoraPesoChapa(e.target.value)
        }else{
            window.alert('Apenas Valores Possitivos.')
        }
    }

    function HandleAlturaFormCalculadoraPesoChapa(e){
        if(e.target.value > 0 || e.target.value === ''){
            setAlturaFormCalculadoraPesoChapa(e.target.value)
        }else{
            window.alert('Apenas Valores Possitivos.')
        }
    }

    function HandleComprimentoFormCalculadoraPesoChapa(e){
        if(e.target.value > 0 || e.target.value === ''){
        setComprimentoFormCalculadoraPesoChapa(e.target.value)
        }else{
            window.alert('Apenas Valores Possitivos.')
        }
    }

    function HandleMaterialFormCalculadoraPesoChapa(e){
        console.log(e.target.value)
        setMaterialFormCalculadoraPesoChapa(Number(e.target.value))
    }

async function HandleCalcularPesoChapa(e){
    e.preventDefault()
    const material = await pegarMaterialPorId(MaterialFormCalculadoraPesoChapa)
    const espessura = parseFloat(EspessuraFormCalculadoraPesoChapa)
    const altura = parseFloat(AlturaFormCalculadoraPesoChapa)
    const comprimento = parseFloat(ComprimentoFormCalculadoraPesoChapa)
    const fatorDensidade = Number(material.data[0].mat_fator_densidade)
    const resultado =Number((espessura * altura * comprimento * fatorDensidade) / 1000).toFixed(4)
    setAlturaFormCalculadoraPesoChapa('')
    setComprimentoFormCalculadoraPesoChapa('')
    setEspessuraFormCalculadoraPesoChapa('')
    setMaterialFormCalculadoraPesoChapa('')
    const dadosResultado = {
        espessura:espessura,
        altura:altura,
        comprimento:comprimento,
        material:material.data[0].mat_nome,
        resultado:resultado
    }
    setDadosChapaResultado(dadosResultado)
}


    return(
        <CalculadoraPesoChapaContext.Provider value={{EspessuraFormCalculadoraPesoChapa, AlturaFormCalculadoraPesoChapa, ComprimentoFormCalculadoraPesoChapa, MaterialFormCalculadoraPesoChapa, HandleEspessuraFormCalculadoraPesoChapa, HandleAlturaFormCalculadoraPesoChapa, HandleComprimentoFormCalculadoraPesoChapa, HandleMaterialFormCalculadoraPesoChapa, HandleCalcularPesoChapa , DadosChapaResultado }}>
            {children}
        </CalculadoraPesoChapaContext.Provider>
    )
}

export const useCalculadoraPesoChapa =() => {
    return useContext(CalculadoraPesoChapaContext)
}