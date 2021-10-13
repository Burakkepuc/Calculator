# Calculator Project

## Purpose of Calculator Project  
- Using HTML CSS And Javascript, Making the calculator project.  

## Steps  

 To choose Buttons, display and clear button we react html with this javascript code and make constant  

```
  
const calculatorDisplay = document.querySelector('h1');
const inputBtns = document.querySelectorAll('button');
const clearButton = document.getElementById('clear-btn');

```

 Adding event listener according to button type, if button has no class, it's number button, if it has operator class, it is operator class and if it has decimal class, it is decimal button  
 
 ``` 
 inputBtns.forEach(inputBtn => {
    if (inputBtn.classList.length === 0) {
        inputBtn.addEventListener('click', () => sendNumberValue(inputBtn.value));
    } else if (inputBtn.classList.contains('operator')) {
        inputBtn.addEventListener('click', () => useOperator(inputBtn.value));
    } else if (inputBtn.classList.contains('decimal')) {
        inputBtn.addEventListener('click', () => addDecimal());
    }
});
 ```
 
When we send number, if its first number that sent below else code works , if the operator button uses, it makes `awaitingNextValue` true and we reach that block.  
``` 
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
```

This operator function enables to use our operator. When we use is it first takes current value on screen and then makes operator arrangement from another function that is called "operate"    

``` 
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
```


[Live Preview: ](https://burakkepuc.github.io/Calculator/):point_left:  
 
 
