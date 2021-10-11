function solve() {
  let numberButtons = document.querySelectorAll('[data-number]');
  let operationButtons = document.querySelectorAll('[data-operation]');
  let equalsButton = document.querySelector('[data-equals]');
  let clearButton = document.querySelector('.clear');

  let expressionOutput = document.getElementById('expressionOutput');
  let resultOutput = document.getElementById('resultOutput');

  for (const button of numberButtons) {
    button.addEventListener('click', () => {
      expressionOutput.innerHTML += button.innerHTML;
    })
  }

  for (const button of operationButtons) {
    button.addEventListener('click', () => {
      expressionOutput.innerHTML += ` ${button.innerHTML} `;
    }, { once: true });
  }

  equalsButton.addEventListener('click', () => {
    let currentExpressionOutput = expressionOutput.innerHTML.split(' ');
    let result = '';
    if (currentExpressionOutput[1] === '+') {
      result = parseFloat(currentExpressionOutput[0]) + parseFloat(currentExpressionOutput[2]);
    } else if (currentExpressionOutput[1] === '-') {
      result = parseFloat(currentExpressionOutput[0]) - parseFloat(currentExpressionOutput[2]);
    } else if (currentExpressionOutput[1] === 'x') {
      result = parseFloat(currentExpressionOutput[0]) * parseFloat(currentExpressionOutput[2]);
    } else {
      result = parseFloat(currentExpressionOutput[0]) / parseFloat(currentExpressionOutput[2]);
    }

    currentExpressionOutput.innerHTML = '';
    resultOutput.innerHTML = result;
  })

  clearButton.addEventListener('click', () => {
    expressionOutput.innerHTML = '';
    resultOutput.innerHTML = '';
  })
}

