function verificaChute(chute){
    const numero = +chute
    if (chuteInvalido(numero)) {
        elementoChute.innerHTML += `<div>Valor Inválido</div>` 
        return
    }

    if (foraParametro(numero)) {
        elementoChute.innerHTML += `<div>Número inválido: o número secreto precisa estar entre ${menorValor} e ${maiorValor}</div>`
        return
    }

    if (numero === numeroSecreto) {
        document.body.innerHTML = `
        <h2>Parabéns, você acertou!</h2>
        <h3>O número secreto era ${numeroSecreto}</h3>
        `
    } else if (numero < numeroSecreto) {
        elementoChute.innerHTML += `
        <div>o número secreto é maior <i class="fa-solid fa-up-long"></i></div>
        `
    } else {
        elementoChute.innerHTML += `
        <div>o número secreto é menor <i class="fa-solid fa-down-long"></i></div>
        `
    }
}

function foraParametro(numero) {
    return numero > maiorValor || numero < menorValor;
}

function chuteInvalido(numero) {
    return Number.isNaN(numero);
}
