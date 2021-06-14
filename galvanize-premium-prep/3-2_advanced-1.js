// Advanced 1

// Write a function called "countWords".

// Given a string, "countWords" returns an object where each key is a word in the given string, with its value being how many times that word appeared in the given string.

// Notes:
// • If given an empty string, it should return an empty object.

function countWords(str) {
  if (!str) {
    return {};
  }
  var obj = {};
  var arr = str.split(" ");
  for (var i = 0; i < arr.length; i++) {
    if (obj[arr[i]] === undefined) {
      obj[arr[i]] = 1;
    } else {
      obj[arr[i]] += 1;
    }
  }
  return obj;
}

var output = countWords("ask a bunch get a bunch");
console.log(output); // --> {ask: 1, a: 2, bunch: 2, get: 1}
