const salaJS = [7, 8, 8, 7, 10, 6.5, 4, 10, 7]
const salaJava = [6, 5, 8, 9, 5, 6]
const salaPython = [7, 3.5, 8, 9.5]

function calculaMedia(notasDaSala) {

    const somaDasNotas = notasDaSala.reduce((acumulador, nota) => { //O método Reduce itera (percorre) o Array somando todos os elementos. Ele recebe dois parâmetros: uma função callback e a posição inicial do Acumulador (no caso, 0).
        return acumulador + nota
    }, 0)

    return somaDasNotas / notasDaSala.length
}

calculaMedia(salaJS)
console.log(`A média da sala de JavaScript é ${calculaMedia(salaJS)}.`)
console.log(`A média da sala de Java é ${calculaMedia(salaJava)}.`)
console.log(`A média da sala de Python é ${calculaMedia(salaPython)}.`)

