let counterValue = 0;
const decBtnEl = document.querySelector('button[data-action="decrement"]');
const incBtnEl = document.querySelector('button[data-action="increment"]');
const valueEl = document.querySelector('#value');

const decValue = () => {
  counterValue -= 1;
  valueEl.textContent = counterValue;
};

const incValue = () => {
  counterValue += 1;
  valueEl.textContent = counterValue;
};

decBtnEl.addEventListener('click', decValue);
incBtnEl.addEventListener('click', incValue);
