/**CONSTANTES*/
const menorValor = 1
const maiorValor = 1000
const numeroSecreto = gerarNumero()
const menorElemento = document.getElementById('menor-valor')
const maiorElemento = document.getElementById('maior-valor')

/**FUNÇÕES*/
function gerarNumero() {
    return parseInt(Math.random() * maiorValor + 1)
}

/**EVENTOS */
menorElemento.innerHTML = menorValor
maiorElemento.innerHTML = maiorValor