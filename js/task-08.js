const form = document.querySelector('.login-form');

form.addEventListener('submit', handleSubmit);

function handleSubmit(evt) {
  evt.preventDefault();
  const {
    elements: { email, password },
  } = evt.currentTarget;

  if (email.value === '' || password.value === '') {
    alert('Заповніть всі поля, будь ласка!');
  } else {
    const formObj = { Email: email.value, Password: password.value };
    console.log(formObj);
  }

  evt.currentTarget.reset();
}
