function contar() {

    var txtinicio = document.querySelector('#txtinicio')
    var txtfim = document.querySelector('#txtfim')
    var txtpasso = document.querySelector('#txtpasso')
    var resultado = document.querySelector('#resultado')

    if (txtinicio.value.length == 0 || txtfim.value.length == 0 || txtpasso.value.length == 0) {
        alert('[ERRO] Faltam dados!')
        resultado.innerHTML = '<p>Impossível contar!</p>'
    }
    else {
        resultado.innerHTML = '<p>Contando:</p>'
        var i = Number(txtinicio.value)
        var f = Number(txtfim.value)
        var p = Number(txtpasso.value)

        if (p <= 0) {
            alert('Passo inválido! Considerando passo igual a 1.')
            p = 1
        }

        if (i < f) { //Contagem crescente
            for (var c = i; c <= f; c += p) {
                resultado.innerHTML += `${c} `
                resultado.innerHTML += '&#128073'
            }
        }
        else { //Contagem regressiva
            for (var c = i; c >= f; c -= p) {
                resultado.innerHTML += `${c} `
                resultado.innerHTML += '&#128073'
            }
        }

        resultado.innerHTML += '&#x1F6A9'
    }
}