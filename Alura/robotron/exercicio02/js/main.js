const botao = document.querySelector('#calcular')

botao.addEventListener('click', () => {
    fuiClicado();
})

const resultado = document.querySelector('h1.resultado')

function fuiClicado() {
    resultado.innerHTML = 'Fui clicado!'
}