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

if (sign == '+') {
    alert(`Ссумма ваших чисел ровна ${sum(a, b)}`)
}
else if (sign == '-') {
    alert(`Разность ваших чисел ровна ${diff(a, b)}`)
}
else if (sign == '/') {
    alert(`Ссумма ваших чисел ровна ${divis(a, b)}`)
}
else if (sign == '*') {
    alert(`Частное ваших чисел ровна ${multi(a, b)}`)
}
else {
    alert('Ввод не верный.')
}