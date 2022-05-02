const inputName = document.querySelector("#name-input");
const outputName = document.querySelector("#name-output");


inputName.addEventListener("input", onInput);

function onInput(event) {
    outputName.textContent = event.currentTarget.value;
    if (event.currentTarget.value === "") {
         return  outputName.innerHTML = "Anonymous";
    } event.currentTarget.value;
}
