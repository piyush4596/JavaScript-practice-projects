// 1. write a JavaScript program to check two numbers and return true if one of the number is 100
// or if the sum of the two numbers is 100

// const isEqualTo100 = (a, b) => a === 100 || b === 100 || a + b === 100;
// const isEqualTo100 = (a, b) => {
//   return a === 100 || b === 100 || a + b === 100;
// };

// console.log(isEqualTo100(100, 0));
// console.log(isEqualTo100(0, 100));
// console.log(isEqualTo100(60, 40));
// console.log(isEqualTo100(50, 70));
// console.log(isEqualTo100(10, 20));
///////////////////////////////////////////////////////////////////////////
// 2. write a javascript program to get the extension of a file.

// getExtension = function (str) {
//   return str.slice(str.lastIndexOf("."));
// };

// console.log(getExtension("piyush.jkl"));
////////////////////////////////////////////////////////////////////////
//3. write a javascript program to replace every character in a given string with the character following it in the alphabet

// The fromCharCode and charCodeAt methods in JavaScript are used for converting between characters and their corresponding Unicode values.
// const moveForwardChar = (str) =>
//   str
//     .split("")
//     .map((char) => String.fromCharCode(char.charCodeAt(0) + 1))
//     .join("");

// console.log(moveForwardChar("abcdef123"));
/////////////////////////////////////////////////////////////////////////

//4. write program to get the current date

// const formateDate = (date = new Date()) => {
//   const days = String(date.getDate()).padStart(2, 0);
//   const months = String(date.getMonth() + 1).padStart(2, 0);
//   //   months is 0 based index in js and use string for padstart
//   const years = date.getFullYear();
//   return `${days}/${months}/${years}`;
// };
// console.log(formateDate());
/////////////////////////////////////////////////////////////////////////

//5. write a javascrpt program to create a new string adding "New!" in front of a given string.
//  If the given styring begins with New! already then return the original string.

// const addNew = (str) => (str.indexOf("New!") === 0 ? str : `New! ${str}`);
// console.log(addNew("New! offer"));
//////////////////////////////////////////////////////////////////////////

//6. write a js to create a new string from a given string taking the first 3 char and the last 3 char
// and add them together. the string length must be 3 or more, if not the og str is returned
