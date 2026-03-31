// Data Types 
/*
1) Primitive Data Types
- String
  → Used to represent text (characters)
- Number
  → Used to represent numeric values (integers and decimals)
- Boolean
  → Represents true or false values
- Undefined
  → Variable declared but not assigned any value
- Null
  → Represents intentional absence of value

2) Non-Primitive Data Types
- Array
  → Collection of multiple values stored in a single variable
  → Indexed (starts from 0)
- Object
  → Collection of key-value pairs
  → Used to store structured data

Primitive Types:
- Immutable (cannot be changed directly)
- Stored by value

Non-Primitive Types:
- Mutable (can be modified)
- Stored by reference
*/
// Primitive Data Types 
// #1 - String
let firstName = "vipin";
let lastName = 'kumar';
let fullName = firstName + " " + lastName;
console.log(firstName);
console.log(lastName);
console.log(fullName);

// #2 - Number 
let num = 10.6;
console.log(num);
num = 10;
console.log(num);

// #3 - Boolean
let bool = true;
bool ? console.log("True") : console.log("False");

// #4 - Undefined
let x;
console.log(x);

// #5 - Null
let y = null;
console.log(y);

// Non - Primitive 
// #1 - Arary 
let arr = [1, 2, 3, 4, 5];
console.log(arr);
arr = ['my','name','is','vipin'];
console.log(arr);
console.log(arr[0]);

// #2 - Object 
let obj = {
    "Name" : 'vipin',
    "Age" : 20
};
console.log(obj["Name"]);