const ranger = document.querySelector("#font-size-control")
const spanText = document.querySelector("#text")

ranger.addEventListener("input", onRange);
function onRange (evt) {
    spanText.style.fontSize = `${evt.target.value}px`
}


