const notas = [10, 6, 8, 5.5, 10]

console.log(notas)

notas.pop() //remove o último elemento do Array

console.log('Elementos restantes: ' + notas)

const media = (notas[0] + notas[1] + notas[2] + notas[3]) / notas.length

console.log(`A média é ${media}`)
