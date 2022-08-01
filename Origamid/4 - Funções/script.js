// Crie uma função para verificar se um valor é Truthy
function isTruthy(valor) {
    if (valor) {
        console.log(`${valor} é Truthy`)
    }
    else {
        console.log(`${valor} é Falsy`)
    }
}
isTruthy(10)

// Crie uma função matemática que retorne o perímetro de um quadrado
// lembrando: perímetro é a soma dos quatro lados do quadrado
function perimetroQuadrado(lado) {
    return lado * 4
}
console.log('O perímetro é ' + perimetroQuadrado(3))

// Crie uma função que retorne o seu nome completo
// ela deve possuir os parâmetros: nome e sobrenome
function nomeSobrenome(nome, sobrenome) {
    return nome + ' ' + sobrenome
}
console.log(nomeSobrenome('Fabio', 'Piazzarollo'))

// Crie uma função que verifica se um número é par
function isEven(numero) {
    if (numero % 2 == 0) {
        console.log(`${numero} é par`)
    }
    else {
        console.log(`${numero} é ímpar`)
    }
}
isEven(10)

// Crie uma função que retorne o tipo de
// dado do argumento passado nela (typeof)
function tipoDado(valor) {
    return console.log(`${valor} é do tipo ${typeof valor}`)
}
tipoDado('10')

// addEventListener é uma função nativa do JavaScript
// o primeiro parâmetro é o evento que ocorre e o segundo o Callback
// utilize essa função para mostrar no console o seu nome completo
// quando o evento 'scroll' ocorrer.
/*
addEventListener('scroll', function() {
    console.log('Fabio Bissoli Piazzarollo')
})
*/
//Corrija o erro abaixo
var totalPaises = 193;
function precisoVisitar(paisesVisitados) {
    
    return `Ainda faltam ${totalPaises - paisesVisitados} países para visitar`;
  }
  function jaVisitei(paisesVisitados) {
    return `Já visitei ${paisesVisitados} do total de ${totalPaises} países`;
  }
  console.log(precisoVisitar(20));
  console.log(jaVisitei(20));