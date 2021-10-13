let numberButtons = document.querySelectorAll('.btn');
let calcScreen = document.getElementById('calcScreen');
let clearBtn = document.querySelector('.allClear');
let operatorBtn = document.querySelectorAll('.btnOperator');
let btnEqual = document.querySelector('.btnEqual');


function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    return num1 / num2;
}

function operate(operator, num1, num2) {
    switch (operator) {
        case "add":
            return add(num1, num2);
        case "subtract":
            return subtract(num1, num2);
        case "multiply":
            return multiply(num1, num2);
        case "divide":
            return divide(num1, num2);
    }
}

let firstNumber = null;
let secondNumber = null;
let currentOperator = ' ';



numberButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        calcScreen.textContent += +e.target.value;
       
        if(currentOperator === ' '){
            firstNumber = +calcScreen.textContent;
        }
        else{
            secondNumber = +calcScreen.textContent;
        }

    })

});

//It is add value
function plusOp(a,b){
    operatorBtn[0].addEventListener('click', (e) => {
        a = +firstNumber;
        b = +secondNumber;
        operatorVal = e.target.id;
    operate(operatorVal,a,b);
    calcScreen.textContent = ' ';

        console.log(a);
        console.log(b);
       
    });

   
}

clearBtn.addEventListener('click', () => {
    clearScreen();
})


// btnEqual.addEventListener('click', () => {
//     calcScreen.textContent = 'Equal sign'
// })

function clearScreen() {
    calcScreen.textContent = ' ';
    firstNumber = 0;
    secondNumber = 0;
    currentOperator = ' ';
}