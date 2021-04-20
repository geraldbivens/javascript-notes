// String Methods 1

// 1. Write a function called "getFullName".
// Given a first and a last name, "getFullName" returns a single string with the given first and last names separated by a single space.

function getFullName(firstName, lastName) {
  return firstName + " " + lastName;
}

var output = getFullName("Joe", "Smith");
console.log(output); // --> 'Joe Smith'

// Template literals solution
function getFullName(firstName, lastName) {
  return `${firstName} ${lastName}`;
}

// 2. Write a function called "getLengthOfWord".
// Given a word, "getLengthOfWord" returns the length of the given word.

function getLengthOfWord(word) {
  return word.length;
}

var output = getLengthOfWord("some");
console.log(output); // --> 4

// 3. Write a function called "getLengthOfTwoWords".
// Given 2 words, "getLengthOfTwoWords" returns the sum of their lengths.

function getLengthOfTwoWords(word1, word2) {
  return word1.length + word2.length;
}

var output = getLengthOfTwoWords("some", "words");
console.log(output); // --> 9

// String Methods 2

// 1. Write a function called "computeAverageLengthOfWords".
// Given two words, "computeAverageLengthOfWords" returns the average of their lengths.

function computeAverageLengthOfWords(word1, word2) {
  return (word1.length + word2.length) / 2;
}

var output = computeAverageLengthOfWords("code", "programs");
console.log(output); // --> 6
