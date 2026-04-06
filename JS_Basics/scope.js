// Scope
// var   → Function scoped (ignores block {})
// let   → Block scoped (works inside {})
// const → Block scoped (works inside {})

// Redeclaration
// var   → Allowed
// let   → Not allowed
// const → Not allowed

// Reassignment
// var   → Allowed
// let   → Allowed
// const → Not allowed

// Initialization
// var   → Optional (default = undefined)
// let   → Optional (but not accessible before initialization - TDZ)
// const → Mandatory (must assign value at declaration)

// Hoisting
// var   → Hoisted and initialized with undefined
// let   → Hoisted but not initialized (TDZ)
// const → Hoisted but not initialized (TDZ)

// Block Behavior
// var   → Ignores block scope {}
// let   → Respects block scope {}
// const → Respects block scope {}

// Best Practice
// var   → Avoid using
// let   → Use when value needs to change
// const → Use when value should not change (recommended)

// #1-var
console.log("var");
var a = 10;
console.log(a);

a = 20;
console.log(a);

{
var a = 30;
}
console.log(a);

// #2 - Let
console.log("Let");
let b = 10;
console.log(b);

// reassignment
b = 20;
console.log(b);

//block scope
{
let ba = 40;
console.log(ba);
}

// #3-const
console.log("const");

const c = 10;
console.log(c);

console.log(c);