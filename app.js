let result = document.querySelector("#result");

function Solve(val) {
    result.value += val;
}
function Result() {

    let num2 = result.value;

    if (num2.includes('sin')) {
        let angle = parseFloat(num2.replace('sin', ''));
        result.value = Math.sin(angle * Math.PI / 180);
    } else if (num2.includes('cos')) {
        let angle = parseFloat(num2.replace('cos', ''));
        result.value = Math.cos(angle * Math.PI / 180);
    } else if (num2.includes('tan')) {
        let angle = parseFloat(num2.replace('tan', ''));
        result.value = Math.tan(angle * Math.PI / 180);
    } else if (num2.includes('√')) {
        let angle = parseFloat(num2.replace('√', ''));
        result.value = Math.sqrt(angle);
    } else if (num2.includes('log')) {
        let angle = parseFloat(num2.replace('log', ''));
        result.value = Math.log10(angle);
    } else if (num2.includes('^')) {
        let [base, power] = num2.split('^').map(Number);
        result.value = Math.pow(base, power);
    } else if (num2.includes('!')) {
        let angle = parseFloat(num2.replace('!', ''));
        result.value = factorial(angle);
    } else if (num2.includes('1/')) {
        let angle = parseFloat(num2.replace('1/', ''));
        result.value = 1 / angle;
    } else {
        result.value = eval(num2.replace('x', '*'));
    }
}
function factorial(n) {
    let result = 1;
    for (let i = 2; i <= n; i++) {
        result *= i;
    }
    return result;
}
function Clear() {
    result.value = '';
}
function Back() {
    result.value = result.value.slice(0, -1);
}