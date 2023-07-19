const nomes = ["Evaldo", "Mari", "Camis"];

// nomes.forEach(function (nome) {
//     console.log(nome)
// })

// nomes.forEach((nome) => { //Arrow Function
//     console.log(nome)
// })

function imprimeNome(nome) {
    console.log(nome)
}

nomes.forEach(imprimeNome) //não se usa parênteses quando uso uma função como argumento. Apenas passamos a referência (nome) dela.
