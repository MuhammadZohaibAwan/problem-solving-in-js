


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

// function minMax(arr) {  
//   return [Math.min(...arr),Math.max(...arr)]
// }

// console.log(minMax([1,2,3,4,5]))




// 1**return sum of all +ve numbers of an array 
// function positiveSum(arr) {

//   let positives = [];
//   let sum = 0;
  
//   for(let i =0;i <= arr.length ;i++) {
//     if (arr[i] > 0) {
//       sum += arr[i]; //accumulation if in array 5 and current element is 1 = 6
//     }
//   }
//   return sum
// }


// const max = [1, 2, 5, -6, 10, 100];
// const result = positiveSum(max);
// console.log("Sum of positive numbers:", result);



// 1** negative sum 
// function negSum (neg) {
  
//   let negativeSum = 0;

//   for(let i = 0; i<= neg.length ; i++) {
//     if(neg[i] < 0 ){
//       negativeSum += neg[i];
//     }
//   }
//     return negativeSum
// }

// const negatives = [1, 2, 5, -6, 10, 100];
// const res = negSum(negatives)
// console.log("Sum of negative numbers:", res);





//**2 make given number negative
// **rough
// let age = 3
// const agex = -Math.abs(age)
// console.log(agex)
//  or we can make any number -ve  : return (-number)
// **rough

// function alawaysNegative (n) {
//   if (n > 0 ) {
//     return -Math.abs(n)
//   }else if (n < 0) {
//     return n
//   }else return 0
  
// }

// console.log(alawaysNegative(0.12))



//** 3reverse a given string 
// function solution(str){
// return str.split('').reverse().join('');
// }


// console.log(solution("max"))



// ** 4 make a number negative 
// function opposite(number) {
  //your code here
  // return (-number)
// }


//  **5 remove first and last char from string 
// function remove (str) {
// return str.slice(1,-1)
//  can also solve this with :let newStr = str.substring(1);
// }

// console.log(remove("hello parker"))



// **6 square+sum of given number 
// function squareSum(num) {
//   let sum = 0;
  
//   for(let i = 0;i<num.length;i++) {
//     sum += Math.pow(num[i],2)
//   }
//   return sum;
// }

// const exampleArray = [1, 2, 2];

// const result = squareSum(exampleArray)
// console.log(result)
// **1. repeat string n times 
// function repeatStr (n, s) {
//   return s.repeat(n)
// }

// console.log(repeatStr(3,"hello!"))

// ** 2. Write a program that finds the summation of every number from 1 to num. 
// for example 5 is number so (1+2+3+4+5) = 15 

// function summation(n) {
//   let sum = 0 ;
//   for (let i=0 ; i <= n; i++){
    
//     sum += i;
//   }
//   return sum ;
// }

// console.log(summation(5))



// ** 3. remove white spaces from given string 

// function remove(n) {
//   return n.replaceAll(' ','')
// }

// console.log(remove("8 j 8   mBliB8g  imjB8B8  jl  B"))

//trim vs replaceAll(' ','')
// The replaceAll(' ', '') method in JavaScript replaces all spaces in a string with an empty string, effectively removing all spaces. However, trim() works differently.

// The trim() method in JavaScript removes whitespace from both ends of a string but doesn't remove spaces within the string itself. If you want to remove all spaces within a string, trim() alone won't suffice. You would need to use replaceAll(' ', '') or a similar method.




// ** 4 count the sheeps only true 

// function countSheeps(sheep) {
//   let val = 0
//   for(let i =0; i < sheep.length; i++) {
    
//     if(sheep[i] === true) {
//      val++
//     }
//   }
//     return val
// }
// // Test case
// let sheeps = [true, true, true, false, true, true, true, true, true, false, true, false, true, false, false, true, true, true, true, false, false, true, true];
// console.log(countSheeps(sheeps)); // Output will be the count of true values in the array

// for foreach map 
// However, using map() in this context isn't ideal because map() is used to transform each element of an array and return a new array based on the transformation. In this case, you're not transforming the elements but rather counting occurrences, so forEach() is a more suitable choice.

// The forEach() method iterates through each element in the array, and for each element, it checks if it's equal to true. If it is, it increments the count variable. Finally, it returns the total count of true values.

// for Loop:
// The for loop is a basic looping construct in most programming languages, including JavaScript. It allows you to execute a block of code repeatedly based on a condition.

// forEach() Method:
// forEach() is a method available for arrays in JavaScript. It's a higher-order function that executes a provided function once for each array element.

// Differences Summary:
// Syntax: for loop has more explicit syntax, while forEach() uses a callback function.
// Control: for loop provides more control over iteration variables and flow.
// Use Cases: for loop is versatile and can be used in various looping scenarios. forEach() is specific to iterating over arrays and performs an operation on each element without explicitly managing the index.
// Generally, if you need to simply iterate over elements in an array and perform an operation on each element, forEach() is often more concise and preferred. However, if you require more control or need to perform different types of iterations, the for loop might be a better choice.

//** 5 find the smallest integer from array 

// function min (arr) {
// return Math.min(...arr)
// }
// console.log(min([-900,2,9,12,10,900]))
// spread operator vs rest operator 

//** 6 convert string into number
// const stringToNumber = function(str){
  
//  return parseInt(str);
// }





