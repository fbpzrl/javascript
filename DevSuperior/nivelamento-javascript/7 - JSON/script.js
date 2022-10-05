const obj1 = {
    "name": "Computador",
    "price": 50.9,
    "due-date": "2025-04-15"
}

const obj2 = {
    name: "Computador",
    price: 50.9,
    "due-date": "2025-04-15"
}

const obj3 = {
    id: 53,
    date: "2021-10-20",
    items: [
        {
            description: "Celular",
            price: 1499.99,
            quantity: 1
        },
        {
            description: "Mouse",
            price: 100.0,
            quantity: 2
        }
    ],
    client: {
        name: "Maria Red",
        email: "maria@gmail.com",
        active: true
    }
};

console.log(obj1);
console.log(obj2);
console.log(obj3);

console.log(obj3.id);
console.log(obj3.client);
console.log(obj3.client.name);


//PARSE e STRINGIFY - O Json pode vir de uma requisição em forma de texto. Para que o JavaScript converta essa string para um Objeto JavaScript, deve ser feito o Parse.

const txt = `{"nome": "Computador", "price": 50.9, "due-date": "2025-04-15"}`; //Requisição em formato de texto simples (string).
const obj = JSON.parse(txt); //Converte a string em um Objeto Estruturado do JavaScript.

console.log(txt.name);
console.log(obj.nome);

const text = JSON.stringify(obj); //Converte o Objeto Estruturado JavaScript para um texto simples (string).