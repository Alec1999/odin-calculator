const button = document.getElementsByTagName("button");
const calculator = document.getElementById("calculator-body");
const display = document.getElementById("calculator-result");
const numButton = document.getElementsByClassName("num-btn");
const opButton = document.getElementsByClassName("op-btn");
let arrayOfBtns = Array.from(button);
let currentDigit = "";
let currentNumber = "";
let firstNumber = "";
let operator = "";
let secondNumber = "";
let opLastPressed = false;

function add(num1, num2) {
    return (Number(num1) + Number(num2));
};

function subtract(num1, num2) {
    return (Number(num1) - Number(num2));
};

function multiply(num1, num2) {
    return (Number(num1) * Number(num2));
};

function divide(num1, num2) {
    return (Number(num1) / Number(num2));
};

function operate(firstNumber, operator, secondNumber) {
    if (operator == "+") {
        return add(firstNumber, secondNumber);
    }
    else if (operator == "−") {
        return subtract(firstNumber, secondNumber);
    }
    else if (operator == "×") {
        return multiply(firstNumber, secondNumber);
    }
    else if (operator == "÷") {
        return divide(firstNumber, secondNumber);
    };
};

function populateDisplay(currentNumber) {
    display.innerText = currentNumber;    
}

arrayOfBtns.forEach((button) => {
    button.addEventListener("click", (e) => {
        if (button.classList.contains("num-btn")) {
            if (opLastPressed == true) {
                currentNumber = "";
                opLastPressed = false;
            }
            currentDigit = button.innerText;
            if (currentNumber.length < 14) {
            currentNumber += currentDigit;
            populateDisplay(currentNumber);
            };
        };  
        if (button.classList.contains("op-btn")){
            opLastPressed = true;
            if (firstNumber == "") {
                firstNumber = currentNumber;
                currentNumber = ""
            };
            if (firstNumber) {
                secondNumber = currentNumber;
                currentNumber = "";
            }
            if (firstNumber && secondNumber) {
                let answer = operate(firstNumber, operator, secondNumber)
                console.log("answer = " + answer)
                populateDisplay(answer);
                firstNumber = answer;
                secondNumber = "";
            };
            if (button.id != "equals-btn"){
                operator = button.innerText;
            };
            console.log("first number is " + firstNumber);
            console.log("second number is " + secondNumber);
            console.log("current operator is " + operator);
        };
        if (button.id === "clear-btn") {
            firstNumber = "";
            secondNumber = "";
            currentNumber = "";
            populateDisplay("");
        };
    })
}); 