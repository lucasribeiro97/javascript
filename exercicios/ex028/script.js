function fatorar() {
    let n = Number(document.getElementById('txtn').value)

    res.innerHTML += `<h2>Calculando ${n}!</h2>`
    let c = n
    let fat = 1
    while (c > 1) {
        res.innerHTML += `${c} x `
        fat *= c
        c--
    }
    res.innerHTML += `1 = <strong>${fat.toLocaleString('pt-BR')}</strong>`
}