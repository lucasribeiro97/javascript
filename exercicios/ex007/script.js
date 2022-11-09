function botao() {
    var nome = window.prompt('Qual é o nome do aluno?')
    var n1 = Number(window.prompt(`Qual a primeira nota de ${nome}?`))
    var n2 = Number(window.prompt(`Além de ${n1}, qual foi a outra nota de ${nome}?`))
    var media = (n1 + n2) / 2
    res.innerHTML = `Calculando a média final de <mark>${nome}.</mark> <p>A notas obtidas foram <mark>${n1} e ${n2}.</mark></p> <p>A média final será <mark>${media}.</mark></p>`
}