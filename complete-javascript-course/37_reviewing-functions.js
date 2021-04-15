// The Complete JavaScript Course 2021
// JavaScript Fundamentals — Part 2
// 37. Reviewing Functions

// Function declaration
// Function declarations can be used before they're initialized in the code
function calculateAge(yearOfBirth) {
  return 1977 - yearOfBirth;
}

// Function expression
// Function expressions are essentially function values that are stored in a variable
const calculateAge = function (yearOfBirth) {
  return 1977 - yearOfBirth;
};

// Arrow function
// Arrow functions have no 'this' keyword
const calculateAge = (yearOfBirth) => 1977 - yearOfBirth; // implicit return

// Three different ways of writing functions, but they all work in a similar way: receive input data, transform data, and then output data.
