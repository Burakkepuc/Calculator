const calculatorDisplay = document.querySelector('h1');
const inputBtns = document.querySelectorAll('button');
const clearButton = document.getElementById('clear-btn');


let firstValue = 0;
let operatorValue = ' ';
let awaitingNextValue = false;



function operate(a, operator, b) {
    switch (operator) {
        case '*':
            return a * b;
        case '/':
            return a / b;
        case '+':
            return a + b;
        case '-':
            return a - b;
        case '=':
            return b;
    }

}

/* Press Operator Function */
function useOperator(operator) {
    const currentValue = Number(calculatorDisplay.textContent);

    if (operatorValue && awaitingNextValue){
    operatorValue = operator;
    return;
    }

    if (!firstValue) {
        firstValue = currentValue;
    } else {
        console.log(firstValue + operatorValue + currentValue);
        const calculation = operate(firstValue,operatorValue,currentValue);
        calculatorDisplay.textContent = calculation;
        firstValue = calculation;
    }
    awaitingNextValue = true;
    operatorValue = operator;

}

//Number buttons function
function sendNumberValue(number) {

    if (awaitingNextValue) {
        calculatorDisplay.textContent = number;
        awaitingNextValue = false;
    } else {
        const displayValue = calculatorDisplay.textContent;
        if (displayValue === '0') {
            calculatorDisplay.textContent = number;
        } else {
            calculatorDisplay.textContent = displayValue + number;
        }
    }



}

function addDecimal() {
    //If operator pressed don't add decimal
    if (awaitingNextValue) return;
    if (!calculatorDisplay.textContent.includes('.')) {
        calculatorDisplay.textContent = `${calculatorDisplay.textContent}.`
    }
}

inputBtns.forEach(inputBtn => {
    if (inputBtn.classList.length === 0) {
        inputBtn.addEventListener('click', () => sendNumberValue(inputBtn.value));
    } else if (inputBtn.classList.contains('operator')) {
        inputBtn.addEventListener('click', () => useOperator(inputBtn.value));
    } else if (inputBtn.classList.contains('decimal')) {
        inputBtn.addEventListener('click', () => addDecimal());
    }
});



function resetAll() {
    calculatorDisplay.textContent = '0';
    firstValue = 0;
    operatorValue = ' ';
    awaitingNextValue = false;
}

clearButton.addEventListener('click', () => resetAll());