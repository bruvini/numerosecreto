const elementoChute = document.getElementById('chute')

window.SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;
const recognition = new SpeechRecognition();
recognition.lang = 'pt-Br'
recognition.start()
recognition.addEventListener("result", onSpeak)

function onSpeak(e) {
    chute = e.results[0][0].transcript
    exibeChute(chute)
    verificaChute(chute)

}

function exibeChute(chute) {
    elementoChute.innerHTML = `
    <div>Você disse:</div>
    <span class="box">${chute}</span>
    <div>o número secreto é maior <i class="fa-solid fa-up-long"></i></div>
    `
}