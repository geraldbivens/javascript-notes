// Math 1

// 1. Write a function called "average".
// Given two numbers, "average" returns their average.

function average(num1, num2) {
  return (num1 + num2) / 2;
}

var output = average(4, 6);
console.log(output); // --> 5

// 2. Write a function called "computeAreaOfATriangle".
// Given the base and height of a triangle, "computeAreaOfATriangle" returns its area.

function computeAreaOfATriangle(base, height) {
  return (base * height) / 2;
}

var output = computeAreaOfATriangle(4, 6);
console.log(output); // --> 12

// 3. Write a function called "cube".
// Given a number, "cube" returns the cube of that number.

function cube(num) {
  return num ** 3;
}

var output = cube(3);
console.log(output); // --> 27

// 4. Write a function called "square".
// Given a number, "square" should return the square of the given number.

function square(num) {
  return num ** 2;
}

var output = square(5);
console.log(output); // --> 25
