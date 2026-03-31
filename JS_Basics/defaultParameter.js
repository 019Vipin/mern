// let simpleInterest = (P , T=2 , R) => {return(P*T*R)/100};
// After Default parameter all remaining parentheses must be empty 
//A default parameter gives a value only when argument is NOT provided
let simpleInterest = (P , T , R=10) => {return(P*T*R)/100};

console.log(simpleInterest(1000,4,40)); 
console.log(simpleInterest(1000,4));
