const inputLine = document.querySelector('#font-size-control');
const textEl = document.querySelector('#text');

function fontMagic() {
  textEl.style.fontSize = `${Number(inputLine.value)}px`;
}
// Добавив початкове значення шрифту, бо не гарно коли воно різко міняється на події(треба БІЛЬШЕ транзішнів)
textEl.style.fontSize = `${Number(inputLine.value)}px`;

inputLine.addEventListener('input', fontMagic);
