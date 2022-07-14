function gerar() {
    var txtnumero = document.querySelector('#txtnumero')
    var select = document.querySelector('#seltabuada')

    if (txtnumero.value.length == 0) {
        alert('Por favor, digite um número!')
    }
    else {
        select.innerHTML = ''
        var numero = Number(txtnumero.value)
    }

    for (var i = 1; i <= 10; i++ ) {
        var item = document.createElement('option')
        item.text = `${numero} x ${i} = ${numero * i}`
        item.value = `select${i}`
        select.appendChild(item)
    }
}