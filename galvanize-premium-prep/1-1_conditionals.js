// Conditionals 1

// 1. Write a function called "isOldEnoughToDrink".
// Given a number, in this case an age, "isOldEnoughToDrink" returns whether a person of this given age is old enough to legally drink in the United States.

// Note: The legal drinking age in the United States is 21.

function isOldEnoughToDrink(age) {
  if (age >= 21) {
    return true;
  } else {
    return false;
  }
}

var output = isOldEnoughToDrink(22);
console.log(output); // --> true

// 2. Write a function called "isOldEnoughToDrive".
// Given a number, in this case an age, "isOldEnoughToDrive" returns whether a person of this given age is old enough to legally drive in the United States.

// Note: The legal driving age in the United States is 16.

function isOldEnoughToDrive(age) {
  if (age >= 16) {
    return true;
  } else {
    return false;
  }
}

var output = isOldEnoughToDrive(22);
console.log(output); // --> true

// 3. Write a function called "isOldEnoughToVote".
// Given a number, in this case an age, 'isOldEnoughToVote' returns whether a person of this given age is old enough to legally vote in the United States.

// Note: The legal voting age in the United States is 18.

function isOldEnoughToVote(age) {
  if (age >= 18) {
    return true;
  } else {
    return false;
  }
}

var output = isOldEnoughToVote(22);
console.log(output); // --> true

// 4. Write a function called "isOldEnoughToDrinkAndDrive".
// Given a number, in this case an age, "isOldEnoughToDrinkAndDrive" returns whether a person of this given age is old enough to legally drink and drive in the United States.

// Notes:
// • The legal drinking age in the United States is 21.
// • It is always illegal to drink and drive in the United States.

function isOldEnoughToDrinkAndDrive(age) {
  return false;
}

var output = isOldEnoughToDrinkAndDrive(22);
console.log(output); // --> false

// Conditionals 2

// 1. Write a function called "checkAge".
// Given a person's name and age, "checkAge" returns one of two messages: "Go home, {insert_name_here}!", if they are younger than 21. "Welcome, {insert_name_here}!", if they are 21 or older. Naturally, replace "{insert_name_here}" with the given name. :)

function checkAge(name, age) {
  if (age < 21) {
    return "Go home, " + name + "!";
  } else {
    return "Welcome, " + name + "!";
  }
}

var output = checkAge("Adrian", 22);
console.log(output); // --> 'Welcome, Adrian!'

// 2. Write a function called "isGreaterThan10".
// Given a number, "isGreaterThan10" returns whether the given number is greater than 10.

function isGreaterThan10(num) {
  if (num > 10) {
    return true;
  } else {
    return false;
  }
}

var output = isGreaterThan10(11);
console.log(output); // --> true

// 3. Write a function called "isLessThan30".
// Given a number, "isLessThan30" returns whether the given number is less than 30.

function isLessThan30(num) {
  if (num < 30) {
    return true;
  } else {
    return false;
  }
}

var output = isLessThan30(9);
console.log(output); // --> true

// 4. Write a function called "equalsTen".
// Given a number, "equalsTen" returns whether or not the given number is 10.

function equalsTen(num) {
  if (num === 10) {
    return true;
  } else {
    return false;
  }
}

var output = equalsTen(9);
console.log(output); // --> false

// Conditionals 3

// 1. Write a function called "isLessThan".
// Given 2 numbers, "isLessThan" returns whether num2 is less than num1.

function isLessThan(num1, num2) {
  if (num2 < num1) {
    return true;
  } else {
    return false;
  }
}

var output = isLessThan(9, 4);
console.log(output); // --> true

// 2. Write a function called "isGreaterThan".
// Given 2 numbers, "isGreaterThan" returns whether num2 is greater than num1.

function isGreaterThan(num1, num2) {
  if (num2 > num1) {
    return true;
  } else {
    return false;
  }
}

var output = isGreaterThan(11, 10);
console.log(output); // --> false

// 3. Write a function called "isEqualTo".
// Given 2 numbers, "isEqualTo" returns whether num2 is equal to num1.

function isEqualTo(num1, num2) {
  if (num1 === num2) {
    return true;
  } else {
    return false;
  }
}

var output = isEqualTo(11, 10);
console.log(output); // --> false

// 4. Write a function called "isEven".
// Given a number, "isEven" returns whether it is even.

function isEven(num) {
  if (num % 2 === 0) {
    return true;
  } else {
    return false;
  }
}

var output = isEven(11);
console.log(output); // --> false

// Conditionals 4

// 1. Write a function called "isOdd".
// Given a number, "isOdd" returns whether the given number is odd.

function isOdd(num) {
  if (num % 2 !== 0) {
    return true;
  } else {
    return false;
  }
}

var output = isOdd(9);
console.log(output); // --> true

// 2. Write a function called "isSameLength".
// Given two words, "isSameLength" returns whether the given words have the same length.

function isSameLength(word1, word2) {
  if (word1.length === word2.length) {
    return true;
  } else {
    return false;
  }
}

var output = isSameLength("words", "super");
console.log(output); // --> true

// 3. Write a function called "areBothOdd".
// Given 2 numbers, "areBothOdd" returns whether or not both of the given numbers are odd.

function areBothOdd(num1, num2) {
  if (num1 % 2 !== 0 && num2 % 2 !== 0) {
    return true;
  } else {
    return false;
  }
}

var output = areBothOdd(1, 3);
console.log(output); // --> true

// 4. Write a function called "isEitherEven".
// Given two numbers, "isEitherEven" returns whether or not either one of the given numbers is even.

function isEitherEven(num1, num2) {
  if (num1 % 2 === 0 || num2 % 2 === 0) {
    return true;
  } else {
    return false;
  }
}

var output = isEitherEven(1, 4);
console.log(output); // --> true

// Conditionals 5

// 1. Write a function called "isOddLength".
// Given a word, "isOddLength" returns whether the length of the given word is odd.

function isOddLength(word) {
  if (word.length % 2 !== 0) {
    return true;
  } else {
    return false;
  }
}

var output = isOddLength("special");
console.log(output); // --> true

// 2. Write a function called "isEvenLength".
// Given a word, "isEvenLength" returns whether the length of the word is even.

function isEvenLength(word) {
  if (word.length % 2 === 0) {
    return true;
  } else {
    return false;
  }
}

var output = isEvenLength("wow");
console.log(output); // --> false

// 3. Write a function called "isEvenAndGreaterThanTen".
// Given a number, "isEvenAndGreaterThanTen" returns whether it is both even and greater than 10.

function isEvenAndGreaterThanTen(num) {
  if (num % 2 === 0 && num > 10) {
    return true;
  } else {
    return false;
  }
}

var output = isEvenAndGreaterThanTen(13);
console.log(output); // --> false
