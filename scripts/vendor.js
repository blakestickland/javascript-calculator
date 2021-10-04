"use strict";

const calcDisplay = document.querySelector("#currentOperand");
const currentOperand = document.querySelector("#currentOperand");
const previousOperand = document.querySelector("#previousOperand");

const numberBtns = document.querySelectorAll(".button__number");
const operatorBtns = document.querySelectorAll(".button__operator");

const btn0 = document.querySelector("#btn0");
const btn1 = document.querySelector("#btn1");
const btn2 = document.querySelector("#btn2");
const btn3 = document.querySelector("#btn3");
const btn4 = document.querySelector("#btn4");
const btn5 = document.querySelector("#btn5");
const btn6 = document.querySelector("#btn6");
const btn7 = document.querySelector("#btn7");
const btn8 = document.querySelector("#btn8");
const btn9 = document.querySelector("#btn9");

const equalsBtn = document.querySelector("#btnEquals");
const subtractBtn = document.querySelector("#btnMinus");
const divideBtn = document.querySelector("#btnDivide");
const multiplyBtn = document.querySelector("#btnMultiply");
const addBtn = document.querySelector("#btnAdd");
const decimalPointBtn = document.querySelector("#btnDot");

const allClearBtn = document.querySelector("#btnAC");
const deleteBtn = document.querySelector("#btnDel");

function outputResult(text) {
  calcDisplay.textContent = text;
}