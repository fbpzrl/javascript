// REST: valores passados com virgula => array

function sum(...numbers) { //... = Operador REST. Transforma os argumentos separados por vírgula em um array.
    let total = 0;
    for (let i = 0; i < numbers.length; i++) {
        total = total + numbers[i];
    }
    return total;
}

const result1 = sum(2, 3, 10, 5);
console.log(result1);

const result2 = Math.max(2, 3, 10, 5);
console.log(result2);

// SPREAD: Faz o contrário do REST: Transforma um array em valores separados por vírgula.
const result3 = Math.max(4, 7, 2);
console.log(result3);

const myNumbers = [2, 3, 10, 5];

//const result4 = Math.max(myNumbers); // Nao funciona

const result4 = Math.max(...myNumbers); //... = Operador SPREAD. Transforma um array em valores separados por vírgula.
console.log(result4);

// SPREAD: objeto => membros separados por virgula

const item = {
    description: "Celular",
    price: 1499.99,
    quantity: 1
};

const cloneItem = { ...item };

const cloneItemPlus = { ...item, weigth: 10 };