function verificar() {
    let antes = Number(window.prompt('Qual era o preço anterior do produto?'))
    let depois = Number(window.prompt('Qual é o preço atual do produto?'))
    let caro = depois - antes
    let barato = antes - depois
    let porcentagem1 = ((100*depois)/antes) - 100
    let porcentagem2 = ((100*antes)/depois) - 100
    saida.innerHTML = `<p>O produto custava ${antes.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})} e agora custa ${depois.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})}.</p>`
    if (depois > antes) {
        saida.innerHTML += `<p>Hoje o produto está mais caro.</p>`
        saida.innerHTML += `<p>O preço subiu ${caro.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})} em relação ao preço anterior.</p>`
        saida.innerHTML += `<p>Uma variação de ${porcentagem1.toFixed(2)}% pra cima.</p>`
    } else {
        saida.innerHTML += `<p>Hoje o produto está mais barato.</p>`
        saida.innerHTML += `<p>O preço caiu ${barato.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})} em relação ao preço anterior.</p>`
        saida.innerHTML += `<p>Uma variação de ${porcentagem2.toFixed(2)}% pra baixo.</p>`
    }
}