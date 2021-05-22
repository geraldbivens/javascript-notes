// The Complete JavaScript Course 2021
// JavaScript in the Browser: DOM and Events Fundamentals
// 76. Coding Challenge #1

/* 
Implement a game rest functionality, so that the player can make a new guess! Here is how:

1. Select the element with the 'again' class and attach a click event handler
2. In the handler function, restore initial values of the score and secretNumber variables
3. Restore the initial conditions of the message, number, score and guess input field
4. Also restore the original background color (#222) and number width (15rem)

GOOD LUCK 😀
*/

playAgainButton.addEventListener("click", function () {
  secretNumber.textContent = "?";
  secretNumberValue = Math.trunc(Math.random() * 20) + 1;
  guessInput.value = "";
  message.textContent = "Start guessing...";
  score = 20;
  currentScore.textContent = score;
  background.style.backgroundColor = "#222";
  secretNumber.style.width = "15rem";
});

// This resets the high score, which is not good
// playAgainButton.addEventListener("click", function () {
//   window.location.reload();
// });
