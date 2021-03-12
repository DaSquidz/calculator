let x = "0";

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