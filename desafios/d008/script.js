function desconto() {
    var produto = window.prompt('Qual é o produto que você está comprando?')
    var preco = Number(window.prompt(`Qual é o preço de ${produto}?`))
    var desconto = preco * 0.10
    var preco2 = preco - desconto
    res.innerHTML = `<h2><strong>Calculando o desconto de 10% para ${produto}</strong></h2>`
    res.innerHTML += `<p>O preço original era R$${preco}.</p>`
    res.innerHTML += `<p>Você acaba de ganhar R$${desconto.toFixed(2)} de desconto (-10%).</p>`
    res.innerHTML += `<p>No fim, você vai pagar R$${preco2.toFixed(2)} no produto ${produto}.</p>`
}