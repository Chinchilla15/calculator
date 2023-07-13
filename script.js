const previousOperation = document.getElementById('previousOperation');
const currentOperation = document.getElementById('currentOperation');
const ac = document.getElementById('ac');
const equal = document.getElementById('equal');
const decimal = document.getElementById('decimal');
const deleteBtn = document.getElementById('delete')
const numbersBtn = document.querySelectorAll('[data-number]')
const operatorBtn = document.querySelectorAll('[data-operator]')
const buttons = document.querySelectorAll('button');

let num1 = null;
let num2 = null;
let operator = null
let calculationPerformed = false;
let deleteBtnDisabled = true;

//Captures number selected, checks if an operator has already been made, displays number(s) selected
function handleNumber(number){
    if(calculationPerformed){
        currentOperation.textContent = number;
        calculationPerformed = false;
    }else{
        if (currentOperation.textContent === '0'){
            currentOperation.textContent = number;
            deleteBtnDisabled = false;
        }else{
            currentOperation.textContent += number;
        }
    }
}

//Captures operator selected, updates the display, shows result 
function handleOperator(selectedOperator){
    if(currentOperation.textContent === 'Not Possible!'){
        return;
    }
    if (num1 === null){
        num1 = parseFloat(currentOperation.textContent);
        operator = selectedOperator;
        previousOperation.textContent = currentOperation.textContent + ' ' + operator;
        currentOperation.textContent = '';
        deleteBtnDisabled = true;
    }else{
        if(num2 === null){
            operator = selectedOperator;
            previousOperation.textContent = num1 + ' ' + operator;
        }else {
        const result = operate(num1, num2, operator);
        num1 = result;
        operator = selectedOperator;
        previousOperation.textContent = result + ' ' + operator;
        currentOperation.textContent = ' ';
         }
    }
    calculationPerformed = false;
    deleteBtnDisabled = true;
}

numbersBtn.forEach(button=>{
    button.addEventListener('click',function(){
        const number = this.textContent;
        handleNumber(number);
    })
})


operatorBtn.forEach(button =>{
    button.addEventListener('click',function(){
        const selectedOperator = this.textContent;
        handleOperator(selectedOperator)
    })
})

function operate(num1, num2, op){
    switch(op){
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case 'x':
            return num1 * num2;
        case '\u00F7':
            if(num1 === 0 || num2 === 0){
                return 'Not Possible!'
            }else{
                return num1 / num2;
            }
        case '%':
            return (num1 / 100) * num2;
    }
}

equal.addEventListener('click', ()=>{
    if(num1 !== null && operator !== null){
        let num2 = parseFloat(currentOperation.textContent);
        if(isNaN(num2)){
            num2 = num1;
        }
        const result = operate(num1, num2, operator);
        previousOperation.textContent = '';
        currentOperation.textContent = result;
        num1 = null;
        operator = null;
        calculationPerformed = true;
    }
})

ac.addEventListener('click', ()=>{
    previousOperation.innerHTML = '';
    currentOperation.innerHTML = '0';
    num1 = null;
    num2 = null;
    operator = null;
    calculationPerformed = false;
})

decimal.addEventListener('click', ()=>{
    if(!currentOperation.textContent.includes('.')){
        currentOperation.textContent += '.';
    }
})

deleteBtn.addEventListener('click',()=>{
    if(!calculationPerformed){
        if(currentOperation.textContent.length > 1){
        currentOperation.textContent = currentOperation.textContent.slice(0, -1);
        } else { 
            currentOperation.textContent = '0';
            deleteBtnDisabled = true;
        }
    }
})