"use strict";
const DEFAULT_DISPLAY = 0;

outputResult(DEFAULT_DISPLAY);

let num1 = "";
let num2 = "";
let currentEquation = "";
let operator = "";


function checkNumPosition(button, operator, currentEquation, num1, num2) {
  if (!operator) {
    num1 += button.value;
    currentEquation = num1;
    outputResult(num1);
    console.log(`num1 is: ${num1}`);
  } else if (operator) {
    currentEquation = num2;
    outputResult(num1 + operator + num2);
    console.log(`num2 is: ${num2}`);
  }
  console.log(`operator is: ${operator}`);
}

function checkNumberLength(number) {
    if (number.length === 6) {
        alert("Cannot have more than 6 characters in number!");
        return;
    }
}
const checkDecimalPoint = (currentEquation, clickedNumBtn) => {
  if (currentEquation.includes(".") && clickedNumBtn === ".") {
    alert("Cannot have more than one decimal point.");
    return;
  }
};


function resetEquation() {
    num1 = "";
    num2 = "";
    currentEquation = "";
    operator = "";
    console.log("Clear Everything complete!");
    outputResult(DEFAULT_DISPLAY);
}

function selectNum(operator, num1, num2, clickedNumber) {
    if (!operator){
        num1 += clickedNumber.toString();
        currentEquation = num1;
        console.log("num1", num1);
        console.log("num2", num2);
    } else if (operator) {
        num2 += clickedNumber.toString();
        currentEquation = num1 + operator + num2;
        console.log("num1", num1);
        console.log("num2", num2);
    }
    console.log("currentEquation", currentEquation);
    outputResult(currentEquation);
}


numberBtns.forEach(button => 
    button.addEventListener(
        "click", () => {
            let clickedNumber = button.value;
            if (
              (clickedNumber === "." && !operator && num1.includes(".")) ||
              (clickedNumber === "." && operator && num2.includes("."))
            ) {
              alert("Clicked on dot more than once");
            } else if (!operator && num1.length < 10) {
              num1 += clickedNumber.toString();
              currentEquation = num1;
            } else if (operator && num2.length < 10) {
              num2 += clickedNumber.toString();
              currentEquation = num1 + operator + num2;
            } else {
              alert("Number is too long!");
            }

            outputResult(currentEquation);
        }
    )
);

operatorBtns.forEach(button => 
    button.addEventListener(
        "click", () => {
            if (!num1 && button.value === "-") {
                num1 += "-";
                currentEquation = num1;
                outputResult(currentEquation);
                return;
            } else if (operator) {
                alert("Cannot have more than one operator!");
                operator = button.value;
                return;
            } else {
                operator = button.value;
            }

            currentEquation = num1 + operator;
            console.log(currentEquation);
            outputResult(currentEquation);
        }
    )
);

const evaluate = () => {
    console.log("= operator");
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);
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
            break;
    }
    if (result.toString().includes(".")) {
        result = result.toFixed(8);
    }
    outputResult(result);
    num1 = result;
    num2 = "";
    operator = "";
    currentEquation = result;

}

equalsBtn.addEventListener("click", evaluate);
clearEverythingBtn.addEventListener("click", resetEquation);