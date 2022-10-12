/* PROMISE
*  É um objeto que pode executar uma função Assíncrona e mudar o seu estado (PromiseState) 
   de Pendente (pending) para Resolvido (fulfilled) ou Rejeitado (rejected) depois de algum
   tempo.
   Promise é um modelo de execução muito utilizado para fazer operações Assíncronas (Requisições).
*/

function f(g, h) {
    
    setTimeout(() => { //setTimeout faz a função executar de forma Assíncrona
        if (10 > 0) {
            g("P")
        }
        else {
            h("Q")
        }
    }, 3000)
}

const minhaPromise = new Promise(f)

minhaPromise
.then(valor => {
    console.log("Resolveu com o valor " + valor)
})
.catch(valor => {
    console.log("Rejeitou com o valor " + valor)
})

console.log(minhaPromise)