const notas = [10, 9.5, 8, 7, 6]

const notasAtualizadas = notas.map((nota) => { //Map é usado para reescrever Arrays
    return nota + 1 >= 10 ? 10 : nota + 1
})

console.log(notasAtualizadas)
