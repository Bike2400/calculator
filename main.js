let currentNum = '';
let previousNum = '';
let operator = '';

const currentDisplayNumber = document.querySelector('.currentNumber');
const previousDisplayNumber = document.querySelector('.previousNumber');

window.addEventListener('keydown',enableKeyBoard);

const equal = document.querySelector('#equal');
equal.addEventListener('click',() =>{
    if(currentNum != '' && previousNum != '' ){
        evaluate();
    }
});

const decimal = document.querySelector('#decimal');
decimal.addEventListener('click',addDecimal);

const numberButtons = document.querySelectorAll('#button');

const operators = document.querySelectorAll('#operator');

const clear = document.querySelector('#clear');
clear.addEventListener('click',clearDisplay);

numberButtons.forEach((btn =>{
    btn.addEventListener('click',(e) => {
        displayNumber(e.target.textContent);
    });
}));
//Function to display the numbers on the screen
function displayNumber(number){
//So that after the first chained result you can continue chaining...So the display wont be stuck at 0
    if(currentNum != '' && previousNum != '' && operator === ''){ 
        previousNum = '';
        currentDisplayNumber.textContent = currentNum;
    }
    if (currentNum.length <= 10){
        currentNum += number;
        currentDisplayNumber.textContent = currentNum;
    }
}

operators.forEach((btn) =>{
    btn.addEventListener('click',(e) =>{
        displayOperator(e.target.textContent);
    });
});

function displayOperator(op){
    if(previousNum === ''){
        previousNum = currentNum;
        operatorCheck(op);
    }
    else if (currentNum === ''){
        operatorCheck(op);
    }
    else{
        evaluate();
        operator = op;   
        currentDisplayNumber.textContent = '0';     
        previousDisplayNumber.textContent = previousNum + ' ' + operator;
   
    }
}

function evaluate(){
    previousNum = Number(previousNum);
    currentNum = Number(currentNum);

    if(operator === '+'){
        previousNum += currentNum;
    }
    else if (operator === '-'){
        previousNum -= currentNum;
    }
    else if (operator === '/'){
        if(currentNum <= 0){
            previousNum = 'Error';
            displayResults();
            return;
        }
        previousNum /= currentNum;
    }
    else if (operator === 'x'){
        previousNum *= currentNum;
    }
    previousNum = roundNumber(previousNum);
    previousNum = previousNum.toString();
    displayResults();


}

function displayResults() {
  
    if(previousNum.length <= 11){
        currentDisplayNumber.textContent = previousNum;
    }
    else{
        currentDisplayNumber.textContent = previousNum.slice(0,11) + '...';
    }  
    previousDisplayNumber.textContent = '';
    operator = '';
    currentNum = '';
}

function roundNumber(num){
    return Math.round(num * 10000)/10000;
}

function clearDisplay(){
    previousNum = '';
    currentNum = '';
    previousDisplayNumber.textContent = '';
    currentDisplayNumber.textContent = 0;
    operator = '';
}

//Function to allow you string operations together after pressing =
function operatorCheck(text){
    operator = text;
    previousDisplayNumber.textContent = previousNum + ' ' + operator;
    currentDisplayNumber.textContent = '0';
    currentNum = '';
}

function addDecimal(){
    if(!currentNum.includes('.')){
        currentNum += '.';
        currentDisplayNumber.textContent = currentNum;
    }
}

function enableKeyBoard(e){
    e.preventDefault();
    if(e.key >= 0 && e.key <=9){
        displayNumber(e.key);
    }
    if(e.key === 'Enter' || 
      (e.key === "=" && previousNum != '' && currentNum != '')){
        evaluate();
    }
    if(e.key === '+' || e.key === '-' || e.key === '/'){
        displayOperator(e.key)
    }
    if(e.key === '*'){
        displayOperator('x');
    }
    if(e.key === '.'){
        addDecimal();
    }
    if(e.key === 'Backspace'){
        if(currentNum != ''){
            currentNum = currentNum.slice(0,-1);
            currentDisplayNumber.textContent = currentNum;
            if(currentNum = ''){
                currentDisplayNumber.textContent = 0;
            }
        }
        if(currentNum == '' && previousNum != '' && operator == ''){
            previousNum = previousNum.slice(0,-1);
            currentDisplayNumber.textContent = previousNum;
        }

    }


}