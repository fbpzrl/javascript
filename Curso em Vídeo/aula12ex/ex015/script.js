function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var txtAno = document.querySelector('#txtano')
    var resultado = document.querySelector('#resultado')

    console.log('txtAno = ' + txtAno)
    console.log('txtAno Length = ' + txtAno.value.length)

    if (txtAno.value.length == 0 || txtAno.value > ano) {
        window.alert('[ERRO] verifique os dados e tente novamente')
    }
    else {
        var radsex = document.getElementsByName('radsex')
        var idade = ano - txtAno.value
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        var genero = ''
        if (radsex[0].checked){
            genero = 'Homem'
            if (idade >= 0 && idade < 10) {
                img.setAttribute('src', 'img/menino.jpg')
            }
            else if (idade < 21) {
                img.setAttribute('src', 'img/homem-jovem.jpg')
            }
            else if (idade < 65) {
                img.setAttribute('src', 'img/homem-adulto.jpg')
            }
            else {
                img.setAttribute('src', 'img/homem-idoso.jpg')
            }
        }
        else {
            genero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                img.setAttribute('src', 'img/menina.jpg')
            }
            else if (idade < 21) {
                img.setAttribute('src', 'img/mulher-jovem.jpg')
            }
            else if (idade < 65) {
                img.setAttribute('src', 'img/mulher-adulta.jpg')
            }
            else {
                img.setAttribute('src', 'img/mulher-idosa.jpg')
            }
        }

        resultado.style.textAlign = 'center'
        resultado.innerHTML = `<em><strong>Detectamos ${genero} com ${idade} anos</em></strong>.<br><br>`
        resultado.appendChild(img)
    }
}