const refs = {
  inputValue: document.querySelector("input"),
  createBtn: document.querySelector("[data-create]"),
  destroyBtn: document.querySelector("[data-destroy]"),
  divBox: document.querySelector("#boxes"),
};

refs.createBtn.addEventListener("click", (event) => {
  createBoxes(event);
});

let firstDivWidth = 30;
let firstDivHeight = 30;
function createBoxes(amount) {
  amount = refs.inputValue.value;

  for (let i = 0; i < amount; i++) {
    const newDiv = document.createElement("div");
    if (firstDivWidth > newDiv.style.width) {
      firstDivWidth += 10;
      firstDivHeight += 10;
    } else {
      
      firstDivWidth = 30;
      firstDivHeight = 30;
      const firstDiv = document.createElement("div");
      firstDiv.style.width = `${firstDivWidth}px`;
      firstDiv.style.height = `${firstDivHeight}px`;
      firstDiv.style.backgroundColor = getRandomHexColor();
    
      refs.divBox.append(firstDiv);
    }
    newDiv.style.width = `${firstDivWidth}px`;
    newDiv.style.height = `${firstDivHeight}px`;
    newDiv.style.backgroundColor = getRandomHexColor();
    refs.divBox.append(newDiv);
    
  }
}

refs.destroyBtn.addEventListener("click", (event) => {
  destroyBoxes(event);
});

function destroyBoxes() {
  
  for (let i = 0; i < refs.divBox.children.length; i++) {
    console.log([i]);
    refs.divBox.children[i].remove();
    [i] = [i - 1];
  }
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}