async function calculaMaximoDePecasChapa(DadosChapa, MedidaA, MedidaB, MedidaBordaSeguranca) {

    const larguraUtil = DadosChapa.cha_comprimento - MedidaBordaSeguranca;
    const alturaUtil = DadosChapa.cha_altura - MedidaBordaSeguranca;

    // Opção 1: Todas as peças na orientação padrão (MedidaA x MedidaB)
    const horizontalFit = Math.floor(alturaUtil / MedidaA) * Math.floor(larguraUtil / MedidaB);

    // Opção 2: Todas as peças rotacionadas (MedidaB x MedidaA)
    const verticalFit = Math.floor(alturaUtil / MedidaB) * Math.floor(larguraUtil / MedidaA);

    // Opção 3: Mistura de orientações, iniciando com horizontal e depois vertical
    let maxFitHorizontalFirst = 0;
    let horizontalFirstPosition = { horizontal: 0, vertical: 0 };

    for (let i = 0; i <= Math.floor(alturaUtil / MedidaA); i++) {
        const remainingHeight = alturaUtil - i * MedidaA;
        const piecesInWidth = i * Math.floor(larguraUtil / MedidaB);
        const piecesInRemainingHeight = Math.floor(remainingHeight / MedidaB) * Math.floor(larguraUtil / MedidaA);
        const totalPieces = piecesInWidth + piecesInRemainingHeight;

        if (totalPieces > maxFitHorizontalFirst) {
            maxFitHorizontalFirst = totalPieces;
            horizontalFirstPosition = { horizontal: piecesInWidth, vertical: piecesInRemainingHeight };
        }
    }

    // Opção 4: Mistura de orientações, iniciando com vertical e depois horizontal
    let maxFitVerticalFirst = 0;
    let verticalFirstPosition = { horizontal: 0, vertical: 0 };

    for (let i = 0; i <= Math.floor(larguraUtil / MedidaB); i++) {
        const remainingWidth = larguraUtil - i * MedidaB;
        const piecesInHeight = i * Math.floor(alturaUtil / MedidaA);
        const piecesInRemainingWidth = Math.floor(remainingWidth / MedidaA) * Math.floor(alturaUtil / MedidaB);
        const totalPieces = piecesInHeight + piecesInRemainingWidth;

        if (totalPieces > maxFitVerticalFirst) {
            maxFitVerticalFirst = totalPieces;
            verticalFirstPosition = { horizontal: piecesInHeight , vertical: piecesInRemainingWidth};
        }
    }

    // Verifica qual é a melhor abordagem
    let maxFitMisturado = 0;
    let melhorPosicao = '';
    let melhorDistribuicao = {};

    if (maxFitHorizontalFirst > maxFitVerticalFirst) {
        maxFitMisturado = maxFitHorizontalFirst;
        melhorPosicao = 'Iniciado com Vertical';
        melhorDistribuicao = horizontalFirstPosition;
    } else {
        maxFitMisturado = maxFitVerticalFirst;
        melhorPosicao = 'Iniciado com Horizontal';
        melhorDistribuicao = verticalFirstPosition;
    }

    // Retorna o valor de todas as abordagens
    return {
        horizontal: horizontalFit,
        vertical: verticalFit,
        maxMisturado: maxFitMisturado,
        melhorPosicao: melhorPosicao,
        distribuicao: melhorDistribuicao
    };
}

export default calculaMaximoDePecasChapa;
