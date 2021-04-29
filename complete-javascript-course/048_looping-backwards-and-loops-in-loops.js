// The Complete JavaScript Course 2021
// JavaScript Fundamentals — Part 2
// 48. Looping Backwards and Loops in Loops

// Example of looping over an array backwards
const hollis = [
  "Hollis",
  "Archibold",
  2021 - 1977,
  "Teacher",
  ["Molly", "Lindsey", "Anna"],
];

for (let i = hollis.length - 1; i >= 0; i--) {
  console.log(i, hollis[i]);
}

// Example of a loop within a loop
for (let exercise = 1; exercise < 4; exercise++) {
  console.log(`- - - Starting exercise ${exercise} - - -`);

  for (let rep = 1; rep < 6; rep++) {
    console.log(`Lifting weight repetition ${rep}`);
  }
}
