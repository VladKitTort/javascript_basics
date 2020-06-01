"use strict"

function sum(a, b) {
    return (a + b)
}

function diff(a, b) {
    return (a - b)
}

function divis(a, b) {
    return (a / b)
}

function multi(a, b) {
    return (a * b)
}

let a = +(prompt('Введите первое число'));
let b = +(prompt('Введите второе число'));
let sign = prompt('Введите один из операторов "+", "-", "/" или "*"');

switch(sign) {
    case '+' :
        alert(`Ссумма ваших чисел ровна ${sum(a, b)}`);
        break;
    case '-':
        alert(`Разность ваших чисел ровна ${diff(a, b)}`);
        break;
    case '/':
        alert(`Ссумма ваших чисел ровна ${divis(a, b)}`);
        break;
    case '*':
        alert(`Частное ваших чисел ровна ${multi(a, b)}`);
        break;
    default:
        alert('Ввод не верный.');
        break;
}