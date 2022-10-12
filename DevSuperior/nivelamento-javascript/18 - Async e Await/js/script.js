const cep = '01001000'

async function getJsonResponse(url) { //async faz a função se tornar Assíncrona.
    const response = await fetch(url) //await faz com que o fetch execute de forma Síncrona.
    //Ou seja, a função fica parada esperando chegar o resultado para só depois continuar sua execução.
    //Mas o restante do script "pula" a execução da função Assíncrona e continua sendo executado normalmente.
    
    const jsonBody = await response.json();
    return jsonBody
}

// getJsonResponse(`https://viacep.com.br/ws/${cep}/json/`)
//     .then(result => {
//         console.log(result)
// })

async function showCepData(cep) {
    const url = `https://viacep.com.br/ws/${cep}/json/`
    const json = await getJsonResponse(url)
    console.log(json)
}

showCepData(cep)

console.log("A")
console.log("B")