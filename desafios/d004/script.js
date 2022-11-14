function botao() {
    var produto = window.prompt('Qual produto você está comprando?')
    var preco = Number(window.prompt(`Quanto custa o ${produto} que você está comprando?`))
    var valor = Number(window.prompt(`Qual foi o valor que você deu para pagar o ${produto}`))
    var troco = valor - preco
    window.alert(`Você comprou um ${produto} que custou ${preco.toLocaleString('pt-BR', {style: 'currency', currency:'BRL'})}. Deu ${valor.toLocaleString('pt-BR', {style: 'currency', currency:'BRL'})} em dinheiro e vai receber ${troco.toLocaleString('pt-BR', {style: 'currency', currency:'BRL'})} de troco. Volte Sempre!`)
}