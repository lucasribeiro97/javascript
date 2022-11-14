function converter() {
    var metro = Number(window.prompt('Digite uma distância em metros (m)'))
    var km = metro / 1000
    var hm = metro / 100
    var dam = metro / 10
    var dm = metro * 10
    var cm = metro * 100
    var mm = metro * 1000
    res.innerHTML = `<h2><strong>A distância de ${metro} metros, corresponde a...</strong></h2>`
    res.innerHTML += `<p>${km.toFixed(3)} quilêmtros (Km)</p>`
    res.innerHTML += `<p>${hm.toFixed(3)} hectômetros (Hm)</p>`
    res.innerHTML += `<p>${dam.toFixed(3)} decâmtros (Dam)</p>`
    res.innerHTML += `<p>${dm.toFixed(3)} decímetros (dm)</p>`
    res.innerHTML += `<p>${cm.toFixed(3)} centímetros (cm)</p>`
    res.innerHTML += `<p>${mm.toFixed(3)} milímetros (mm)</p>`
}