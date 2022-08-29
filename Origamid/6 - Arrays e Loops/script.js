// Crie uma array com os anos que o Brasil ganhou a copa
// 1959, 1962, 1970, 1994, 2002
let anosCampeoes = [1959, 1962, 1970, 1994, 2002]

// Interaja com a array utilizando um loop, para mostrar
// no console a seguinte mensagem, `O brasil ganhou a copa de ${ano}`
for (let i = 0; i < anosCampeoes.length; i++) {
    console.log(`O Brasil ganhou a Copa de ${anosCampeoes[i]}`)
}

// Interaja com um loop nas frutas abaixo e pare ao chegar em Pera
let frutas = ['Banana', 'Maçã', 'Pera', 'Uva', 'Melância']
for (let i = 0; i < frutas.length; i++) {
  if (frutas[i] == 'Pera'){
    console.log(frutas[i])
    break;
  }
  console.log(frutas[i])
}

// Coloque a última fruta da array acima em uma variável,
// sem remover a mesma da array.
let ultumaFruta = frutas[frutas.length - 1]
console.log(ultumaFruta)
