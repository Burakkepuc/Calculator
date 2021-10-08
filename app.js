
const btn = document.querySelectorAll('.btn');
const input = document.querySelector('input');
const btnOperator = document.querySelectorAll('btnOperator');

const plus = document.querySelector('.addDigit');


let inputVal = 0;



btn.forEach(btn => {
    btn.addEventListener('click', (e) => {
            inputVal = +(e.target.value);
           input.value += inputVal;
     })    
});



const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;



plus.addEventListener('click' , () => {
    console.log(operate(add,3,2));

});

const operate = ((operation,a,b) => operation(a,b));


