function verificar() {
    var txtp = window.document.getElementById('txtpais')
    var pais = txtp.value
    res.innerHTML = `<p>Vivendo em ${pais}</p>`
    if (pais == 'Brasil') {
        res.innerHTML += `<p>Brasileiro!</p>`
    } else {
        res.innerHTML += `<p>Estrangeiro!</p>`
    }
}
