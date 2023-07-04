const operation = document.getElementById('operation');
const result = document.getElementById('result');
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
const nine = document.getElementById('nine')

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
        return"Not possible!";
    }
    return a / b;
};

