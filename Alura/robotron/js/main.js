const subtrair = document.querySelector('#subtrair')
const somar = document.querySelector('#somar')
const parte = document.querySelector('#braco')

const controle = document.querySelectorAll('.controle-ajuste')
controle.forEach( (elemento) => {
    elemento.addEventListener('click', (evento) => {
        manipulaDados(evento.target.textContent, parte)
    })
})

function manipulaDados(operacao, parte) {
    if (operacao === '+') {
        parte.value = parseInt(parte.value) + 1
    }
    else if (parseInt(parte.value) > 0) {
        parte.value = parseInt(parte.value) - 1
    }
}