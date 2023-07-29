const modal = document.querySelector('.modal');
const modalTrigger = document.querySelector('#btn-get');
const closeModalBtn = document.querySelector('#closeModal')

// console.log(modal)
// console.log(modalTrigger)
// console.log(closeModalBtn)

const openModal = () => {
    modal.style.display = 'block'
    document.body.style.overflow = 'hidden';
};

const closeModal = () => {
    modal.style.display = 'none'
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

const scrollListener = () => {
    const contentHeight = document.body.scrollHeight - 1;
    const scrollPosition = window.scrollY + window.innerHeight;
    if (contentHeight <= scrollPosition) {
        openModal();
        document.removeEventListener('scroll', scrollListener)
    }
}

document.addEventListener('scroll', scrollListener);

setTimeout(() => {
    openModal();
}, 10000); // 10 секунд (10000 миллисекунд)


//post data
// const form =document.querySelector("form")
// const postData = () => {
//     form.addEventListener( 'submit',
//     )
// }