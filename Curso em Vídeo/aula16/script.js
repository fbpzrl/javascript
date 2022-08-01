function parImpar(n) {
    if (n % 2 == 0) {
        return 'Par!'
    }
    else {
        return 'Ímpar!'
    }
}
console.log(parImpar(4))

function soma(n1 = 0, n2 = 0) { //Se n não for informado, a função considera o parâmetro como 0
    return n1 + n2
}
console.log(`Soma = ${soma(3, 4)}`)

var v = function(x) {
    return x * 2
}
console.log(`v = ${v(5)}`)

function fatorial(n) {
    var fat = 1
    for (var c = n; c > 1; c--) {
        fat *= c
    }
    return fat
}
console.log(`Fatorial ${5} = ${fatorial(5)}`)

function fatorialRecursivo(n) {
    if (n == 1) {
        return 1
    }
    else {
        return n * fatorial(n - 1)
    }
}
console.log(`Fatorial ${5} = ${fatorial(5)}`)