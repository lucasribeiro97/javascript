function contar() {
    let num = document.getElementById('txtn')
    let n = num.value
    res.innerHTML += `<p>Contando de 0 até ${n}</p>`
    for (c = 0; c <= n; c = c + 1) {
        res.innerHTML += `${c} \u{1F449}`
    }
    res.innerHTML += `\u{1F3C1}`
}