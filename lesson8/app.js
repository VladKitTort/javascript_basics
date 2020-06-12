"use strict"

let textResult = document.getElementById('result').innerHTML;

function calk(obj){
    let num1 = document.getElementById('num1').value;
    num1 = parseFloat(num1);
    let num2 = document.getElementById('num2').value;
    num2 = parseFloat(num2);
    let result;
    if (obj.id == "sum"){
        result = num1 + num2;
    } else if (obj.id == "deff"){
        result = num1 - num2;
    }
    document.getElementById('result').innerHTML = textResult + " " + result;
}