function buscaMenor(array) {
    let menor = array[0]
    let menorIndice = 0
    for(let i = 1; i < array.length; i++) {
        if(array[i] < menor) {
            menor = array[i]
            menorIndice = i
        }
    }
    return menorIndice
}

function ordenacaoPorSelecao(array) {
    let novoArray = []
    let length = array.length
    for(let i = 0; i < length; i++) {
        let menor = buscaMenor(array)
        novoArray.push(array[menor])
        array.splice(menor, 1)
    }
    return novoArray
}


console.log(ordenacaoPorSelecao([5, 3, 6, 2, 10]))