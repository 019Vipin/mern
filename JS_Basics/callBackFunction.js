// Searching on Objects 
let objArray = [
    {
        No : 1,
        Name : 'Priyansh'
    }
    ,
    {
        No : 2,
        Name : 'Prish'
    }
]

console.log(objArray); 

console.log(objArray.includes({No:1,Name:"Priyansh "}));

// For this we use callback function 
let obj = objArray.find((obj) => obj.Name === "Priyansh");
console.log(obj);

/*
A callback function is:
A function passed as an argument to another function
- In my case
(obj) => obj.Name === "Priyansh"
This is the callback function
It is passed inside:
objArray.find( ... )
*/
