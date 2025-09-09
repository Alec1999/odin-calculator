const calculatorBody = document.getElementById("calculator-body");
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

function oporate(firstDigit, operator, secondDigit) {
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