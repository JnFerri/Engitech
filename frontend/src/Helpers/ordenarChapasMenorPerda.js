function ordenarChapasPorMenorPerda(DadoChapas) {
    return DadoChapas.sort((a, b) => {
        const perdaA = Math.min(a.perda_horizontal, a.perda_vertical, a.perda_misturado);
        const perdaB = Math.min(b.perda_horizontal, b.perda_vertical,b.perda_misturado);
        return perdaA - perdaB  // Ordena em ordem crescente de perda
    });
}

export default ordenarChapasPorMenorPerda