
const inputEl = document.querySelector("#validation-input");
const dataLength = parseInt(inputEl.dataset.length);

inputEl.addEventListener("blur", checkLenght);

function checkLenght(event) {
    if (event.currentTarget.value.length === dataLength) {
        event.currentTarget.classList.remove("invalid")
        event.currentTarget.classList.add("valid");
    } else {
        event.currentTarget.classList.remove("valid");
        event.currentTarget.classList.add("invalid");
    }
}
