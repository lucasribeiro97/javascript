var cotacao = Number(window.prompt('Antes de mais nada. Quanto está a cotação do dólar agora?'))

function  converter() {
    var carteira = Number(window.prompt('Quantos R$ você tem na carteira?'))
    var convertido = carteira / cotacao
    res.innerHTML = `<h2>O valor de ${carteira.toFixed(2)} corresponde à US$${convertido.toFixed(2)}</h2>`
}
