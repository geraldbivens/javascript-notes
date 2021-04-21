// The Complete JavaScript Course 2021
// JavaScript Fundamentals — Part 2
// 47. Looping Arrays, Breaking, and Continuing

// Example of looping over an array
const hollis = [
  "Hollis",
  "Archibold",
  2021 - 1977,
  "Teacher",
  ["Molly", "Lindsey", "Anna"],
];

const types = [];

for (let i = 0; i < hollis.length; i++) {
  // Reading from the hollis array
  console.log(hollis[i], typeof hollis[i]);

  // Filling the types array
  // types[i] = typeof hollis[i];

  // Cleaner way of filling the types array
  types.push(typeof hollis[i]);
}

console.log(types);

// More common example of looping over an array
const years = [1969, 1977, 2010, 2012];
const ages = [];

for (let i = 0; i < years.length; i++) {
  ages.push(2021 - years[i]);
}

console.log(ages);

// continue
// The for loop only logs the elements that are strings to the console.
console.log("--- ONLY STRINGS ---");

for (let i = 0; i < hollis.length; i++) {
  if (typeof hollis[i] !== "string") continue;

  console.log(hollis[i], typeof hollis[i]);
}

// break
// The for loop breaks when it comes across a number, so only those elements preceding the number are logged to the console.
console.log("--- BREAK WITH NUMBER ---");

for (let i = 0; i < hollis.length; i++) {
  if (typeof hollis[i] === "number") break;

  console.log(hollis[i], typeof hollis[i]);
}
