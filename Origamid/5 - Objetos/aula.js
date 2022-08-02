var pessoa = {
    nome: 'Fabio',
    idade: 37
}
console.log(pessoa.nome)

var quadrado = {
    lados: 4,
    area(lado) {
        return lado * lado
    },
    perimetro(lado) {
        return this.lados * lado
    }
}
console.log(quadrado.area(5))
console.log(quadrado.perimetro(5))
console.table(quadrado)