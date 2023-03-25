const listaTintas = document.querySelectorAll('.item')

function esconderTintas() {
    listaTintas.forEach(elemento => {
        elemento.setAttribute('hidden', '')
    });
}

function mostrarTintas() {
    listaTintas.forEach(elemento => {
        elemento.removeAttribute('hidden', '')
    })
}

const botaoPrincipal = document.querySelector('#botaoPrincipal')
const botaoRenovar = document.querySelector('#botaoRenovar')

botaoPrincipal.addEventListener('click', () => {
    esconderTintas()
    botaoPrincipal.innerHTML = 'Aluratintas esgotadas.'
})

botaoRenovar.addEventListener('click', () => {
    mostrarTintas()
    botaoPrincipal.innerHTML = 'Aluratintas em estoque <br> (comprar todas):'
})
