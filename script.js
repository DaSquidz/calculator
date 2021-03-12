const clearButton = document.getElementById('clear-btn');
const divisionButton = document.getElementById('division-btn');
const sevenButton = document.getElementById('seven-btn');
const eightButton = document.getElementById('eight-btn');
const nineButton = document.getElementById('nine-btn');
const multiplicationButton = document.getElementById('multiplication-btn');
const fourButton = document.getElementById('four-btn');
const fiveButton = document.getElementById('five-btn');
const sixButton = document.getElementById('six-btn');
const subtractionButton = document.getElementById('subtraction-btn');
const oneButton = document.getElementById('one-btn');
const twoButton = document.getElementById('two-btn');
const threeButton = document.getElementById('three-btn');
const additionButton = document.getElementById('addition-btn');
const zeroButton = document.getElementById('zero-btn');
const dotButton = document.getElementById('dot-btn');
const equalsButton = document.getElementById('equals-btn');
let displayScreen = document.getElementById('display');

const numberButtons = [zeroButton, oneButton, twoButton, threeButton, fourButton, fiveButton, sixButton, sevenButton, eightButton, nineButton, dotButton];

numberButtons.forEach((button) => button.addEventListener("click", () => writeNumber(button.textContent)));

function writeNumber(number){
    if(displayScreen.textContent === "0") wipeScreen();
    if(displayScreen.textContent.length < 13) displayScreen.textContent += number;
}

wipeScreen = () => displayScreen.textContent = "";

add = (a, b) => a + b;
subtract = (a, b) => a - b;
multiply = (a, b) => a * b;
divide = (a, b) => b === 0 ? 'syntax error' : a / b;

function operate(operator, a, b) {
  if(!isNaN(a) && !isNaN(b)){
    switch (operator) {
    case '+':
      return add(+a, +b);
      break;
    case '-':
      return subtract(+a, +b);
      break;
    case '*':
      return multiply(+a, +b);
      break;
    case '/':
      return divide(+a, +b);
      break;
    }
  }
  else {
    return "one or both numbers are not valid";
  }
}