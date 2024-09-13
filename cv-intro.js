const modal = document.querySelector(".cv-modal");
const trigger = document.querySelector(".cv-intro-open");
const closeModal = document.querySelector(".close-modal");

function toggleModal() {
    modal.classList.toggle("open-cv-modal-intro");
}

function windowOnClick(event) {
    if (event.target === modal) {
        toggleModal();
    }
}



trigger.addEventListener("click", toggleModal);
closeModal.addEventListener("click", toggleModal);
window.addEventListener("click", windowOnClick);