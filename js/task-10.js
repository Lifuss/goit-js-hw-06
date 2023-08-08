//захотів попрактикувати патерн об'єкт посилань
const refs = {
  controls: document.querySelector('#controls'),
  boxes: document.querySelector('#boxes'),
  btnCreate: document.querySelector('[data-create]'),
  btnDestroy: document.querySelector('[data-destroy]'),
};

refs.btnCreate.addEventListener('click', () => {
  createBox(refs.controls.firstElementChild.value);
});
refs.btnDestroy.addEventListener('click', () => {
  refs.boxes.innerHTML = '';
  refs.controls.firstElementChild.value = '0';
  boxWidth = 20;
  boxHeight = 20;
});

let boxWidth = 20;
let boxHeight = 20;
function createBox(amount) {
  const arr = [];
  for (let i = 1; i < Number(amount) + 1; i++) {
    if (Number(amount) === 1 && refs.boxes.children.length > 0) {
      i = refs.boxes.children.length;
    }
    const divEl = document.createElement('div');
    divEl.style.width = `${(boxWidth += i * 10)}px`;
    divEl.style.height = `${(boxHeight += i * 10)}px`;
    divEl.style.border = '1px solid black';
    divEl.style.backgroundColor = `${getRandomHexColor()}`;
    arr.push(divEl);
  }
  refs.boxes.append(...arr);
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
