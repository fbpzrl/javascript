/*var num = [5, 8, 2, 9, 3]
num[5] = 6
num.push(7) //inclui um elemento na última posição do array

console.log(`Nosso vetor é o ${num.sort()}. Ele tem ${num.length} elementos.`)
console.log('----------')

var valores = [8, 1, 7, 4, 2, 9]
console.log(`Nosso vetor é o ${valores}. Ele tem ${valores.length} elementos.`)

for (var pos = 0; pos < valores.length; pos++) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}

var valores = [8, 1, 7, 4, 2, 9]
for (var pos in valores) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}*/

var num = [5, 8, 2, 9, 3]
var pos = num.indexOf(9) //retorna o índice do valor informado. caso o valor não exista, retorna -1
if (pos == -1) {
    console.log('O valor não foi encontrado!')
}
else {
    console.log(`O valor 9 está na posição ${pos}.`)
}
