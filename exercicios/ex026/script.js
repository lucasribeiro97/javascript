function contar() {
    let n1 = Number(document.getElementById('txtn1').value)
    let n2 = Number(document.getElementById('txtn2').value)
    let c

    res.innerHTML += `<p>Contando de ${n1} até ${n2}</p>`

    if (n1 < n2) {
        c = n1
        while (c <= n2) {
            res.innerHTML += `${c} \u{1F449}`
            c ++
        }
    } else if (n2 < n1) {
        c = n1
        while (c >= n2) {
            res.innerHTML += `${c} \u{1F449}`
            c --
        }
    } else {
        res.innerHTML += `Não é possível contar, pois o números são iguais`
    }

    res.innerHTML += `\u{1F3C1}`
}