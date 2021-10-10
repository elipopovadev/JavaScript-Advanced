function solve() {
    let numberButtons = document.querySelectorAll('[data-number]');
    let operationButtons = document.querySelectorAll('[data-operation]');
    let equalsButton = document.querySelector('[data-equals]');
    let clearButton = document.querySelector('.clear');

    let expressionOutput = document.getElementById('expressionOutput');
    let resultOutput = document.getElementById('resultOutput');


    numberButtons.forEach(button => {
        button.addEventListener('click', () => {
            expressionOutput.value += button.innerHTML;          
        })
    });

    operationButtons.forEach(button => {
        button.addEventListener('click', add => {
            expressionOutput.value +=' ' + button.innerHTML + ' ';  
            removeEventListener('click', add );              
        })
        
    });

    equalsButton.addEventListener('click', () => {
         let currentExpressionOutput = expressionOutput.value.split(' ');
         let result = '';
         if(currentExpressionOutput[1]=== '+') {
            result = parse.Int(currentExpressionOutput[0]) + parse.Int(currentExpressionOutput[2]);
         } else if(currentExpressionOutput[1] === '-') {
            result = parse.Int(currentExpressionOutput[0]) - parse.Int(currentExpressionOutput[2]);
         } else if(currentExpressionOutput[1] === '*') {
            result = parse.Int(currentExpressionOutput[0]) * parse.Int(currentExpressionOutput[2]);
         } else {
            result = parse.Int(currentExpressionOutput[0]) / parse.Int(currentExpressionOutput[2]);
         }

         currentExpressionOutput.value= '';
         resultOutput.value = result;   
    })


    clearButton.addEventListener('click', () => {
        expressionOutput.value = '';
        resultOutput.value = '';
    })

}

