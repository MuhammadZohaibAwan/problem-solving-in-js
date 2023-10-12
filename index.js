


// JavaScript fundamental (ES6 Syntax) 

//Exercise-1 
// Write a JavaScript program to compare two objects to determine if the first contains equivalent property values to the second one.


//** 
// const check = (first,second) =>
//  Object.keys(second) // converts the obje and return an array of properties  
// .every(key =>  // executes a function and check if every property meets certain condition or not 
// first.hasOwnProperty(key)  // check if object have this property or not 
// &&
// first[key] === second[key]);
// console.log(check({ age: 25, hair: 'long', beard: true }, { hair: 'long', beard: true })); // true
//**

//console.log(Object.keys(sales)) // converts the obj and returns an array 
//console.log(sales.hasOwnProperty("Rob")) // check if an object has a property




//Exercise-2
// Write a JavaScript program to copy a string to the clipboard.
// skipping this exer as this is using vanilla js legacy code 


//Exercise-3
// Find the Smallest and Biggest Numbers
// Create a function that takes an array of numbers and return both the minimum and maximum numbers, in that order.

// minMax([1, 2, 3, 4, 5]) ➞ [1, 5]
// minMax([2334454, 5]) ➞ [5, 2334454]
// minMax([1]) ➞ [1, 1]

function minMax(arr) {  
  return [Math.min(...arr),Math.max(...arr)]
}

console.log(minMax([1,2,3,4,5]))



