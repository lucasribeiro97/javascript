function reajustar() {
    var nome = window.prompt('Qual é o nome do funcionário?')
    var salario = Number(window.prompt(`Qual é o salário de ${nome}?`))
    var porcentagem = Number(window.prompt(`O salário de ${nome} vai ser reajustado em qual porcentagem?`)) 
    var aumento = salario * (porcentagem/100)
    var salario2 = salario + aumento
    res.innerHTML = `<h2><strong>${nome} recebeu um aumento salarial!</strong></h2>`
    res.innerHTML += `<p>O salário atual era ${salario.toLocaleString('pt-BR', {style: 'currency', currency:'BRL'})}.</p>`
    res.innerHTML += `<p>Com um aumento de ${porcentagem}%, o salário vai aumentar ${aumento.toLocaleString('pt-BR', {style: 'currency', currency:'BRL'})} no próximo mês.</p>`
    res.innerHTML += `<p>E a partir daí, ${nome} vai passar a ganhar ${salario2.toLocaleString('pt-BR', {style: 'currency', currency:'BRL'})}.</p>`
}