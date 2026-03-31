// Primitive Make Copy 
let a = 10;
let b = a;

a++;
console.log(a); 
console.log(b); 

// Reference Points Memory Location 
let c = {value:10};
let d = c;
//c stores reference (address) of object
//d = c → both point to same object in memory
c.value++;
console.log(c.value);
console.log(d.value);
