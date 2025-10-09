const button = document.getElementsByTagName("button");
const calculator = document.getElementById("calculator-body");
const display = document.getElementById("calculator-result");
const numButton = document.getElementsByClassName("num-btn");
const opButton = document.getElementsByClassName("op-btn");
let arrayOfBtns = Array.from(button);
let currentDigit = "";
let currentNumber = "";
let disableDecimal = false;
let divideByZero = false;
let firstNumber = "";
let operator = "";
let opLastPressed = false;
let secondNumber = "";

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
};

function clearAll() {
    currentNumber = "";
    divideByZero = false;
    firstNumber = "";
    populateDisplay("");
    secondNumber = ""; 
};

arrayOfBtns.forEach((button) => {
    button.addEventListener("click", (e) => {
        if (button.classList.contains("num-btn")) {

            if (display.innerText.includes(".")) {
                disableDecimal = true;
            }
            else {
                disableDecimal = false;
            };

            if (disableDecimal == true) {
                if (button.id != "decimal-btn") {
                    currentDigit = button.innerText;
                }
                else {
                    currentDigit = "";
                }
            }
            else {
                currentDigit = button.innerText;
            };

            if (disableDecimal == true && currentDigit == ".") {
                currentDigit = "";
            };
            
            if (opLastPressed == true) {
                currentNumber = "";
                opLastPressed = false;
            };

            if (currentDigit == false && operator == "÷") {
                divideByZero = true;
            }
            else if (currentNumber.length < 14) {
                currentNumber += currentDigit;
                populateDisplay(currentNumber);
            };
        };

        if (button.classList.contains("op-btn")){
            opLastPressed = true;

            if (firstNumber == "") {
                firstNumber = currentNumber;
                currentNumber = "";
            }
            else {
                secondNumber = currentNumber;
                currentNumber = "";
            };

            if (firstNumber && secondNumber) {
                let answer = operate(firstNumber, operator, secondNumber);
                console.log("answer = " + answer);

                if (answer.toString().length > 14) {
                    answer = "Undefined";
                }; 

                populateDisplay(answer);
                firstNumber = answer;
                secondNumber = "";
            };

            if (button.id != "equals-btn"){
                operator = button.innerText;
            }
            else {
                if (divideByZero == true)
                populateDisplay("Can't ÷ by 0!");
            };
        };

        if (button.id === "clear-btn") {
            clearAll();
        };
    });
}); 