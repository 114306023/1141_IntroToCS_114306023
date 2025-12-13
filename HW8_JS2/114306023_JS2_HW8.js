
function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b === 0) {
    alert("Error: 0 can't be placed in the denominator.");
    return null;
  }
  return a / b;
}


function calculate() {
  const num1Input = document.getElementById('num1');
  const num2Input = document.getElementById('num2');
  const operatorSelect = document.getElementById('operator');
  const resultDisplay = document.getElementById('result');

  const num1 = parseFloat(num1Input.value);
  const num2 = parseFloat(num2Input.value);
  const operator = operatorSelect.value;

  if (isNaN(num1) || isNaN(num2)) {
    resultDisplay.textContent = "Result = Error";
    alert("Please enter valid numbers!");
    return;
  }

  let result;
  switch (operator) {
    case '+':
      result = add(num1, num2);
      break;
    case '-':
      result = subtract(num1, num2);
      break;
    case '*':
      result = multiply(num1, num2);
      break;
    case '/':
      result = divide(num1, num2);
      if (result === null) {
        resultDisplay.textContent = "Result = Error";
        return;
      }
      break;
    default:
      result = 0;
    
  }

  //兩位小數
  resultDisplay.textContent = `Result = ${result.toFixed(2)}`;
}


document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('addBtn').addEventListener('click', calculate);
});