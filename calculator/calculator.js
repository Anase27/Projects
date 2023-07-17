let smallDisplay = document.querySelector('.secondary_display');
let largeDisplay = document.querySelector('.primary_display');
let operand = document.querySelectorAll('.operand');
let operator = document.querySelectorAll('.operator');
let clear = document.querySelector('.clear');
let del = document.querySelector('.delete');
let equals = document.querySelector('.equals');

let firstNum = "";
let secondNum = "";
let operation = "";
let clearLargeScreen = false;


operand.forEach(e => {
    e.addEventListener('click',() => 
    {
        appendOperand(e.dataset.value)
    });
});

operator.forEach(e => {
    e.addEventListener('click',() =>
    {
        appendOperator(e.dataset.operation)
    });
});

window.addEventListener('keydown', (e) => {
    if (e.key >= 0 && e.key <=9) {
        appendOperand(e.key);
    }
    else if(e.key == '.')
    {
        appendOperand(e.key);
    }
    else if (e.key == '+' || e.key == '-' || e.key == '*' || e.key == '/') {
        if (e.key == '/') {
            appendOperator('÷');
        }
        else if (e.key == '*') {
            appendOperator('x');
        }
        else{
            appendOperator(e.key);
        }
    }
    else if (e.key == 'Backspace') {
        delNum();
    }
    else if (e.key == '=' || e.key == 'Enter') {
        eqls();
    }
    else if (e.key == 'Escape') {
        clr();
    }
});

equals.addEventListener('click',eqls);

clear.addEventListener('click',clr);

del.addEventListener('click',delNum);


function eqls()
{
    if(firstNum.length > 0 && secondNum.length > 0 && operation.length > 0)
    {
        smallDisplay.textContent=`${firstNum} ${operation} ${secondNum} =`
        operate(firstNum,operation,secondNum);
        // firstNum = '';
        secondNum = '';
        operation = '';
        // clearLargeScreen = false;
    }
}

function clr()
{
    largeDisplay.textContent = '0';
    smallDisplay.textContent = '';
    firstNum = '';
    secondNum = '';
    operation = '';
    clearLargeScreen = false;
}

function delNum()
{
    if (clearLargeScreen) {
        secondNum = secondNum.slice(0,secondNum.length-1);
    }
    else{
        firstNum = firstNum.slice(0,firstNum.length-1);
    }
    largeDisplay.textContent = largeDisplay.textContent.slice(0,largeDisplay.textContent.length-1);
    if (largeDisplay.textContent.length == 0) {
        largeDisplay.textContent = '0';
    }
    if (smallDisplay.textContent.charAt(smallDisplay.textContent.length-1) == '=') {
        firstNum = largeDisplay.textContent;
    }
}

function add(a,b)
{
    firstNum = `${+a + +b}`;
    largeDisplay.textContent = firstNum;
}
function divide(a,b)
{
    firstNum = `${a / b}`;
    largeDisplay.textContent = firstNum;
}
function subtract(a,b)
{
    firstNum = `${a - b}`;
    largeDisplay.textContent = firstNum;
}
function multiply(a,b)
{
    firstNum = `${a * b}`;
    largeDisplay.textContent = firstNum;
}

function operate(num1,operand,num2)
{
    switch (operand) {
        case '+':
            add(num1,num2);
            break;
        case '-':
            subtract(num1,num2);
            break;
        case '÷':
            divide(num1,num2);
            break;
        case 'x':
            multiply(num1,num2);
            break;
    }
}

function appendOperand(num)
{
    if (num === '.' && largeDisplay.textContent.includes('.')) {
        return;
    }
    if (num === '0' && largeDisplay.textContent === '0') {
        return;
    }
    if (num === '.' && largeDisplay.textContent === '0') {
        firstNum += '0';
    }
    if (smallDisplay.textContent.length > 0 && smallDisplay.textContent.charAt(smallDisplay.textContent.length-1) == '=') {
        clearLargeScreen = false;
        firstNum = '';
        smallDisplay.textContent = '';
    }
    if (!clearLargeScreen) {
        firstNum += num;
        if (firstNum.length > 15) {
            firstNum = '0';
        }
        largeDisplay.textContent = firstNum;
    }
    else{
        if (num === '.' && secondNum.length == 0) {
            secondNum += '0';
        }
        secondNum += num;
        if (secondNum.length > 15) {
            secondNum = '0';
        }
        largeDisplay.textContent = secondNum;
    }
}

function appendOperator(opr)
{
    if (firstNum.length === 0) {
        return;
    }
    if(firstNum.length > 0 && secondNum.length > 0 && operation.length > 0)
    {
        operate(firstNum,operation,secondNum);
        secondNum="";
    }
    operation = opr;
    smallDisplay.textContent = `${firstNum} ${opr} `;
    clearLargeScreen = true;
}