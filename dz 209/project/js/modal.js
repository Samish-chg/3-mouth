const modal = document.querySelector('.modal');
const modalTrigger = document.querySelector('#btn-get');
const closeModalBtn = document.querySelector('.modal_close');

const openModal = () => {
    modal.classList.add('show');
    modal.classList.remove('hide');
    document.body.style.overflow = 'hidden';
};

const closeModal = () => {
    modal.classList.add('hide');
    modal.classList.remove('show');
    document.body.style.overflow = '';
};

modalTrigger.onclick = openModal;
closeModalBtn.onclick = closeModal;

modal.onclick = (event) => {
    if (event.target === modal) {
        closeModal();
    }
};

document.onkeydown = (event) => {
    if (event.code === 'Escape') {
        closeModal();
    }
};

window.addEventListener('scroll', () => {
    const contentHeight = document.body.scrollHeight;
    const scrollPosition = window.scrollY + window.innerHeight;
    if (scrollPosition >= contentHeight) {
        openModal();
    }
});

window.addEventListener('load', () => {
    setTimeout(() => {
        openModal();
    }, 5000); // 10 секунд (10000 миллисекунд)
});