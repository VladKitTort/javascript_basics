"use strict"

function divisionNumber(num){
    num = Math.abs(+num);
    if (isNaN(num)){
        console.log("Вы ввели не число.");
    }else if (num / 1000 >= 1){
        console.log("Число больше 999.");
    }else if ((num % 1) > 0){
        console.log("Вы ввели не целое число.");
    }else{
        let numberObject = {};
        numberObject["units"] = num % 10;
        numberObject["tens"] = Math.trunc(num / 10) % 10;
        numberObject["hundreds"] = Math.trunc(num / 100);
        return numberObject;
    }
}

let numInput = prompt("Введите целое число от 0 до 999.");
console.log(divisionNumber(numInput));

