const input = document.querySelector("#controls input");
const buttonCreate = document.querySelector("button[data-create]");
const buttonDestroy = document.querySelector("button[data-destroy]");
const boxes = document.querySelector("#boxes");

// input.addEventListener("input", handleInput);
buttonCreate.addEventListener("click", createBoxes);
buttonDestroy.addEventListener("click", destroyBoxes);

function createBoxes(amount) {
  // console.log(amount);
  // console.log(input.value);
  const score = input.value;
  if (score < 1 || score > 100) {
    return;
  }

  let widthHeight = 30;
  boxes.innerHTML = "";

  for (let i = 1; i <= score; i += 1) {
    // `<div width="${widthHeight}" height="${widthHeight}"></div>`;
    const div = document.createElement("div");
    div.style.width = `${widthHeight}px`;
    div.style.height = `${widthHeight}px`;
    div.style.backgroundColor = getRandomHexColor();
    widthHeight += 10;
    boxes.appendChild(div);
  }
}

function destroyBoxes() {
  boxes.innerHTML = "";
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}