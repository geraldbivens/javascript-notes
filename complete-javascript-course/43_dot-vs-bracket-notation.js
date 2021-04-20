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

// Bracket notation allows you to use an expression
const nameKey = "Name";
console.log(hollis["first" + nameKey]);
console.log(hollis["last" + nameKey]);

// Adding to the object using both dot and bracket notation
hollis.location = "Denver";
hollis["twitter"] = "@hollisarchibold";

// Challenge
// "Hollis has 3 friends, and her best friend is named Molly."
console.log(
  `${hollis.firstName} has ${hollis.friends.length} friends, and her best friend is named ${hollis.friends[0]}.`
);
