function botao() {
    var produto = window.prompt('Qual produto você está comprando?')
    var preco = Number(window.prompt(`Quanto custa o ${produto} que você está comprando?`))
    var valor = Number(window.prompt(`Qual foi o valor que você deu para pagar o ${produto}`))
    var troco = valor - preco
    window.alert(`Você comprou um ${produto} que custou R$${preco},00. Deu R$${valor},00 em dinheiro e vai receber R$${troco},00 de troco. Volte Sempre!`)
}