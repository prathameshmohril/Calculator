let display = document.getElementById('display');
let calculation = '';

function appendNumber(number) {
    calculation += number;
    display.value = calculation;
}

function appendOperator(operator) {
    if (calculation === '') return;
    if (calculation[calculation.length - 1] === '+' ||
        calculation[calculation.length - 1] === '-' ||
        calculation[calculation.length - 1] === '*' ||
        calculation[calculation.length - 1] === '/') return;

    calculation += operator;
    display.value = calculation;
}

function clearDisplay() {
    calculation = '';
    display.value = calculation;
}

function calculateResult() {
    try {
        let result = eval(calculation);
        calculation = result;
        display.value = result;
    } catch (error) {
        display.value = 'Error';
    }
}