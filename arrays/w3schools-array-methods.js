// JS Array Methods
// https://www.w3schools.com/js/js_array_methods.asp

// toString()
// This method converts an array to a string of array values that are separated by commas, however there is no space between the commas.

let fruits = ["Banana", "Orange", "Apple", "Mango"];

console.log(fruits.toString());
//=> Banana,Orange,Apple,Mango

// join()
// This method also joins all array elements into a string, but it also allows you to specifiy the separator.

console.log(fruits.join(", "));
//=> Banana, Orange, Apple, Mango

// Adding and removing elements from an array, or popping and pushing
// pop()
// This method removes the last element of an array—it pops the last item out of the array. Note: pop() returns the value of the element that was removed from the array, and it alters the array.

const poppedEl = fruits.pop();
console.log(poppedEl);
console.log(fruits);
//=> Mango
//=> ["Banana", "Orange", "Apple"]

// push()
// This method add a new element to the end of an array–it pushes a new item into the end of an array. Note: push() returns the length of the array with the new element.

console.log(fruits.push("Kiwi"));
//=> 5

// shift()
// unshift()
// length
// delete
// splice()
// concat()
// slice()
// automatic toString()
