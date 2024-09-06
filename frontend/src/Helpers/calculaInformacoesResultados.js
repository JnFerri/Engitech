

async function calculaInformacoesResultado(DadosChapa, DadosQuantidades, PesoPeca ){

    const pesoTotalChapa = (DadosChapa.cha_comprimento * DadosChapa.cha_altura * Number(DadosChapa.cha_espessura) * Number(DadosChapa.mat_fator_densidade)) /1000

    const pesoPecaPosicaoHorizontal = (PesoPeca * DadosQuantidades.horizontal)

    const pesoPecaPosicaoVertical = (PesoPeca * DadosQuantidades.vertical)

    const pesoPecaPosicaoHorizontalMaximo = (PesoPeca * DadosQuantidades.maximoHorizontalPrimeiro)

    const pesoPecaPosicaoVerticalMaximo = (PesoPeca * DadosQuantidades.maximoVericalPrimeiro)

    const perdaHorizontal = - ((pesoPecaPosicaoHorizontal / pesoTotalChapa) -1 ) * 100

    const perdaVertical = - ((pesoPecaPosicaoVertical / pesoTotalChapa) -1 ) * 100

    const perdaHorizontalMaximo = - ((pesoPecaPosicaoHorizontalMaximo / pesoTotalChapa) -1 ) * 100

    const perdaVerticalMaximo = - ((pesoPecaPosicaoVerticalMaximo / pesoTotalChapa) -1 ) * 100

    const valorUnd = PesoPeca / pesoTotalChapa

    const dadosResultado = {
        ...DadosChapa,
        quantidade_pecas_horizontal : DadosQuantidades.horizontal,
        perda_horizontal : perdaHorizontal.toFixed(2),
        quantidade_pecas_vertical : DadosQuantidades.vertical,
        perda_vertical : perdaVertical.toFixed(2),
        quantidade_pecas_horizontal_maximo : DadosQuantidades.maximoHorizontalPrimeiro,
        perda_horizontal_maximo : perdaHorizontalMaximo.toFixed(2),
        quantidade_pecas_vertical_maximo : DadosQuantidades.maximoVericalPrimeiro,
        perda_vertical_maximo : perdaVerticalMaximo.toFixed(2),
        valor_und : valorUnd
    }

    return dadosResultado
}

export default calculaInformacoesResultado