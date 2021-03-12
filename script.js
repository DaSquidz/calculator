const clearButton = document.querySelector('#clear-btn');
const divisionButton = document.querySelector('#division-btn');
const sevenButton = document.querySelector('#seven-btn');
const eightButton = document.querySelector('#eight-btn');
const nineButton = document.querySelector('#nine-btn');
const multiplicationButton = document.querySelector('#multiplication-btn');
const fourButton = document.querySelector('#four-btn');
const fiveButton = document.querySelector('#five-btn');
const sixButton = document.querySelector('#six-btn');
const subtractionButton = document.querySelector('#subtraction-btn');
const oneButton = document.querySelector('#one-btn');
const twoButton = document.querySelector('#two-btn');
const threeButton = document.querySelector('#three-btn');
const additionButton = document.querySelector('#addition-btn');
const zeroButton = document.querySelector('#zero-btn');
const dotButton = document.querySelector('#dot-btn');
const equalsButton = document.querySelector('#equals-btn');

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