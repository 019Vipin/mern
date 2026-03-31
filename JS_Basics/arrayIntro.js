let arr = [1,2,4,5,6,9,8];
console.log(arr);
for(let value of arr)
{
    console.log(value);
}

let arr1 = [1,2,5,4,7];
console.log(arr1);

// Insertion at Beginning of Array
arr1.unshift(10);
console.log(arr1);

// Insertion at End of Array 
arr1.push(8);
console.log(arr1);

// Insertion at Middle 
//array.splice(start, deleteCount, item1, item2, ...)
arr1.splice(3,0,100);
console.log(arr1);

// Searching  On Arrays
let arr2 = [1, 2, 5, 4, 7];
console.log(arr);

console.log(arr2.indexOf(5)); 
console.log(arr2.indexOf(50)); 

console.log(arr2.includes(5)); 
console.log(arr2.includes(50)); 

let arr3 = [1,2,5,4,7];
console.log(arr3);

// Remove at Beginning of Array
arr3.shift();
console.log(arr3);


// Remove at End of Array 
arr3.pop();
console.log(arr3);


// Remove at Middle 
arr3.splice(1,1);
console.log(arr3);

// Three ways to empty an array

// #1 - arr4 = []
let arr4 = [1,2,5,4,7];
console.log(arr4);
let brr = arr4;
arr4 = [];
console.log(arr4);
console.log(brr);

// #2 - length = 0 
let crr = brr;
brr.length = 0;
console.log(brr);
console.log(crr);

// #3 - splice 
let array = [1,5,6,7,8,9];
console.log(array);
array.splice(0, array.length);
console.log(array);

// Combines two array
let first = [1, 2, 3, 4];
let second = [4, 3, 2, 1];

console.log(first, second);

let combine = first.concat(second);
console.log(combine);

//sliced
/*
arr.slice()	[1,2,3,4,5,6]	Copy entire array
arr.slice(0,-1)	[1,2,3,4,5]	From start to 1 element before last
arr.slice(2,5)	[3,4,5]	From index 2 (inclusive) to index 5 (exclusive)
*/
let drr= [1,2,3,4,5,6];
console.log(drr);
let newArray = drr.slice();
console.log(newArray);
newArray = drr.slice(0, -1);
console.log(newArray);
newArray = drr.slice(2,5);
console.log(newArray);

// Combines two array
let first1 = [1, 2, 3, 4];
let second2 = [4, 3, 2, 1];

let combine1 = [...first1, ...second2];
console.log(combine1);

//joinedArray
let first3= [1, 2, 3, 4];

let joined = first3.join('__');
console.log(joined);

//split() → converts string → array
//forEach() → loops through array without returning anything
let message = "My Name is Priyansh Patel";
console.log(message);

let arr7 = message.split(" ");
console.log(arr7);

arr7.forEach(e => console.log(e)); 


//reverse array
let first4 = [1, 2, 3, 4];
console.log(first4);

let reverse = first4.reverse();
console.log(reverse);


//sortArray
let arr8= [10,45,30,46,5,14,67,46];
console.log(arr8);

arr8.sort();
console.log(arr8); // This sort function sort as a string //Comparison is done lexicographically (dictionary order)

// so we have to sort by callback function 
/*
sort() can take a callback function: (a,b) => a-b
If (a-b) < 0 → a comes before b
If (a-b) > 0 → b comes before a
If (a-b) == 0 → no change
*/
let sortedArray = arr8.sort((a,b) => a-b);
console.log(sortedArray);  


//filterArray
let arr9 = [1,23,53,5,6,53,5,4,43,45,7,48,67,8,7,4,6,7,8,5];
console.log(arr9);

// Filter which values are greater than 4 and divde by 4
let ans = arr9.filter(value => value > 4 && value % 4 === 0);
console.log(ans);

//reduce
let arr11 = [1,2,4,5,6];
/*
.reduce() is an array method that reduces the array into a single value
It takes a callback function (accumulator, currentValue) => ...
*/
let sum = arr11.reduce((totalSum,val) => totalSum + val,0);
console.log(sum);

//chaining
let arr12 = [1,2,3,4,5,6];
let chain = arr12.filter(val => val > 2).map(num => num*num).filter(val => val&1);
console.log(chain);