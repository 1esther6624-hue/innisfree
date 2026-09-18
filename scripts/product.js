/* 제품페이지js */
const popup = document.querySelector('#peoplePopup');
const popupClose = document.querySelector('#popupClose');

setTimeout(() => {
    popup.classList.add('show');
}, 900);

setTimeout(() => {
    popup.classList.remove('show');
}, 6500);

popupClose.addEventListener('click', () => {
    popup.classList.remove('show');
});