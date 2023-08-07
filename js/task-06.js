const inputEl = document.querySelector('#validation-input');

function validColor() {
  if (inputEl.value.length < Number(inputEl.dataset.length)) {
    inputEl.classList.add('invalid');
  } else {
    // додаткова перевірка, бо якщо ввести від початку 6+ цифр replace не спрацює бо нема що замінити
    if (inputEl.classList.contains('invalid')) {
      inputEl.classList.replace('invalid', 'valid');
    }
    inputEl.classList.add('valid');
  }
}

inputEl.addEventListener('blur', validColor);
