// Accumulator pattern
// Write a function that takes in an array of numbers and returns a new array containing only the even numbers from the input array.

function filterEvenElements(numbers) {
  // Edge case
  if (numbers.length === 0) {
    return [];
  }

  // Result variable
  let evenNumbers = [];

  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
      evenNumbers.push(numbers[i]);
    }
  }

  return evenNumbers;
  console.log(evenNumbers);
}

filterEvenElements([1, 2, 3, 4, 5, 6]);

// Accumulator pattern coding challenges

//  Filter odd elements
// Write a function called "filterOddElements".

// Given an array of numbers, "filterOddElements" returns an array containing only the odd numbers of the given array. If the input array contains no odd numbered elements, your function should return an empty array.

var output = filterOddElements([1, 2, 3, 4, 5]);
console.log(output); // --> [1, 3, 5]
