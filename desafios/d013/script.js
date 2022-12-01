function calcular() {
    let nome = window.prompt('Qual é o nome do aluno?')
    let n1 = Number(window.prompt(`Primeira nota de ${nome}:`))
    let n2 = Number(window.prompt(`Segunda nota de ${nome}:`))
    let media = (n1 + n2) / 2
    saida.innerHTML = `<h2>Analisando a situação de ${nome}</h2>`
    saida.innerHTML += `<p>Com as notas ${n1} e ${n2}, a <strong>média é ${media}</strong></p>`
    if (media < 3) {
        saida.innerHTML += `<p>Com a média abaixo de 3,0, o aluno está <strong>REPROVADO</strong></p>`
    } else if (media >= 3 && media < 6) {
        saida.innerHTML += `<p>Com a média entre 3,0 e 6,0, o aluno está de <strong>RECUPERAÇÃO</strong></p>`
    } else {
        saida.innerHTML += `<p>Com a média acima de 6,0, o aluno está <strong>APROVADO</strong></p>`
    }
}