const inputEl = document.querySelector('#validation-input');

function validColor() {
  if (inputEl.value.length === Number(inputEl.dataset.length)) {
    if (inputEl.classList.contains('invalid')) {
      inputEl.classList.remove('invalid');
    }
    inputEl.classList.add('valid');
  } else {
    inputEl.classList.add('invalid');
  }
}

inputEl.addEventListener('blur', validColor);
