function tocaSom (seletorAudio) {
    const elemento = document.querySelector(seletorAudio)

    console.log(elemento)

    if (elemento && elemento.localName === 'audio') {
        elemento.play()
    }
    else {
        console.log('Elemento não encontrado ou seletor inválido')
    }
}

const listaDeTeclas = document.querySelectorAll('.tecla')

for (let contador = 0; contador < listaDeTeclas.length; contador++) {
    const tecla = listaDeTeclas[contador]
    const instrumento = tecla.classList[1] //acessa a segunda classe da lista de classes

    tecla.onclick = function () { // função anônima (a palavra function é opcional)
        tocaSom(`#som_${instrumento}`) //template string
    }

    tecla.onkeydown = function (evento) {
        
        if (evento.code === 'Space' || evento.code === 'Enter') {
            tecla.classList.add('ativa')
        }
            
    }

    tecla.onkeyup = function () {
        tecla.classList.remove('ativa')
    }
}
/* é uma boa prática sempre deixar uma linha vazia ao final dos arquivos, pois favorece o uso futuro de
 * ferramentas que transformam / ofuscam o código
*/
