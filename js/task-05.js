const inputEl = document.querySelector('#name-input');
const outputEl = document.querySelector('#name-output');

inputEl.addEventListener('input', evt => {
  outputEl.textContent =
    evt.currentTarget.value === '' ? 'Anonymous' : evt.currentTarget.value;
});
