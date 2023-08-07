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
refs.btnDestroy.addEventListener('click', () => (refs.boxes.innerHTML = ''));

function createBox(amount) {
  const arr = [];
  for (let i = 0; i < amount; i++) {
    const divEl = document.createElement('div');
    divEl.style.width = `${30 + i * 10}px`;
    divEl.style.height = `${30 + i * 10}px`;
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
