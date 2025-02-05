const inputName = document.querySelector("#name-input");
const nameOutput = document.querySelector("#name-output");
// console.log(inputName);

inputName.addEventListener("input", handleInput);

function handleInput(event) {
  //   console.log(event.data);
  //   console.log(event.currentTarget.value);
  const word = event.currentTarget.value.trim();
  if (!word) {
    nameOutput.textContent = "Anonymous";
    return;
  } else {
    nameOutput.textContent = word;
  }

  //   const trimmedValue = inputName.value.trim();
  //   nameOutput.textContent = trimmedValue || "Anonymous";
}