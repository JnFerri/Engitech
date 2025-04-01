import { createContext, useContext, useState } from "react";
import { pegarMaterialPorId } from "../Services/Materiais.js";



const CalculadoraPesoChapaContext = createContext()

/**
 * 
 * ##Estados:
 *  - `EspessuraFormCalculadoraPesoChapa`: Armazena o valor inserido para a espessura da chapa.
 *  - `AlturaFormCalculadoraPesoChapa`: Armazena o valor inserido para a altura da chapa.
 *  - `ComprimentoFormCalculadoraPesoChapa`: Armazena o valor inserido para o comprimento da chapa.
 *  - `MaterialFormCalculadoraPesoChapa`: Armazena o valor selecionado para o material da chapa.
 *  - `DadosChapaResultado`: Armazena os dados do resultado do cálculo do peso da chapa (incluindo espessura, altura, comprimento, material e o peso calculado).
 * 
 * ##Funções:
 * - `HandleEspessuraFormCalculadoraPesoChapa`, `HandleAlturaFormCalculadoraPesoChapa`, `HandleComprimentoFormCalculadoraPesoChapa`: São funções de "manipulação" para atualizar os respectivos estados quando o usuário insere valores no formulário. Elas garantem que apenas valores positivos ou vazios sejam aceitos.
 * 
 * - `HandleMaterialFormCalculadoraPesoChapa`: Atualiza o estado do material quando o usuário escolhe um material específico. Converte o valor selecionado para um número.
 * 
 * - `HandleCalcularPesoChapa`: Função assíncrona que calcula o peso da chapa com base nas entradas do formulário, utilizando o fator de densidade do material. Após o cálculo, limpa os campos do formulário e atualiza o estado com o resultado.
 */
export const CalculadoraPesoChapaProvider = ({children}) => {
    const [EspessuraFormCalculadoraPesoChapa, setEspessuraFormCalculadoraPesoChapa] = useState('')
    const [AlturaFormCalculadoraPesoChapa, setAlturaFormCalculadoraPesoChapa] = useState('')
    const [ComprimentoFormCalculadoraPesoChapa, setComprimentoFormCalculadoraPesoChapa] = useState('')
    const [MaterialFormCalculadoraPesoChapa, setMaterialFormCalculadoraPesoChapa] = useState('')
    const [DadosChapaResultado, setDadosChapaResultado] = useState([])

    /**
     * Define valor do estado EspessuraFormCalculadoraPesoChapa conforme valor do input ativador da função caso valor for maior que 0.
     * 
     * @param {*} e Evento ativador da função. 
     */
    function HandleEspessuraFormCalculadoraPesoChapa(e){
        if(e.target.value > 0 || e.target.value === ''){
            setEspessuraFormCalculadoraPesoChapa(e.target.value)
        }else{
            window.alert('Apenas Valores Possitivos.')
        }
    }

    /**
     * Define valor do estado AlturaFormCalculadoraPesoChapa conforme valor do input ativador da função caso valor for maior que 0.
     * 
     * @param {*} e Evento ativador da função. 
     */
    function HandleAlturaFormCalculadoraPesoChapa(e){
        if(e.target.value > 0 || e.target.value === ''){
            setAlturaFormCalculadoraPesoChapa(e.target.value)
        }else{
            window.alert('Apenas Valores Possitivos.')
        }
    }

    /**
     * Define valor do estado ComprimentoFormCalculadoraPesoChapa conforme valor do input ativador da função caso valor for maior que 0.
     * 
     * @param {*} e Evento ativador da função. 
     */
    function HandleComprimentoFormCalculadoraPesoChapa(e){
        if(e.target.value > 0 || e.target.value === ''){
        setComprimentoFormCalculadoraPesoChapa(e.target.value)
        }else{
            window.alert('Apenas Valores Possitivos.')
        }
    }

    /**
     * Define valor do estado `MaterialFormCalculadoraPesoChapa` conforme id do material selecionado no input select ativador.
     * 
     * @param {*} e  Evento ativador da função.
     */
    function HandleMaterialFormCalculadoraPesoChapa(e){
        setMaterialFormCalculadoraPesoChapa(Number(e.target.value))
    }
    /**
     * Calcula resultado de peso conforme calculo atráves dos estado ( `MaterialFormCalculadoraPesoChapa`, `EspessuraFormCalculadoraPesoChapa` , `AlturaFormCalculadoraPesoChapa`, `ComprimentoFormCalculadoraPesoChapa`) . Salva todos os valores e o resultado como um objeto no estado `DadosChapaResultado`.
     * 
     * @param {*} e Evento ativador da função. 
     */
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