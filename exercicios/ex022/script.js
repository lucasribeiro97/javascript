function contar() {
    res.innerHTML += `<p>Contando de 1 até 10, marcandos os pares</p>`
    let c = 1
    while (c <= 10) {
        if (c % 2 == 0) {
            res.innerHTML += `<mark><strong>${c}</strong></mark>\u{1F449}`
        } else {
            res.innerHTML += `${c} \u{1F449}`
        }
        c++
    }

    res.innerHTML += `\u{1F3C1}`
}