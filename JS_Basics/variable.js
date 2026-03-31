/*
1) var
- Scope: Function scoped (NOT block scoped)
- Redeclaration: Allowed
- Reassignment: Allowed
- Hoisting: Yes (initialized with undefined)

2) let
- Scope: Block scoped ({ })
- Redeclaration: NOT allowed in same scope
- Reassignment: Allowed
- Hoisting: Yes (but in Temporal Dead Zone)

3) const
- Scope: Block scoped ({ })
- Redeclaration: NOT allowed
- Reassignment: NOT allowed
- Must be initialized at declaration
- Hoisting: Yes (Temporal Dead Zone)

var   → function scoped, can redeclare, can reassign  
let   → block scoped, cannot redeclare, can reassign  
const → block scoped, cannot redeclare, cannot reassign  

- Use const by default  
- Use let if value needs to change  
- Avoid var (can cause bugs)
*/

// Three wAys to create variable
// #1
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

// let b = 20; - Error
b = 20;
console.log(b);

{
  let ba = 40;
  console.log(ba);
}
// console.log(ba); - Error

// #3 
console.log("const");

const c = 10;
console.log(c);

// c = 20; //Error
console.log(c);
