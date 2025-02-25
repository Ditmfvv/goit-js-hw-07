const inputName = document.querySelector("#name-input");
const nameOutput = document.querySelector("#name-output");

nameOutput.textContent = "Anonymous";

inputName.addEventListener("input", handleInput);

function handleInput(event) {
  const word = event.currentTarget.value.trim();
  if (!word) {
    nameOutput.textContent = "Anonymous";
    return;
  } else {
    nameOutput.textContent = word;
  }
}