// The Complete JavaScript Course 2021
// JavaScript Fundamentals — Part 2
// 39. Introduction to Arrays

// Two ways to write an array
const friends = ["Darin", "Klaus", "Mike", "Tim", "Troy"]; // literal syntax

const years = new Array(1969, 1977, 2010, 2012); // 'new' keyword and Array() method

// Accessing the value of an element in the array
console.log(friends[0]); // => Darin
console.log(friends[2]); // => Mike

// Finding the length of an array
console.log(friends.length); // => 5 (length is a property)
console.log(friends[friends.length - 1]); // => Troy (friends.length - 1 is an expression, not a statement)

// Note: An expression is something that produces a value.

// Note: When declaring a variable with const, only primitive values are immutable.

// Note: Arrays are not primitive values, so arrays are always mutable.
friends[1] = "Jay";

// However, you cannot change the entire array.
friends = ["Bob", "Alice"];

// Array exercise
const calculateAge = function (yearOfBirth) {
  return 2021 - yearOfBirth;
};

const ages = [
  calculateAge(years[0]),
  calculateAge(years[1]),
  calculateAge(years[2]),
  calculateAge(years[years.length - 1]),
];

console.log(ages);
