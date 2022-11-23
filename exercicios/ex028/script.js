function tabuada() {
    let n = Number(document.getElementById('txtn').value)
    res.innerHTML = `<p>Tabuada de <strong>${n}</strong></p>`
    if (n.length == 0) {
        window.alert('Por favor, digite um número!')
    } else {
        let c = 1
        while (c <= 10) {
            res.innerHTML += `${n} x ${c} = <strong>${n*c}</strong> <br>`
            c++
        }
    }
}