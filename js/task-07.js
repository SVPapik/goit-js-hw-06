const rangerEl = document.querySelector('#font-size-control');
const textEl = document.querySelector('#text');

rangerEl.addEventListener('input', onRange);
function onRange(evt) {
  textEl.style.fontSize = `${evt.target.value}px`;
}
