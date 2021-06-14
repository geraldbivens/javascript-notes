// Conditionals 6

// 1. Write a function called "or".
// Given 2 boolean expressions, "or" returns true or false, corresponding to the '||' operator.
// Notes:
// • Do not use the || operator.
// • Use ! and && operators instead.

function or(exp1, exp2) {
  if (exp1 && exp2) {
    return true;
  }
  if (exp1 && !exp2) {
    return true;
  }
  if (!exp1 && exp2) {
    return true;
  }
  if (!exp1 && !exp2) {
    return false;
  }
}

var output = or(true, false);
console.log(output); // --> true;

// 2. Write a function called "isEitherEvenOrAreBoth7".
// Given two numbers, 'isEitherEvenOrAreBoth7' returns whether at least one of them is even, or, both of them are 7.

function isEitherEvenOrAreBoth7(num1, num2) {
  if (num1 % 2 === 0 || num2 % 2 === 0) {
    return true;
  } else if (num1 === 7 && num2 === 7) {
    return true;
  } else {
    return false;
  }
}

var output = isEitherEvenOrAreBoth7(3, 7);
console.log(output); // --> false

var output = isEitherEvenOrAreBoth7(2, 3);
console.log(output); // --> true

// 3. Write a function called "isEitherEvenAndLessThan9".
// Given two numbers, 'isEitherEvenAndLessThan9' returns whether at least one of them is even, and, both of them are less than 9.

function isEitherEvenAndLessThan9(num1, num2) {
  var condition1Met = num1 % 2 === 0 || num2 % 2 === 0;
  var condition2Met = num1 < 9 && num2 < 9;

  if (condition1Met && condition2Met) {
    return true;
  } else {
    return false;
  }
}

var output = isEitherEvenAndLessThan9(2, 4);
console.log(output); // --> true

var output = isEitherEvenAndLessThan9(72, 2);
console.log(output); // --> false
