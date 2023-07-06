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

numbersBtn.forEach(button=>{
    button.addEventListener('click',function(){
        const number = this.textContent;
        appendNumber(number);
    })
})

function appendNumber(number){
    if(currentOperation.textContent === '0'){
        currentOperation.textContent = number;
    }else{
        currentOperation.textContent += number;
    }
}

operatorBtn.forEach(button =>{
    button.addEventListener('click',function(){
        const selectedOperator = this.textContent;
        handleOperator(selectedOperator)
    })
})

function handleOperator(selectedOperator){
    if (num1 === null){
        num1 = parseFloat(currentOperation.textContent);
        operator = selectedOperator;
        previousOperation.textContent = currentOperation.textContent + ' ' + operator;
        currentOperation.textContent = '';
    }else {
        num2 = parseFloat(currentOperation.textContent);
        const result = operate(num1, num2, operator);
        num1 = result;
        operator = selectedOperator;
        previousOperation.textContent = result + ' ' + operator;
        currentOperation.textContent = ' ';
    }
}

function operate(num1, num2, op){
    switch(op){
        case '+':
            return num1 + num2;
        case '-': 
            return num1 - num2;
        case 'x':
            return num1 * num2;
        case '\u00F7':
            return num1 / num2;
        case '%':
            return (num1 / 100) * num2;
    }
}

equal.addEventListener('click', ()=>{
    if(num1 !== null && operator !== null){
        const num2 = parseFloat(currentOperation.textContent);
        const result = operate(num1, num2, operator);
        previousOperation.textContent = '';
        currentOperation.textContent = result;
        num1 = null;
        operator = null;
    }
})

ac.addEventListener('click', ()=>{
    previousOperation.innerHTML = '';
    currentOperation.innerHTML = '0';
    num1 = null;
    num2 = null;
    operator = null;
})

decimal.addEventListener('click', ()=>{
    if(!currentOperation.textContent.includes('.')){
        currentOperation.textContent += '.';
    }
})

deleteBtn.addEventListener('click',()=>{
    currentOperation.textContent = currentOperation.textContent.slice(0, -1);
})