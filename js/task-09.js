function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const bodyEl = document.querySelector('body');
const changeColorBtnEl = document.querySelector('.change-color');
const textEl = document.querySelector('.color');

changeColorBtnEl.addEventListener('click', changeBgColor);

function changeBgColor() {
  const bgColor = `${getRandomHexColor()}`;
  bodyEl.style.backgroundColor = bgColor;
  textEl.textContent = bgColor;
}
