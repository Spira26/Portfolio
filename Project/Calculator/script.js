const resultElement = document.getElementById('result')
const input1 = document.getElementById('input1')
const input2 = document.getElementById('input2')
const submitBtn = document.getElementById('submit')
const plusBtn = document.getElementById('plus')
const minusBtn = document.getElementById('minus')
const multiplicBtn = document.getElementById('multiplic')
const divisionBtn = document.getElementById('division')
const symbolP = document.getElementById('symbolP')
let action = '+'

plusBtn.onclick = function () {
    action = '+'
    SymbolReturn(result)
}

minusBtn.onclick = function () {
    action = '-'
    SymbolReturn(result)
}

multiplicBtn.onclick = function () {
    action = '*'
    SymbolReturn(result)
}

divisionBtn.onclick = function () {
    action = '/'
    SymbolReturn(result)
}

function SymbolReturn(result) {
    if (action == '+') {
        symbolP.textContent = '+'
    } else if (action == '-') {
        symbolP.textContent = '-'
    } else if (action == '*') {
        symbolP.textContent = '*'
    } else {
        symbolP.textContent = '/'
    }

}

function printResult(result) {
    if (result < 0) {
        resultElement.style.color = 'red'
    } else {
        resultElement.style.color = 'green'
    }
    resultElement.textContent = result
}

function computeNumbersWithAction(inp1, inp2, actionSymbol) {
    const num1 = Number(inp1.value)
    const num2 = Number(inp2.value)
    if (action == '+') {
        return num1 + num2
    } else if (action == '-') {
        return num1 - num2
    } else if (action == '*') {
        return num1 * num2
    } else if (action == '/') {
        return num1 / num2
    }
}

submitBtn.onclick = function () {
    const result = computeNumbersWithAction(input1, input2, action)
    printResult(result)

}