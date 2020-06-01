"use strict";

function evensOdds(num) {
    for (let i = 0; i <= num; i++)
        if (i === 0) {
            console.log(`${i} - это ноль.`)
        } else if (i % 2 != 0) {
            console.log(`${i} - не четное число.`)
        } else if (i % 2 == 0) {
            console.log(`${i} - четное число.`)
        }
}

let num = 100;

evensOdds(num);