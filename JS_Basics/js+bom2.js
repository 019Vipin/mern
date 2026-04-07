//performanceNow.js
// It is standard way to measure how long your code taken to run.
let size = 1000;
let arr = Array(size).fill(1);
// console.log(arr);

// Iterate With Normal For Loop 
let t1 = performance.now();
for(let i = 0; i < size;i++){
    console.log(arr[i]);
}
let t2 = performance.now();
console.log(`Normal Loop Takes Time to Run ${t2-t1}ms`);


// Iterate with for of 
t1 = performance.now();
for(let i of arr)
{
    console.log(i);
}
t2 = performance.now();
console.log(`For Of Takes Time to Run ${t2-t1}ms`);

// For Each Loop 
t1 = performance.now();
arr.forEach((value)=>{
    console.log(value);
});
t2 = performance.now();
console.log(`For Each Takes Time to Run ${t2-t1}ms`);

// While Loop 
t1 = performance.now();
let i = 0;
while (i < size) {
    console.log(arr[i]);
    i++;
}
t2 = performance.now();
console.log(`While Loop Takes Time to Run ${t2-t1}ms`);



//documentFragment.js
// using document fragment is increase speed and optimise code
let fruits = ["Mangoes","Oranges","Bananas","Strawberry","Apple"];

let list = document.querySelector('ul');
console.log(list);

let t3 = performance.now();
for(let key of fruits)
{
    let item = document.createElement('li');
    item.textContent = key;

    list.appendChild(item);
}
let t4 = performance.now();
console.log(`Adding one by one takes time ${t4 - t3}ms`);

let listOL = document.querySelector('ol');
console.log(list);

t3 = performance.now();
let fragment = document.createDocumentFragment();
for(let key of fruits)
{
    let item = document.createElement('li');
    item.textContent = key;

    fragment.appendChild(item);
}
listOL.appendChild(fragment);
t4 = performance.now();
console.log(`Fragment takes time ${t4 - t3}ms`);



//callStack.js
function a() {
    console.log('hi');
}

function b() {
    console.log('Hello');
}

a();
b();


//callStack2.js
function a() {
    console.log('hi');
    b();
}

function b() {
    console.log('Hello');
}

a();


//setTimeout.js
setTimeout(() => {
    console.log("This is PRint after 5 Seconds");
}, 5000);


//eventLoop.js
setTimeout(() => {console.log("this is the first message")}, 5000);
setTimeout(() => {console.log("this is the second message")}, 3000);
setTimeout(() => {console.log("this is the third message")}, 1000);

// Output:

// this is the third message
// this is the second message
// this is the first message



//EventLoop2.js
console.log("Hello");
setTimeout(() => {console.log("Function")}, 5000);
console.log("hy");




