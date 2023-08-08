const formEl = document.querySelector('.login-form');

formEl.addEventListener('submit', formExecute);
const newUser = {};

function formExecute(event) {
  const {
    elements: { email, password },
  } = formEl;
  event.preventDefault();
  if (!isFormValidate(email.value, password.value)) {
    return alert('Всі поля повинні бути заповнені');
  }
  const formData = new FormData(event.currentTarget);
  formData.forEach((value, key) => (newUser[key] = value));

  console.log(newUser);
  formEl.reset();
}

const isFormValidate = function (email, password) {
  if (email === '' || password === '') {
    return false;
  }
  return true;
};
