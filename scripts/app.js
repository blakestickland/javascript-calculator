"use strict";

function numberBtnHandler(clickedNumber) {
    let currOp = currentOperand.textContent;
    if (currOp.length > 10) {
        limitNumberLength(currOp);
    } else {
        currentOperand.textContent += clickedNumber;
    }
}

function limitNumberLength(numAsString) {
    alert("This number has been limited to the 10 most significant bits.");
    currentOperand.textContent = numAsString.slice(0, 10);    
}

numberBtns.forEach(button => 
    button.addEventListener("click", () => 
        { numberBtnHandler(button.value) }
    )
);
    
function operatorBtnHandler(clickedOperator) {
    let currOp = currentOperand.textContent;
    if (clickedOperator === "-" && !currOp) {
        currentOperand.textContent = "-";
    } else {
        previousOperand.textContent = currentOperand.textContent + clickedOperator;
        currentOperand.textContent = "";
    }
}
operatorBtns.forEach(button => 
    button.addEventListener("click", () => 
        { operatorBtnHandler(button.value) }
    )
);

function equalsBtnHandler() {
    const prevOpTxt = previousOperand.textContent;
    const prevOp = prevOpTxt
        .slice(0, -1);
    const operator = prevOpTxt
        .charAt(prevOpTxt.length - 1);
    const currOp = currentOperand.textContent;

    const num1 = +prevOp;
    const num2 = +currOp;
    let result;
    switch (operator) {
      case "+":
        result = num1 + num2;
        break;
      case "-":
        result = num1 - num2;
        break;
      case "*":
        result = num1 * num2;
        break;
      case "/":
        result = num1 / num2;
        break;

      default:
        console.log("Default case in switch");
        break;
    }
    const stringifiedResult = result.toString();
    if (stringifiedResult.length > 10) {
        limitNumberLength(stringifiedResult);
    } else {
        currentOperand.textContent = stringifiedResult;
    }
}

equalsBtn.addEventListener("click", equalsBtnHandler);

function allClear() {
    currentOperand.textContent = "";
    previousOperand.textContent = "";
}

allClearBtn.addEventListener("click", allClear);

function deleteNumber() {
    const currOp = currentOperand.textContent;
    if (currOp) {
        return currentOperand.textContent = currOp.slice(0, -1);
    } else {
        return alert("Nothing to delete.");
    }
}

deleteBtn.addEventListener("click", deleteNumber);

