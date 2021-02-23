var numbers = [3, 56, 2, 48, 5];

//Map -Create a new array by doing something with each item in an array.

// Map vs forEach
// ************** Map returns output that is an array. with forEach you have to
//create empty arrat Map is more concise.
// function double(x) {
//   return x * 2;
// }

// const newNumbers = numbers.map(double);

// console.log(newNumbers);

// **************** Map v2 annonymous function

const newNumbers = numbers.map(function (x) {
  return x * 2;
});

console.log(newNumbers);

// ************** forEach
// var newNumbers = [];

// function double(x) {
//   newNumbers.push(x * 2);
// }

// numbers.forEach(double);

// console.log(newNumbers);

// ************** Filter - Create a new array by keeping the items that return true.

// var numbers = [3, 56, 2, 48, 5];

// const newNumbers = numbers.filter(function (num) {
//   return num > 10;
// });

// console.log(newNumbers);

// ***********Reduce - Accumulate a value by doing something to each item in an array.

// var numbers = [3, 56, 2, 48, 5];
// console.log(numbers);
// const newNumbers = numbers.reduce(function (accumulator, currentNumber) {
//   console.log("accumulator = " + accumulator);
//   console.log("currentNumber = " + currentNumber);
//   return accumulator + currentNumber;
// });

//console.log(newNumbers);

// ***************** Find - find the first item that matches from an array.
// var numbers = [3, 56, 2, 48, 5];

// const newNumber = numbers.find(function (num) {
//   return num > 10;
// });
// console.log(newNumber);
// ************** FindIndex - find the index of the first item that matches.

// var numbers = [3, 56, 2, 48, 5];

// const newNumber = numbers.findIndex(function (num) {
//   return num > 10;
// });
// console.log(newNumber);

// import emojipedia from "./emojipedia";

// //console.log(emojipedia[0].meaning)

// const emoMeaning = emojipedia.map(function (emo) {
//   return emo.meaning.substring(0, 100);
// });
// console.log(emoMeaning);
