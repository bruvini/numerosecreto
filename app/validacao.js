function verificaChute(chute){
    const numero = +chute
    if (chuteInvalido(numero)) {
        
    }

    if (foraParametro(numero)) {
        
    }
}

function foraParametro(numero) {
    return numero > maiorValor || numero < menorValor;
}

function chuteInvalido(numero) {
    return Number.isNaN(numero);
}
