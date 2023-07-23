const notas = [7, 7, 8, 9]

const novasNotas = [...notas] //pega apenas o conteúdo do array notas. Se não fizer dessa forma, o JavaScript faz com que os dois arrays passem a apontar para a mesma referência na memória. Assim, sempre que um for alterado, o outro também será. E neste caso, não é isso que queremos.

novasNotas.push(10)

console.log(`As novas notas são ${novasNotas}`)
console.log(`As notas originais são ${notas}`)
