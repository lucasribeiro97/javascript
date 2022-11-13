let contador = 0

function contar() {
    contador = contador + 1
    res.innerHTML = `O contador está com <mark>${contador}</mark> cliques.`
}

function zerar() {
    contador = 0
    res.innerHTML = null
}