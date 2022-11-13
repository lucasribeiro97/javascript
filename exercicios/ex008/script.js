function botao() {
    var n1 = Number(window.prompt('Digite um número:'))
    var absoluto = Math.abs(n1)
    var inteiro = Math.trunc(n1)
    var proximo = Math.round(n1)
    var quadrada = Math.sqrt(n1)
    var cubica = Math.cbrt(n1)
    res.innerHTML = `<p>O número a ser analisado será o <strong>${n1}</strong></p>`
    res.innerHTML += `<p>O seu valor absoluto é ${absoluto}</p>`
    res.innerHTML += `<p>A sua parte inteira é ${inteiro}</p>`
    res.innerHTML += `<p>O valor inteiro mais próxima é ${proximo}</p>`
    res.innerHTML += `<p>A sua raíz quadrada é ${quadrada}</p>`
    res.innerHTML += `<p>A sua raiz cúbica é ${cubica}</p>`
    res.innerHTML += `<p>O valor de ${n1}² é ${Math.pow(n1, 2)}</p>`
    res.innerHTML += `<p>O valor de ${n1}³ é ${Math.pow(n1, 3)}</p>`
}