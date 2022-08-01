var txtnumero = document.querySelector('input#txtnumero')
var select = document.querySelector('select#sellista')
var valores = []

function adicionar() {
    
    if (txtnumero.value.length > 0 && txtnumero.value >= 1 && txtnumero.value <= 100) {
        
        var numero = Number(txtnumero.value)

        if (inList(numero, valores)) {
            alert('Valor inválido ou já encontrado na lista.')
        }
        else {
            valores.push(numero)
            var item = document.createElement('option')
            item.text = `${numero}`
            item.value = `select${1}`
            select.appendChild(item)
        }
    }
    else {
        alert('Por favor, digite um número entre 1 e 100!')
    }
}

function inList(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true
    }
    else {
        return false
    }
}

function finalizar() {

    var relatorio = document.querySelector('div#relatorio')

    var qtdNumeros = valores.length

    var maior = valores[0]
    var menor = valores[0]
    var soma = 0
    var media = 0
    
    for (var posicao in valores) {
        soma += valores[posicao]
        if (valores[posicao] > maior) {
            maior = valores[posicao]
        }
        
        if (valores[posicao] < menor) {
            menor = valores[posicao]
        }
    }

    media = soma / valores.length

    relatorio.innerHTML += `<p>Ao todo, temos ${qtdNumeros} número(s) cadastrado(s).</p>`
    relatorio.innerHTML += `<p>O maior valor informado foi ${Number(maior)}.</p>`
    relatorio.innerHTML += `<p>O menor valor informado foi ${menor}.</p>`
    relatorio.innerHTML += `<p>Somando todos os valores, temos ${soma}.</p>`
    relatorio.innerHTML += `<p>A média dos valores digitados é ${media.toFixed(2)}.`
}