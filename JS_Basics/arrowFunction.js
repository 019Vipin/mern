//The arrow => is just syntax to define a function in a shorter way
/*
Normal Function:
function (a,b) { return a+b }

Arrow Function:
(a,b) => a+b
*/
let add = (a,b) =>
{
    let sum = a+b;
    return sum; 
}

let num1 = Math.round(Math.random() * 1000);
let num2 = Math.round(Math.random() * 1000);
console.log(add(num1,num2));   