function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function operate(operator, a, b) {
    switch (operator) {
        case "+":
            return add(a, b);
        case "-":
            return subtract(a, b);
        case "*":
            return multiply(a, b);
        case "/":
            return divide(a, b);
    }
}

function handleButtonPressed(button) {
    switch (button) {
        case "0":
        case "1":
        case "2":
        case "3":
        case "4":
        case "5":
        case "6":
        case "7":
        case "8":
        case "9":
            handleNumberPressed(button);
            break;
    }
}

function handleNumberPressed(number) {
    display.textContent += number;
}

function setupUI() {
    const buttons = document.querySelectorAll(".buttons button");
    buttons.forEach((button) => {
        button.addEventListener("click", () => {
            handleButtonPressed(button.textContent);
        });
    });
}

let operand1 = null;
let operand2 = null;
let currentOperator = null;

const display = document.querySelector(".display");
display.textContent = "";

setupUI();