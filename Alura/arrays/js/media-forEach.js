const notas = [10, 6.5, 8, 7.5]

let somaDasNotas = 0

notas.forEach(function (nota) { //Função callback é uma função que é passada como parâmetro de outra função.
    somaDasNotas += nota
})

const media = somaDasNotas / notas.length

console.log(`A média das notas é ${media}.`)
