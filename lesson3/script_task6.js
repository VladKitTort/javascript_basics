"use strict";

function mountain(height){
    for (let i = 1; i <= height; i++){
        console.log("X".repeat(i))
    }
}

let height = 20;
mountain(height);