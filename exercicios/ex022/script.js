function contar() {
    res.innerHTML += `<p>Contando de 1 até 10</p>`
    for (c = 1; c <= 10; c = c + 1) {
        res.innerHTML += `${c} \u{1F449}`
    }
    res.innerHTML += `\u{1F3C1}`
}