function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const inputEl = document.querySelector('#controls input');
const createBtnEl = document.querySelector('button[data-create]');
const removeBtnEl = document.querySelector('button[data-destroy]');
const boxesEl = document.querySelector('#boxes');

boxesEl.style.cssText = `
display: flex;
flex-wrap: wrap;
gap: 10px;
align-items: center;`;
let boxSize = 30;

function createBoxes(amount) {
  let boxes = '';

  for (let i = 0; i < amount; i += 1) {
    boxes += `<div style="width: ${boxSize}px; height: ${boxSize}px; background-color: ${getRandomHexColor()}; font-size: ${
      i + 8
    }px; display: flex; align-items: center; justify-content: center;">Box${
      i + 1
    }</div>`;
    boxSize += 10;
  }

  boxesEl.insertAdjacentHTML('afterbegin', boxes);
}

createBtnEl.addEventListener('click', () => createBoxes(inputEl.value));

function destroyBoxes() {
  boxesEl.innerHTML = '';
  boxSize = 30;
}

removeBtnEl.addEventListener('click', () => destroyBoxes());
