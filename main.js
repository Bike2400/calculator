let currentNum = '';
let previousNum = '';
let operator = '';

const currentDisplayNumber = document.querySelector('.currentNumber');
const previousDisplayNumber = document.querySelector('.previousNumber');

const equal = document.querySelector('#equal');

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