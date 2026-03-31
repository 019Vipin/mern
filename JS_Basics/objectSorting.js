const maxSpeed = {
    car: 300, 
    bike: 60, 
    motorbike: 200, 
    airplane: 1000,
    helicopter: 400, 
    rocket: 8 * 60 * 60
};

const sortable = Object.fromEntries(
    Object.entries(maxSpeed).sort(([,a],[,b]) => a-b)
);

console.log(sortable);

// Object.entries() → Object → Array
// sort() → Sorts array (custom logic using callback)
// Object.fromEntries() → Array → Object
/*
< 0	  a comes before b
> 0	  b comes before a
= 0	  no change
*/