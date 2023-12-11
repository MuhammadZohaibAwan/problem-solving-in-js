


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

