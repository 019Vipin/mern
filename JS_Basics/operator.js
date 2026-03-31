// #1 - Arithmetic Operators
let num1 = 10;
let num2 = 20;

console.log("Arithmetic Operators");
console.log(num1 + num2);
console.log(num1 - num2);
console.log(num1 * num2);
console.log(num1 / num2);
console.log(num1 % num2);

console.log("Post and Pre Increment and Decrement");
console.log(num1++ + ++num2);
console.log(++num1 + num2--);
console.log(num1-- - num2--);
console.log(num1-- - --num2);
console.log(++num1 - --num2);
console.log(++num1 + --num2);

// #2 - Assignment Operators
let a = 5;
console.log("Assignment Operators");
console.log(a);
a += a;
console.log(a);
a -= 4;
console.log(a);
a *= 5;
console.log(a);
a /= 2;
console.log(a);
a %= 7;
console.log(a);

// #3 - Comparison Operators
let n1 = 5;
let n2 = '5';
console.log("Comparison Operators");
console.log(n1 == n2);
console.log(n1 === n2);
console.log(n1 != n2);
console.log(n1 !== n2);
console.log(n1 >= n2);
console.log(n1 <= n2);
console.log(n1 > n2);
console.log(n1 < n2);

// #4 - Bitwise Operators
let bo = 10;
console.log("Bitwise Operators");
console.log(bo & 3);
console.log(bo | 3);
console.log(bo ^ 3);
console.log(~bo);
console.log(bo >> 1);
console.log(bo << 1);

// #5 - Logical Operators
let lo1 = true; 
let lo2 = false;
console.log("Logical Operators");
console.log(lo1 && lo2);
console.log(lo1 || lo2);
console.log(!lo1);
console.log(!lo2);

// #6 - Ternary Operator
let age = 18;
age > 18 ? console.log("You can Vote") : console.log("You can not vote");