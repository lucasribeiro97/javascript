function desconto() {
    var produto = window.prompt('Qual é o produto que você está comprando?')
    var preco = Number(window.prompt(`Qual é o preço de ${produto}?`))
    var desconto = preco * 0.10
    var preco2 = preco - desconto
    res.innerHTML = `<h2><strong>Calculando o desconto de 10% para ${produto}</strong></h2>`
    res.innerHTML += `<p>O preço original era ${preco.toLocaleString('pt-BR', {style: 'currency', currency:'BRL'})}.</p>`
    res.innerHTML += `<p>Você acaba de ganhar ${desconto.toLocaleString('pt-BR', {style: 'currency', currency:'BRL'})} de desconto (-10%).</p>`
    res.innerHTML += `<p>No fim, você vai pagar ${preco2.toLocaleString('pt-BR', {style: 'currency', currency:'BRL'})} no produto ${produto}.</p>`
}