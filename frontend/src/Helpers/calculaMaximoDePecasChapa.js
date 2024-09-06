async function calculaMaximoDePecasChapa(DadosChapa, MedidaA, MedidaB , MedidaBordaSeguranca) {
    
        // Opção 1: Todas as peças na orientação padrão (MedidaA x MedidaB)
        const horizontalFit = Math.floor((DadosChapa.cha_altura - MedidaBordaSeguranca) / MedidaA) * Math.floor((DadosChapa.cha_comprimento - MedidaBordaSeguranca) / MedidaB);
        
        // Opção 2: Todas as peças rotacionadas (MedidaB x MedidaA)
        const verticalFit = Math.floor((DadosChapa.cha_altura - MedidaBordaSeguranca) / MedidaB) * Math.floor((DadosChapa.cha_comprimento - MedidaBordaSeguranca) / MedidaA);
    
        // Opção 3: Combinação de orientações (Horizontal primeiro, depois vertical)
        let maxFitHorizontalFirst = 0;
    
        for (let i = 0; i <= Math.floor(DadosChapa.cha_altura / MedidaA); i++) {
            const remainingHeight = (DadosChapa.cha_altura - MedidaBordaSeguranca) - i * MedidaA;
            const piecesInWidth = i * Math.floor((DadosChapa.cha_comprimento - MedidaBordaSeguranca) / MedidaB);
            const piecesInRemainingHeight = Math.floor(remainingHeight / MedidaB) * Math.floor( (DadosChapa.cha_comprimento - MedidaBordaSeguranca) / MedidaA);
            maxFitHorizontalFirst = Math.max(maxFitHorizontalFirst, piecesInWidth + piecesInRemainingHeight);
        }
    
        // Opção 4: Combinação de orientações (Vertical primeiro, depois horizontal)
        let maxFitVerticalFirst = 0;
    
        for (let i = 0; i <= Math.floor( (DadosChapa.cha_comprimento - MedidaBordaSeguranca) / MedidaB); i++) {
            const remainingWidth = (DadosChapa.cha_comprimento - MedidaBordaSeguranca) - i * MedidaB;
            const piecesInHeight = i * Math.floor(DadosChapa.cha_altura / MedidaA);
            const piecesInRemainingWidth = Math.floor(remainingWidth / MedidaA) * Math.floor((DadosChapa.cha_altura - MedidaBordaSeguranca) / MedidaB);
            maxFitVerticalFirst = Math.max(maxFitVerticalFirst, piecesInHeight + piecesInRemainingWidth);
        }
    
        // Retorna o maior valor entre todas as abordagens
    
        const retorno = {
            horizontal : horizontalFit,
            vertical : verticalFit,
            maximoHorizontalPrimeiro : maxFitHorizontalFirst,
            maximoVericalPrimeiro : maxFitVerticalFirst
        }
    
        return retorno

    
}

export default calculaMaximoDePecasChapa
