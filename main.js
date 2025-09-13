const calculator = document.getElementById("calculator-body");
const button = document.getElementsByTagName("button");
const display = document.getElementById("calculator-result");
let arrayOfBtns = Array.from(button);
let currentDigit = "";
let currentNumber = ""
let firstDigit = 3;
let operator = "+";
let secondDigit = 4;

function add(num1, num2) {
    return (num1 + num2);
};

function subtract(num1, num2) {
    return (num1 - num2);
};

function multiply(num1, num2) {
    return (num1 * num2);
};

function divide(num1, num2) {
    return (num1 / num2);
};

function operate(firstDigit, operator, secondDigit) {
    if (operator == "+") {
        return add(firstDigit, secondDigit);
    }
    else if (operator == "-") {
        return subtract(firstDigit, secondDigit);
    }
    else if (operator == "*") {
        return multiply(firstDigit, secondDigit);
    }
    else if (operator == "/") {
        return divide(firstDigit, secondDigit);
    };
};

function populateDisplay(currentNumber) {
    display.innerText = currentNumber;    
}

arrayOfBtns.forEach((button) => {
    button.addEventListener("click", (e) => {
        currentDigit = button.textContent;
        currentNumber += currentDigit
        populateDisplay(currentNumber);
    })
}); 