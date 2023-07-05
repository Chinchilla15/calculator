const displayOperation = document.getElementById('operation');
const displayResult = document.getElementById('result');
const ac = document.getElementById('ac');
const posneg = document.getElementById('posneg');
const percent = document.getElementById('percent');
const divide = document.getElementById('divide');
const multi = document.getElementById('multiply');
const minus = document.getElementById('minus');
const plus = document.getElementById('plus');
const equal = document.getElementById('equal');
const decimal = document.getElementById('decimal');
const zero = document.getElementById('zero')
const one = document.getElementById('one');
const two = document.getElementById('two');
const three = document.getElementById('three');
const four = document.getElementById('four');
const five = document.getElementById('five');
const six = document.getElementById('six');
const seven = document.getElementById('seven');
const eight = document.getElementById('eight');
const nine = document.getElementById('nine');
const buttons = document.querySelectorAll('button');

const calculator = document.getElementById('body')
const keys = document.getElementById('btnBox');
const operation = document.querySelectorAll('.operation');
const number = document.querySelector('.number');

buttons.forEach(button =>{
    button.addEventListener('click', e =>{
        if(button.classList.contains('number')){
            console.log('Number key clicked!')
        }else if(button.classList.contains('operation')){
            console.log('Operation key clicked!')
        }else if(button.id == 'equal'){
            console.log('Equal key Clicked!')
        }else if(button.id == 'decimal'){
            console.log('Deciaml key cliked!')
        }else if(button.id == 'ac'){
            console.log('Clear key clicked!')
        }
    });
});


let num1 = 0;
let num2 = 0;
let operator = ['+', '-', '/','*'];

const add = function(a, b){
    return a + b;
};

const subtract = function(a, b){
    return a - b;
};

const multiply = function(...args){
   let product = 1;
   for (let i = 0; i < args.length; i++){
    product *= args[i];
   }
   return product;
};

const divition = function (a, b){
    if(a === 0 || b === 0){
        return'Not possible!';
    }
    return a / b;
};

function percentage(partialValue, totalValue){
    let result = ((partialValue / 100) * totalValue).toFixed(2);
    return result
}

function changeSign(){

}

const operate = function(a, b, operator){
    add(a,b);
    subtract(a,b);
    multiply(arg);
    divition(a,b);

}

//Above the line are the functions that I will use and are still testing
//-----------------------------------------------
//Bellow the line is the testing area, here I will shoot a lot of code to test different ideas to make the proyect work

ac.addEventListener('click', ()=>{
    displayOperation.innerHTML = '';
    displayResult.innerHTML = '';
})

// equal.addEventListener('click', ()=>{
//     operate();
// })