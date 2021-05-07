// The Complete JavaScript Course 2021
// JavaScript Fundamentals — Part 2
// 49. The while Loop

// Example of a for loop
for (let rep = 1; rep <= 10; rep++) {
  console.log("for loop:", `Lifting weights repetition ${rep}`);
}

// Preceding example written as a while loop
let rep = 1;

while (rep <= 10) {
  console.log("while loop:", `Lifting weights repetition ${rep}`);
  rep++;
}

// Dice roll example
let dice = Math.trunc(Math.random() * 6) + 1;

while (dice !== 6) {
  console.log(`You rolled a ${dice}`);

  dice = Math.trunc(Math.random() * 6) + 1;

  if (dice === 6) console.log("Congratulations! You rolled a 6!");
}

// Note: The while loop does not need a counter.
// Note: If you know how many times the loop will run, then use a for loop. If you do not know, then use a while loop.
