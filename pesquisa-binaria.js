function pesquisa_binaria(lista, itemParaEncontrar) {
    let baixo = 0
    let alto = lista.length

    while(baixo <= alto) {
        const meio = Math.floor((baixo + alto) / 2)
        const chute = lista[meio]

        if(chute === itemParaEncontrar) {
            return meio
        }

        if(chute > itemParaEncontrar) {
            alto = meio - 1
        } else {
            baixo = meio + 1
        } 
    }
    return null
}

const lista = [1,3,5,7,9]
console.log(pesquisa_binaria(lista, 3))