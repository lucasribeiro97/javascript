function iniciar() {
    let ano = Number(window.prompt('Em que ano você nasceu?'))
    let data = new Date()
    let year = data.getFullYear()
    let idade = year - ano
    res.innerHTML = `Quem nasceu em ${ano} vai completar <strong>${idade}</strong> anos em ${year}.`
}