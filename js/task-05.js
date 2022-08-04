const nameInput = document.querySelector("#name-input");
const nameOutput = document.querySelector("#name-output");

nameInput.addEventListener("input", (evt) => {
  nameOutput.textContent =
    evt.currentTarget.value === "" ? "Anonymous" : evt.currentTarget.value;
});
