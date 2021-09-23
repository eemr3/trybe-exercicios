const btnClick = document.querySelector('#btn-click');
const h1Count = document.querySelector('h1');

let clickCount = 0;
btnClick.addEventListener('click', () => {
  clickCount += 1;
  h1Count.innerText = clickCount
})