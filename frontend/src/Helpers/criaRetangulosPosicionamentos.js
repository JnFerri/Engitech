import MaxRectsBinPack from 'rects-bin-pack'

function criaRetangulosPosicionamentos(dadosChapa ,MedidaA , MedidaB , MedidaBordaSeguranca){
    
    
    
    const retangulosHorizontal = []
    const retangulosVertical = []
    const retangulosMaximo = []
    const retangulosVerticalMaximo = []
    
    let resultadoHorizontal = []
    let resultadoVertical = []
    let resultadoMaximoMisturado = []
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
            false
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
            false
        )
        
        // Inserindo cada retângulo individualmente
        resultadoVertical = pack.insert2(retangulosVertical, MaxRectsBinPack.BestAreaFit)
    }
        

    // Criando retângulos para o máximo horizontal primeiro
    if (dadosChapa.quantidade_maximo_misturado > 0) {
        

    
            
        for (let i = 0; i < dadosChapa.distribuicaoMisturado.vertical; i++) {
            const retangle = {
                width: MedidaA,
                height: MedidaB,
                
            }
            retangulosMaximo.push(retangle)
        }
        for (let i = 0; i < dadosChapa.distribuicaoMisturado.horizontal; i++) {
            const retangle = {
                width: MedidaB,
                height: MedidaA,
                
            }
            retangulosMaximo.push(retangle)
        }
    
    

        const pack = new MaxRectsBinPack.MaxRectsBinPack(
            dadosChapa.cha_comprimento - MedidaBordaSeguranca, 
            dadosChapa.cha_altura - MedidaBordaSeguranca, 
            false
        )

            console.log(retangulosMaximo.map(dado => dado))
        
           resultadoMaximoMisturado = pack.insert2(retangulosMaximo, MaxRectsBinPack.BottomLeftRule)
        
    }
 
   /* // Criando retângulos para o máximo quantidade_pecas_vertical primeiro
    if (dadosChapa.quantidade_pecas_vertical_maximo > 0) {
        for (let i = 0; i < dadosChapa.quantidade_pecas_vertical_maximo; i++) {
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
       
        resultadoMaximoVerticalPrimeiro =  pack.insert2(retangulosVerticalMaximo, MaxRectsBinPack.BestShortSideFit)
    
    }*/

    // Retornando todos os resultados
    return {
        retangulosHorizontalResultado : resultadoHorizontal,
        retangulosVerticalResultado : resultadoVertical,
        retangulosMaximoMisturadoResultado : resultadoMaximoMisturado
    }
}
    export default criaRetangulosPosicionamentos