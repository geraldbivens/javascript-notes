// The Complete JavaScript Course 2021
// JavaScript Fundamentals — Part 2
// 43. Dot vs. Bracket Notation

const hollis = {
  firstName: "Hollis",
  lastName: "Archibold",
  age: 2021 - 1977,
  job: "Teacher",
  friends: ["Molly", "Lindsey", "Anna"],
};

// Getting the value using both dot and bracket notation
console.log(hollis.lastName);
console.log(hollis["lastName"]);

// Bracket notation allows you to use an expression (dot notation does not)
const nameKey = "Name";
console.log(hollis["first" + nameKey]);
console.log(hollis["last" + nameKey]);

const info = prompt(
  "What would you like to know about Hollis? Choose between firstName, lastName, age, job, and friends."
);

if (hollis[info]) {
  console.log(hollis[info]);
} else {
  console.log(
    `That info isn't available. Please choose between firstName, lastName, age, job, and friends.`
  );
}

// Adding new properties to an object using both dot and bracket notation
hollis.location = "Northglenn";
hollis["twitter"] = "@hollisarchibold";

// Challenge
// Log the following sentence to the console, dynamically: "Hollis has 3 friends, and her best friend is named Molly."
console.log(
  `${hollis.firstName} has ${hollis.friends.length} friends, and her best friend is named ${hollis.friends[0]}.`
);
