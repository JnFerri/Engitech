

async function calculaInformacoesResultado(DadosChapa, DadosQuantidades, PesoPeca ){

    const pesoTotalChapa = (DadosChapa.cha_comprimento * DadosChapa.cha_altura * Number(DadosChapa.cha_espessura) * Number(DadosChapa.mat_fator_densidade)) /1000
    console.log(DadosChapa,pesoTotalChapa)
    const pesoPecaPosicaoHorizontal = (PesoPeca * DadosQuantidades.horizontal)

    const pesoPecaPosicaoVertical = (PesoPeca * DadosQuantidades.vertical)

    const pesoPecaPosicaoMisturado = (PesoPeca * DadosQuantidades.maxMisturado)


    const perdaHorizontal =  (( pesoTotalChapa / pesoPecaPosicaoHorizontal) -1 ) * 100

    const perdaVertical = (( pesoTotalChapa / pesoPecaPosicaoVertical) -1 ) * 100

    const perdaMisturadoMaximo = (( pesoTotalChapa / pesoPecaPosicaoMisturado) -1 ) * 100


    const valorUnd = PesoPeca / pesoTotalChapa

    const dadosResultado = {
        ...DadosChapa,
        quantidade_pecas_horizontal : DadosQuantidades.horizontal,
        perda_horizontal : perdaHorizontal.toFixed(2),
        quantidade_pecas_vertical : DadosQuantidades.vertical,
        perda_vertical : perdaVertical.toFixed(2),
        quantidade_maximo_misturado : DadosQuantidades.maxMisturado,
        melhorPosicaoMisturado:DadosQuantidades.melhorPosicao,
        distribuicaoMisturado: DadosQuantidades.distribuicao,
        perda_misturado : perdaMisturadoMaximo.toFixed(2),
        valor_und : valorUnd

    }

    return dadosResultado
}

export default calculaInformacoesResultado