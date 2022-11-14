var cotacao = Number(window.prompt('Antes de mais nada. Quanto está a cotação do dólar agora?'))

function  converter() {
    var carteira = Number(window.prompt('Quantos R$ você tem na carteira?'))
    var convertido = carteira / cotacao
    res.innerHTML = `<h2>O valor de ${carteira.toLocaleString('pt-BR', {style: 'currency', currency:'BRL'})} corresponde à ${convertido.toLocaleString('en', {style: 'currency', currency:'USL'})}</h2>`
}
