import MaxRectsBinPack from 'rects-bin-pack'

function criaRetangulosPosicionamentos(dadosChapa ,MedidaA , MedidaB , maquina ){
    
     function VerificaBordaSeguranca(){
        if(dadosChapa.cha_comprimento > 3000 || dadosChapa.cha_altura > 1240){
            return 0
        }else {
            return 10
        }
    }
    const MedidaBordaSeguranca = VerificaBordaSeguranca()
    
    
    const retangulosHorizontal = []
    const retangulosVertical = []
    const retangulosMaximo = []
    
    
    let resultadoHorizontal = []
    let resultadoVertical = []
    let resultadoMaximoMisturado = []
    


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

        
        
           resultadoMaximoMisturado = pack.insert2(retangulosMaximo, MaxRectsBinPack.BottomLeftRule)
        
    }

    // Retornando todos os resultados
    return {
        retangulosHorizontalResultado : resultadoHorizontal,
        retangulosVerticalResultado : resultadoVertical,
        retangulosMaximoMisturadoResultado : resultadoMaximoMisturado
    }
}
    export default criaRetangulosPosicionamentos