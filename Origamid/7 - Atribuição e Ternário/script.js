// Some 500 ao valor de scroll abaixo,
// atribuindo o novo valor a scroll
let scroll = 1000;
scroll += 500;
console.log(scroll)

// Atribua true para a variável darCredito,
// caso o cliente possua carro e casa.
// E false caso o contrário.
let possuiCarro = true;
let possuiCasa = false;
let darCredito = true;

darCredito = possuiCarro && possuiCasa ? 'Dar crédito ao Cliente' : 'Negar Crédito ao Cliente'
console.log(darCredito)