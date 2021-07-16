export default function Modal() {

    const modalWrapper = document.querySelector('.modal-wrapper')
    const cancelButton = document.querySelector('.button.cancel')

    cancelButton.addEventListener("click", close)

    function open() {
        // Atribuir classe active no Modal
        modalWrapper.classList.add("active")
    }
    function close() {
        // Remover classe active do Modal
        modalWrapper.classList.remove("active")
    }

    return{
        open,
        close
    }
}
