function verificaChute(chute){
    const numero = +chute
    if (chuteInvalido(numero)) {
        elementoChute.innerHTML += `<div>Valor Inválido</div>` 
    }

    if (foraParametro(numero)) {
        elementoChute.innerHTML += `<div>Número inválido: o número secreto precisa estar entre ${menorValor} e ${maiorValor}</div>`
    }

    if (numero === numeroSecreto) {
        document.body.innerHTML = `
        <h2>Parabéns, você acertou!</h2>
        <h3>O número secreto era ${numeroSecreto}</h3>
        `
    }
}

function foraParametro(numero) {
    return numero > maiorValor || numero < menorValor;
}

function chuteInvalido(numero) {
    return Number.isNaN(numero);
}
