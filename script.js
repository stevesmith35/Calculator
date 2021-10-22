const zero = document.getElementById("zero");
const one = document.getElementById("one");
const two = document.getElementById("two");
const three = document.getElementById("three");
const four = document.getElementById("four");
const five = document.getElementById("five");
const six = document.getElementById("six").value;
const seven = document.getElementById("seven").value;
const eight = document.getElementById("eight");
const nine = document.getElementById("nine");
const decimal = document.getElementById("decimal");
const equals = document.getElementById("equals");
const addition = document.getElementById("addition");
const subtraction = document.getElementById("subtraction");
const multiplication = document.getElementById("multiplication");
const division = document.getElementById("division");
const percent = document.getElementById("percent");
const posNeg = document.getElementById("pos-neg");
const clear = document.getElementById("clear");
const display = document.getElementById("display");
const digits = document.getElementsByClassName('digit');
let num = 0;
let num2 = null;

function updateDisplay(digit) {
    num = digit;
    display.textContent = num;
}

function getDigits(){
    for (let i = 0; i < digits.length; i++) {
        digits[i].addEventListener('click', function() {
            console.log(digits[i].value);
            updateDisplay(digits[i].value);
        })
    }
}

function allClear() {
    display.textContent = 0;
}

function positiveNegative(num){
    if (num > 0) {
        num = -Math.abs(num)
        return display.textContent = num;
    } else if (num < 0) {
        num = Math.abs(num);
        return display.textContent = num;
    }
}

num.addEventListener('click', getDigits);
clear.addEventListener('click', allClear);
posNeg.addEventListener('click', buttonPressed);