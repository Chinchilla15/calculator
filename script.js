const previousOperation = document.getElementById('previousOperation');
const currentOperation = document.getElementById('currentOperation');
const ac = document.getElementById('ac');
const equal = document.getElementById('equal');
const decimal = document.getElementById('decimal');
const deleteBtn = document.getElementById('delete')
const numbers = document.querySelectorAll('[data-number]')
const operator = document.querySelectorAll('[data-operator]')
const buttons = document.querySelectorAll('button');


buttons.forEach(button =>{
    button.addEventListener('click', e =>{
        const keyContent = button.textContent
        const displayedNum = currentOperation.textContent
        const previousKeyType = button.dataset.previousKeyType = 'op'
        if(displayedNum === '0'){
            currentOperation.textContent = keyContent
        }else if(button.classList.contains('number') || previousKeyType === 'op'){
            currentOperation.textContent = displayedNum + keyContent 
        }
        if (button.classList.contains('operation')) {
            currentOperation.textContent = keyContent
            button.dataset.previousKeyType = 'op'
        if(button.id == 'decimal'){
            currentOperation.textContent = displayedNum + '.';
        }
     }
    });
});

/**
 * Per TOP the steps are as follow:
 * First crete the functions for all basic math: add, subtract, multiply and divide
 * Create variable for both numbers in the operation and one for the operator itself, 3 variables total
 * Create a new function to operate, that will take ONE operator and 2 numbers, it will then call one of the math functions with the numbers given, depending on the operator
 * Make the key clicked apper in the display and also store that value in a variable 
 * When a user presses an operator, the key that has already been selected should be stored/saved and also save which operator key has been selected
 * The function operate should be called when the equel (=) key is pressed
 * The operate function should also update the display with the result of the operation
 */

let num1 = 0;
let num2 = 0;


const add = function(a, b){
    return a + b;
};

const subtract = function(a, b){
    return a - b;
};

const multiply = function(a, b){
    return a / b
};

const divition = function (a, b){
    if(a === 0 || b === 0){
        return'Not possible!';
    }
    return a / b;
};

function percentage(partialValue, totalValue){
    return ((partialValue / 100) * totalValue);
    
}

let operators = {
    '+' : add,
    '-' : subtract,
    '*' : multiply,
    '/' : divition,
    '%' : percentage
}

let op = '+'

function operate(operators, num1, num2, ){

}

// const operate = function(a, b, operator){
//     add(a,b);
//     subtract(a,b);
//     multiply(arg);
//     divition(a,b);

// }

//Above the line are the functions that I will use and are still testing
//-----------------------------------------------
//Bellow the line is the testing area, here I will shoot a lot of code to test different ideas to make the proyect work

ac.addEventListener('click', ()=>{
    currentOperation.innerHTML = '';
    currentOperation.innerHTML = '';
})

// equal.addEventListener('click', ()=>{
//     operate();
// })