let counterValue = 0;
let numberValue = document.querySelector("#value")
const addClick = document.querySelector('[data-action="increment"]');
const removeClick = document.querySelector('[data-action="decrement"]');


function onTargetBtnClick() {
    
}

addClick.addEventListener("click", () => {
    numberValue.addEventListener("click", onTargetBtnClick);
    counterValue += 1;
    numberValue.textContent = counterValue;
});

removeClick.addEventListener("click", () => {
    numberValue.addEventListener("click", onTargetBtnClick);
    counterValue -= 1;
    numberValue.textContent = counterValue;
});
