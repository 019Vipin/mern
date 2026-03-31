"use strict";
// Hoisting:
// JavaScript moves declarations (variables and functions) to the top of their scope before execution.
// Only declarations are hoisted, not assignments.

// Function Hoisting
console.log(sum(10, 45));

function sum(a, b) {
    return a + b;
}

// var Hoisting
console.log(x);
var x;
x = 10;

// let Hoisting (Temporal Dead Zone)
console.log(y);
let y;
y = 10;

// Strict mode example
i = 10;
console.log(i);