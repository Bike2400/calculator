let currentNum = '';
let previousNum = '';
let operator = '';

const currentDisplayNumber = document.querySelector('.currentNumber');
const previousDisplayNumber = document.querySelector('.previousNumber');

const equal = document.querySelector('#equal');
equal.addEventListener('click',evaluate);

const decimal = document.querySelector('#decimal');

const numberButtons = document.querySelectorAll('#button');

const operators = document.querySelectorAll('#operator');

const clear = document.querySelector('#clear');

numberButtons.forEach((btn =>{
    btn.addEventListener('click',(e) => {
        displayNumber(e.target.textContent);
    });
}));
//Function to display the numbers on the screen
function displayNumber(number){
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
    operator = op;
    previousNum = currentNum;
    previousDisplayNumber.textContent = previousNum + ' ' + operator;
    currentNum = '';
    currentDisplayNumber.textContent = ''; 
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
        previousNum /= currentNum;
    }
    else if (operator === 'x'){
        previousNum *= currentNum;
    }
    previousDisplayNumber.textContent = '';
    currentDisplayNumber.textContent = previousNum;


}