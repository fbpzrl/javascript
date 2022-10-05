function soma1(num1, num2) {
    return num1 + num2;
}

const soma2 = function(num1, num2) {
    return num1 + num2; 
}

const soma3 = (num1, num2) => { // O sinal => indica que é uma Arrow Function (ou Função Lambda)
    return num1 + num2; 
}

const soma4 = (num1, num2) => num1 + num2; // Arrow Function de forma resumida

const dobro1 = function(num) {
    return num * 2;
}

const dobro2 = num => num * 2; // Arrow Function de forma resumida (quando tem apenas 1 argumento, não precisa de parênteses)

// Funcao que não tem retorno definido, retorna undefined
function mostrarPreco(preco) {
    console.log(`PRECO = ${preco}`);
}

// Variaveis definidas dentro da função pertencem somente ao escopo da função
function areaCirculo(raio) {
    var pi = 3.14; //var: não utilizar mais. Só vaza escopo quando são Estruturas de Controle (if, else etc). Quando está dentro de uma função, mesmo o var não vaza o escopo.
    return pi * raio * raio;
}
//console.log(pi);

// Function hoisting: declaracoes de funções são "movidas" para cima da chamada pelo motor do JavaScript
teste(5);

function teste(x) {
    console.log("TESTE " + x);
}

// Funções de Alta Ordem. Funcoes podem ser passadas como argumento
function triplo(num) {
    return num * 3;
}

function aplicar(f, num) { // f = Função de Alta Ordem
    const result = f(num);
    console.log("RESULTADO = " + result);
}

aplicar(dobro1, 10);
aplicar(triplo, 10);