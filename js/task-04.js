let counterValue =  0;
const decBtn = document.querySelector('button[data-action="decrement"]');
const incBtn = document.querySelector('button[data-action="increment"]');
const value = document.querySelector('#value')


const decValue = () => {
    counterValue -= 1;
    value.textContent = counterValue;
}

const incValue = () => {
    counterValue += 1;
    value.textContent = counterValue;
}

decBtn.addEventListener("click", decValue);
incBtn.addEventListener("click", incValue);