const numberButtons = document.querySelectorAll('.btn-number');
const operatorButtons = document.querySelectorAll('.btn-op');
const equalsButton = document.getElementById('equals');
const clearButton = document.getElementById('clear');
const deleteButton = document.getElementById('delete');
const dotButton = document.getElementById('dot');
const display = document.getElementById('display');

let firstOperand = "";
let secondOperand = "";
let currentOperation = null;
let shouldResetScreen = false;

window.addEventListener("keydown", setInput);
equalsButton.addEventListener("click", evaluate);
clearButton.addEventListener("click", clear);
deleteButton.addEventListener("click", deleteNumber);
dotButton.addEventListener("click", appendDot);

numberButtons.forEach((button) =>
  button.addEventListener("click", () => appendNumber(button.textContent))
);
operatorButtons.forEach((button) =>
  button.addEventListener("click", () => setOperation(button.textContent))
);
function appendNumber(number) {
  if (display.textContent === "0" || shouldResetScreen) resetScreen();
  if(display.textContent.length < 13)
  display.textContent += number;
};
function resetScreen() {
  display.textContent = "";
  shouldResetScreen = false;
};
function clear() {
  display.textContent = "0";
  firstOperand = "";
  secondOperand = "";
  currentOperation = null;
};
function appendDot() {
  if (shouldResetScreen) resetScreen();
  if (display.textContent === "") display.textContent = "0";
  if (display.textContent.includes(".")) return;
  display.textContent += ".";
};
function deleteNumber() {
  if(display.textContent !== "0"){
  display.textContent = display.textContent.toString().slice(0, -1)
  };
};
function setOperation(operator) {
  if (currentOperation !== null) evaluate();
  firstOperand = display.textContent;
  currentOperation = operator;
  shouldResetScreen = true;
};
function evaluate() {
  if (currentOperation === null || shouldResetScreen) return;
  if (currentOperation === "/" && display.textContent === "0") {
    alert("You just blew up the internet and possibly the universe");
    clear();
    return;
  }
  secondOperand = display.textContent;
  display.textContent = roundResult(
    operate(currentOperation, firstOperand, secondOperand)
  );
  currentOperation = null;
};
function roundResult(number) {
  return Math.round(number * 1000000) / 1000000;
};
function setInput(e) {
  if (e.key >= 0 && e.key <= 9) appendNumber(e.key);
  if (e.key === ".") appendDot();
  if (e.key === "=" || e.key === "Enter") evaluate();
  if (e.key === "Backspace") deleteNumber();
  if (e.key === "Escape") clear();
  if (e.key === "+") setOperation("+");
  if (e.key === "-") setOperation("-");
  if (e.key === "/") setOperation("/");
  if (e.key === "*") setOperation("×");
};
add = (a, b) => a + b;
subtract = (a, b) => a - b;
multiply = (a, b) => a * b;
divide  = (a, b) => a / b;
function operate(operator, a, b) {
  if(!isNaN(a) && !isNaN(b)){
    switch (operator) {
    case '+':
      return add(+a, +b);
      break;
    case '-':
      return subtract(+a, +b);
      break;
    case '×':
      return multiply(+a, +b);
      break;
    case '/':
      if (+b === 0) return null;
      else return divide(+a, +b);
    default:
      return null;
    }
  }
  else {
    return "Invalid numbers";
  }
};
