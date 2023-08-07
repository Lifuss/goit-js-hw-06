const btnDecrement = document.querySelector('[data-action="decrement"]');
const btnIncrement = document.querySelector('[data-action="increment"]');
const valueSpan = document.querySelector('#value');
let counterValue = 0;

btnDecrement.addEventListener(
  'click',
  () => (valueSpan.textContent = counterValue--)
);
btnIncrement.addEventListener(
  'click',
  () => (valueSpan.textContent = counterValue++)
);
