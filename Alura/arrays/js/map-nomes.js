const nomes = ["ana Julia", "Caio vinicius", "BIA silva"]

// const nomesPadronizados = nomes.map((nome) => {
//     return nome.toUpperCase()
// })

const nomesPadronizados = nomes.map((nome) => nome.toUpperCase() // Quando tudo que a Arrow Function faz é retornar um valor, é possível omitir a palavra return e passar a instrução diretamente, como acima.
)

console.log(nomesPadronizados)
