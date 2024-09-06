import MaxRectsBinPack from 'rects-bin-pack'

async function criaRetangulosPosicionamentos(dadosChapa ,MedidaA , MedidaB , MedidaBordaSeguranca){
    
    const retangulosHorizontal = []
    const retangulosVertical = []
    const retangulosHorizontalMaximo = []
    const retangulosVerticalMaximo = []

    let resultadoHorizontal = []
    let resultadoVertical = []
    let resultadoMaximoHorizontalPrimeiro = []
    let resultadoMaximoVerticalPrimeiro = []

    // Criando retângulos na orientação horizontal
    if (dadosChapa.quantidade_pecas_horizontal > 0) {
        for (let i = 0; i < dadosChapa.quantidade_pecas_horizontal; i++) {
            const retangle = {
                width: MedidaB,
                height: MedidaA,
                id : i
            }
            retangulosHorizontal.push(retangle)
        }

        const pack = new MaxRectsBinPack.MaxRectsBinPack(
            dadosChapa.cha_comprimento - MedidaBordaSeguranca, 
            dadosChapa.cha_altura - MedidaBordaSeguranca, 
            true
        )
        
        // Inserindo cada retângulo individualmente
            
           resultadoHorizontal =  pack.insert2(retangulosHorizontal, MaxRectsBinPack.BestAreaFit)
        
    }

    // Criando retângulos na orientação quantidade_pecas_vertical
    if (dadosChapa.quantidade_pecas_vertical > 0) {
        for (let i = 0; i < dadosChapa.quantidade_pecas_vertical; i++) {
            const retangle = {
                width: MedidaA,
                height: MedidaB,
                id : i
            }
            retangulosVertical.push(retangle)
        }
        
        const pack = new MaxRectsBinPack.MaxRectsBinPack(
            dadosChapa.cha_comprimento - MedidaBordaSeguranca, 
            dadosChapa.cha_altura - MedidaBordaSeguranca, 
            true
        )
        
        // Inserindo cada retângulo individualmente
        resultadoVertical = pack.insert2(retangulosVertical, MaxRectsBinPack.BestAreaFit)
    }
        

    // Criando retângulos para o máximo horizontal primeiro
    if (dadosChapa.quantidade_pecas_horizontal_maxima > 0) {
        for (let i = 0; i < dadosChapa.quantidade_pecas_horizontal_maxima; i++) {
            const retangle = {
                width: MedidaB,
                height: MedidaA,
                id : i
            }
            retangulosHorizontalMaximo.push(retangle)
        }

        const pack = new MaxRectsBinPack.MaxRectsBinPack(
            dadosChapa.cha_comprimento - MedidaBordaSeguranca, 
            dadosChapa.cha_altura - MedidaBordaSeguranca, 
            true
        )
        
            
           resultadoMaximoHorizontalPrimeiro = pack.insert2(retangulosHorizontalMaximo, MaxRectsBinPack.BestAreaFit)
        
    }

    // Criando retângulos para o máximo quantidade_pecas_vertical primeiro
    if (dadosChapa.quantidade_pecas_vertical_maxima > 0) {
        for (let i = 0; i < dadosChapa.quantidade_pecas_vertical_maxima; i++) {
            const retangle = {
                width: MedidaA,
                height: MedidaB,
                id : i
            }
            retangulosVerticalMaximo.push(retangle)
        }

        const pack = new MaxRectsBinPack.MaxRectsBinPack(
            dadosChapa.cha_comprimento - MedidaBordaSeguranca, 
            dadosChapa.cha_altura - MedidaBordaSeguranca, 
            true
        )
        
        resultadoMaximoVerticalPrimeiro =  pack.insert2(retangulosVerticalMaximo, MaxRectsBinPack.BestAreaFit)
        
    }

    // Retornando todos os resultados
    return {
        retangulosHorizontalResultado : resultadoHorizontal,
        retangulosVerticalResultado : resultadoVertical,
        retangulosHorizontalMaximoResultado : resultadoMaximoHorizontalPrimeiro,
        retangulosVerticalMaximoResultado : resultadoMaximoVerticalPrimeiro
    }
}
    export default criaRetangulosPosicionamentos