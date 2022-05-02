const fontSizeBar = document.querySelector("#font-size-control");
const textValue = document.querySelector("#text");

fontSizeBar.addEventListener("input", textChange);

function textChange(event){
    textValue.style.fontSize = event.currentTarget.value + "px";
}