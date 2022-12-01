function calcular() {
    let ano = Number(window.prompt('Qual é o ano que você quer verificar?'))
    if (ano%4 == 0 && ano%100 != 0) {
        res.innerHTML = `<p>O ano de ${ano} <mark><strong>É BISSEXTO!</strong></mark></p>`
    } else if (ano%4 != 0 && ano%400 != 0) {
        res.innerHTML = `<p>O ano de ${ano} <mark><strong>NÃO É BISSEXTO!</strong></mark></p>`
    } else if (ano%4 != 0 && ano%400 == 0) {
        `<p>O ano de ${ano} <mark><strong>É BISSEXTO!</strong></mark></p>`
    }
}