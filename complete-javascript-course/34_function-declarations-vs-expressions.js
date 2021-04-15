// The Complete JavaScript Course 2021
// JavaScript Fundamentals — Part 2
// 34. Function Declarations vs. Expressions

// Function declaration
// Function declarations can be called before they're defined/initialized (see "hoisting").
function calculateAge1(birthYear) {
  return 2021 - birthYear;
}

const age1 = calculateAge1(1977);
console.log(age1);

// Function expression
// A function without a name is called an anonymous function.
// Function expressions cannot be called before they're defined/initialized.
// Functions produce values, so a function expression can be thought of as a value that is set to a variable.
const calculateAge2 = function (birthYear) {
  return 2021 - birthYear;
};

const age2 = calculateAge2(1977);
console.log(age1, age2);

// Functions are not types; they're values.

// JS Hoisting (https://www.w3schools.com/js/js_hoisting.asp)

// 1. JavaScript declarations are hoisted
// In JavaScript, a variable can be declared after it has been used.
// In other words, a variable can be used before it has been declared.
// To understand this, you have to understand the term "hoisting."
// Hoisting is JavaScript's default behavior of moving all declarations to the top of the current scope (to the top of the current script or the current function).

// 2. The let and const keywords

// 3. JavaScript Initializations are Not Hoisted
// JavaScript only hoists declarations, not initializations.

// 4. Declare your variables at the top!
// Hoisting is (to many developers) an unknown or overlooked behavior of Javascript.
// If a developer doesn't understand hoisting, programs may contain bugs (errors).
// To avoid bugs, always declare all variables at the beginning of every scope.
// Since this is how JavaScript interprets the code, it is always a good rule.

// JavaScript in strict mode does not allow variables to be used if they are not declared.
