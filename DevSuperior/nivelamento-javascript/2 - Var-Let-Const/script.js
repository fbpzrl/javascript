const x = 10

if (x > 0) {
    var a = 100
    let b = 200
    const c = 300
    console.log("Imprimindo dentro do if:")
    console.log(a)
    console.log(b)
    console.log(c)
}

console.log("Imprimindo fora do if:")
console.log(a) // var "vazou" do escopo da estrutura condicional (if)
// console.log(b)
// console.log(c)

console.log("Imprimindo resultado do for:")
for (let i = 0; i < 5; i++) { // let não "vaza" do escopo
    console.log(i)
}

console.log(i)