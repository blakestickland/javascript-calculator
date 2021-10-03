"use strict";
const DEFAULT_DISPLAY = 0;

const currentDisplay = DEFAULT_DISPLAY;

function getUserNumberInput() {
    return parseInt()
}

let num1 = 0;
let num2 = 0;
// calcDisplay.textContent = num;
let userNumber = "";

numberBtns.forEach(numberBtn => 
    numberBtn.addEventListener(
        "click", () => {
            let clickedBtn = numberBtn.innerText;
            console.log(clickedBtn);
            userNumber += clickedBtn;
            console.log(userNumber);
            outputResult(userNumber);
        }
    )
);

operatorBtns.forEach(button => 
    button.addEventListener(
        "click", () => 
        console.log(numberBtn.innerText)
    )
);

// addBtn.addEventListener("click", add);
// subtractBtn.addEventListener("click", subtract);
// multiplyBtn.addEventListener("click", multiply);
// divideBtn.addEventListener("click", divide);