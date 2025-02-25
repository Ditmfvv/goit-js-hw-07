const input = document.querySelector("#controls input");
const buttonCreate = document.querySelector("button[data-create]");
const buttonDestroy = document.querySelector("button[data-destroy]");
const boxes = document.querySelector("#boxes");

buttonCreate.addEventListener("click", createBoxes);
buttonDestroy.addEventListener("click", destroyBoxes);

function createBoxes() {
  const score = input.value;
  if (score < 1 || score > 100) {
    return;
  }

  let widthHeight = 30;
  const fragment = document.createDocumentFragment(); 

  for (let i = 1; i <= score; i++) {
    const div = document.createElement("div");
    div.style.width = `${widthHeight}px`;
    div.style.height = `${widthHeight}px`;
    div.style.backgroundColor = getRandomHexColor();
    widthHeight += 10;
    fragment.appendChild(div); 
  }

  boxes.innerHTML = ""; 
  boxes.appendChild(fragment); 

  input.value = ""; 
}

function destroyBoxes() {
  boxes.innerHTML = ""; 
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}