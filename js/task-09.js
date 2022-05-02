const btnChangeColor = document.querySelector(".change-color");
const spanColor = document.querySelector(".color");

function onChangeColor() {
  document.body.style.backgroundColor = getRandomHexColor();
  spanColor.textContent = getRandomHexColor();
}

btnChangeColor.addEventListener("click", onChangeColor);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
