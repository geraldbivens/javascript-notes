// The Complete JavaScript Course 2021
// JavaScript Fundamentals — Part 2
// 40. Basic Array Operations (Methods)

const friends = ["Klaus", "Jay", "Mike", "Tim"];

// 1. Adding elements to an array

// push() — adds an element to the end of an array
friends.push("Troy");
console.log(friends); // => ["Klaus", "Jay", "Mike", "Tim", "Troy"]

// unshift() — adds an element to the front of an array
friends.unshift("Darin");
console.log(friends); // => ["Darin", "Klaus", "Jay", "Mike", "Tim", "Troy"]

// Note: both methods return the length of the new array

// 2. Removing elements from an array

// pop() — removes the last element of an array
friends.pop();
console.log(friends); // => ["Darin", "Klaus", "Jay", "Mike", "Tim"]

// shift() — removes the first element of an array
friends.shift();
console.log(friends); // => ["Klaus", "Jay", "Mike", "Tim"]

// Note: both methods return the removed element

// 3. Finding the index of a value
// indexOf()
//     - returns the index of the element passed to the method

// 4. Finding if an element is included in an array
// includes()
//     - returns a boolean
//     - returns true if the element passed to the method is in the array
//     - returns false if the element passed to the method is not in the array
