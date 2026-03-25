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
    if (b === 0) {
        return null;
    } else {
        return a / b;
    }
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
        case "+":
        case "-":
        case "*":
        case "/":
            handleOperatorPressed(button);
            break;
        case "C":
            clear();
            break;
        case "=":
            handleEqualsPressed();
    }
}

function handleNumberPressed(number) {
    if (operatorJustPressed) {
        operatorJustPressed = false;
        operand1 = display.textContent;
        display.textContent = "";
        display.textContent += number;
    } else if (equalsJustPressed) {
        currentOperator = null;
        equalsJustPressed = false;
        operand1 = null;
        display.textContent = "";
        display.textContent += number;
    } else {
        display.textContent += number;
    }
}

function handleOperatorPressed(operator) {
    if (display.textContent && !operand1 && !operatorJustPressed && !currentOperator && !equalsJustPressed) {
        operand1 = display.textContent;
        currentOperator = operator;
        operatorJustPressed = true;
    } else if (operatorJustPressed && !equalsJustPressed) {
        currentOperator = operator;
    } else if (display.textContent && operand1 && !operatorJustPressed && !equalsJustPressed) {
        const result = operate(currentOperator, +operand1, +display.textContent);
        if (result) {
            display.textContent = parseFloat(result.toFixed(2));
            operand1 = result;
            currentOperator = operator;
            operatorJustPressed = true;
        } else {
            alert("Division by zero is not allowed in this calculator.");
            clear();
        }
    } else if (equalsJustPressed && operand1) {
        currentOperator = operator;
        operatorJustPressed = true;
        equalsJustPressed = false;
    }
}

function handleEqualsPressed() {
    if (operatorJustPressed || equalsJustPressed) {
        console.log("Ignored equals press.")
    } else if (operand1 && display.textContent && currentOperator) {
        const result = operate(currentOperator, +operand1, +display.textContent);
        if (result) {
            display.textContent = parseFloat(result.toFixed(2));
            operand1 = result;
            equalsJustPressed = true;
            currentOperator = null;
        } else {
            alert("Division by zero is not allowed in this calculator.");
            clear();
        }
    }
}

function clear() {
    operand1 = null;
    currentOperator = null;
    operatorJustPressed = false;
    equalsJustPressed = false;
    display.textContent = "";
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
let currentOperator = null;

let operatorJustPressed = false;
let equalsJustPressed = false;

const display = document.querySelector(".display");
display.textContent = "";

setupUI();