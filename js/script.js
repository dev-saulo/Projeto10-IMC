import { Modal } from './modal.js'
import { AlertError } from './alert-error.js'
import { IMC, notNumber } from './utils.js'

// Variáveis
const form = document.querySelector('form')
const inputWeight = document.querySelector('#peso')
const inputHeight = document.querySelector('#altura')

//Fechar a janela de erro ao digitar no campo
//Evento é de nome input
inputWeight.oninput = () => AlertError.close()
inputHeight.oninput = () => AlertError.close()

form.onsubmit = function(event) {
    event.preventDefault()
    
    const peso = inputWeight.value 
    const altura = inputHeight.value 
    
    const showAlertError = notNumber(peso) || notNumber(altura)
    if (showAlertError) {
        AlertError.open()
        return;
    }

    AlertError.close()
    
    const result = IMC(peso, altura);
    displayResultMessagem(result)
}

function displayResultMessagem(result) {
    const message = `Seu IMC é de ${result}`
    
    Modal.message.innerText = message
    Modal.open()    
}













    //3 maneiras de criar e atribuir função a um evento
    // // form.onsubmit = function() {}
    
    // form.onsubmit = () => {}
    
    // form.onsubmit = handleSubmit
    // function handleSubmit () {}