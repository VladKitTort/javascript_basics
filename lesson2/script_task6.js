"use strict"

function declOfNum(number, titles) {  
    let cases = [2, 0, 1, 1, 1, 2];  
    return titles[ (number%100>4 && number%100<20)? 2 : cases[(number%10<5)?number%10:5] ];  
}

let count = +(prompt('Введите сумму зачисления'));
alert(`Ваша сумма в ${count} ${declOfNum(count, ['рубль', 'рубля', 'рублей'])} успешно зачислена.`);

// Честно сперто с https://gist.github.com/realmyst/1262561


let rub = ''
if ((count % 100) >= 5 && (count % 100) <= 20) {
    rub = 'рублей'
}
else if ((count % 10) == 1) {
    rub = 'рубль'
}
else if ((count % 10) >= 2 && (count % 10) <= 4) {
    rub = 'рубля'
}
else {
    rub = 'рублей'
}
alert(`Ваша сумма в ${count} ${rub} успешно зачислена.`);