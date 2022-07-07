function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('img')
    
    var data = new Date()
    var hora = data.getHours()
    hora = 19

    msg.innerHTML = `Agora são ${hora} horas.`

    if (hora < 12 && hora > 1) {
        img.src = 'img/manha.jpg'
        img.alt = 'Foto de uma manhã ensolarada'
        document.body.style.background = '#e2cd9f'
    }
    else if (hora >= 12 && hora <= 18) {
        img.src = 'img/tarde.jpg'
        img.alt = 'Foto de um barco no mar a tarde'
        document.body.style.background = '#b9846f'
    }
    else if (hora > 18 && hora <= 24) {
        img.src = 'img/noite.jpg'
        img.alt = 'Foto de uma noite de luar'
        document.body.style.background = '#515154'
    }
}