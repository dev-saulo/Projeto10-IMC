//Estrutura de dados
export const Modal = {
    //Propriedade   valor
    wrapper: document.querySelector('.modal-wrapper'),
    message: document.querySelector('.modal .title span'),
    buttonClose: document.querySelector('.modal button.close'),

    open() {
        Modal.wrapper.classList.add('open')
    },
    close() {
        Modal.wrapper.classList.remove('open')
    }
}

Modal.buttonClose.onclick = () => {
    Modal.close()
}


window.addEventListener('keydown', handleKeydown)

function handleKeydown(event) {
  //console.log(event.key); registra o botão que foi digitado.

    if (event.key === 'Escape') {
        Modal.close()
    }
}