// The Complete JavaScript Course 2021
// JavaScript Fundamentals — Part 2
// 38. Coding Challenge #1

/*
Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new gymnastics discipline, which works differently.
Each team competes 3 times, and then the average of the 3 scores is calculated (so one average score per team).
A team ONLY wins if it has at least DOUBLE the average score of the other team. Otherwise, no team wins!

1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
2. Use the function to calculate the average for both teams
3. Create a function 'checkWinner' that takes the average score of each team as parameters ('avgDolhins' and 'avgKoalas'), and then logs the winner to the console, together with the victory points, according to the rule above. Example: "Koalas win (30 vs. 13)".
4. Use the 'checkWinner' function to determine the winner for both DATA 1 and DATA 2.
5. Ignore draws this time.

TEST DATA 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
TEST DATA 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27

HINT: To calculate average of 3 values, add them all together and divide by 3
HINT: To check if number A is at least double number B, check for A >= 2 * B. Apply this to the team's average scores 😉

GOOD LUCK 😀
*/

const calcAverage = (num1, num2, num3) => (num1 + num2 + num3) / 3;

const avgDolphins = calcAverage(44, 23, 71); // => 46
const avgKoalas = calcAverage(65, 54, 49); // => 56

const avgDolphins2 = calcAverage(85, 54, 41); // => 60
const avgKoalas2 = calcAverage(23, 34, 27); // => 28

const checkWinner = function (avgDolphins, avgKoalas) {
  if (avgDolphins >= 2 * avgKoalas) {
    console.log(`Dolphins win! ${avgDolphins} - ${avgKoalas}`);
  } else if (avgKoalas >= 2 * avgDolphins) {
    console.log(`Koalas win! ${avgKoalas} - ${avgDolphins}`);
  } else {
    console.log("Nobody wins!");
  }
};

checkWinner(avgDolphins, avgKoalas); // => Nobody wins!

checkWinner(avgDolphins2, avgKoalas2); // => Dolphins win! 60 - 28
