function ordenarChapasPorMenorPerda(DadoChapas) {
    return DadoChapas.sort((a, b) => {
        const perdaA = Math.min(a.perda_horizontal, a.perda_vertical);
        const perdaB = Math.min(b.perda_horizontal, b.perda_vertical);
        return perdaA - perdaB; // Ordena em ordem crescente de perda
    });
}

export default ordenarChapasPorMenorPerda