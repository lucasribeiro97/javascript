function converter() {
    var temp = Number(window.prompt('Digite uma temperatura em ºC (Celsius)'))
    var kelvin = temp + 273.15
    var fahrenheit = (temp * 1.8) + 32
    res.innerHTML = `<h2><strong>A temperatura de ${temp}ºC, corresponde a...</strong></h2>`
    res.innerHTML += `<p>${kelvin.toFixed(2)}ºK (Kelvin)</p>`
    res.innerHTML += `<p>${fahrenheit.toFixed(2)}ºF (Fahrenheit)</p>`
}