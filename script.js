const modalPage = document.getElementById('modal-page');
const modalClose = document.getElementById('modal-close');
const projectCards = document.querySelectorAll('.project-card');

projectCards.forEach(card => {
    card.addEventListener('click', openModal);
});

modalClose.addEventListener('click', closeModal);

function openModal() {
    const src = this.getAttribute('data-src');
    modalPage.style.display = 'flex';
    modalPage.querySelector('iframe').src = src;
}

function closeModal() {
    modalPage.style.display = 'none';
    modalPage.querySelector('iframe').src = '';
}