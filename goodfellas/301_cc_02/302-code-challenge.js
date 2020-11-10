/* ---- Challenge 02 ------------------------- */
// Write a function that takes a string as an argument (variable a), and returns
// the string with " The end." appended to the end of it.  Can use a return(), 
// but one is not needed with ES6. 

const a = 'My only friend...';
// single arrow functions with only one argument do not need parenthesis or {},
// and execute an "implicit return," which eliminates the need for a return()
// statement.  See the appendix near the end of this file for more information. 

// takes a string as a parameter, returns it with " The end." added to the end.
const appendTheEnd = str => str + " The end."; // implicitly returns the new string
const appendTheEnd2 = str => 

`${str} The end.`; // template literal version

// run the function on variable a, and assign the new string to variable b
const b = appendTheEnd(a);

// console.log both a and b; results should be as follows
console.log(a); // "My only friend..."
console.log(b); // "My only friend... The end."
/* ------------------------------------------- */

/* ---- Challenge 03 ------------------------- */

// Write a function that takes the c[] array ([1, 2, 3]), and adds
// the first element to the array without using a return() statement
// After running the function, the array should console.log() as [1, 2, 3, 1]

// Though c[] is a constant, the elements of the array may be changed
const c = [1, 2, 3];

// takes an array of numbers as an argument, and adds the 0 array element to 
// to the end of it.  No return required, since it is implicit
const addArr = arr => arr.push(arr[0])

// adds 1 to array index [3]
addArr(c);
// test it
console.log(c); // [1, 2, 3, 1]

/* ------------------------------------------- */

/* APPENDIX */
 

function sum(a, b) {
    return a + b;
}

const sum = (a, b) => a + b;





// sum two numbers
// function sum(a, b) {
//     return a + b;
// }
// var result = sum(10, 5); // 15
// console.log(result)


var string = 'Once upon a time... ';
function theEnd(str) {
    return str + " The end.";
}

// var result = theEnd(string);
// console.log(result);

// console.log(theEnd(string));
