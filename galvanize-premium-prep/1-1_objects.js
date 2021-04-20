// Objects 1

// 1. Write a function called "getProperty".
// Given an object and a key, "getProperty" returns the value of the property at the given key.

// Note: If there is no property at the given key, it should return undefined.

function getProperty(obj, key) {
  return obj[key];
}

var obj = {
  key: "value",
};
var output = getProperty(obj, "key");
console.log(output); // --> 'value'

// 2. Write a function called "addProperty".
// Given an object, and a key, "addProperty" sets a new property on the given object with a value of true.

function addProperty(obj, key) {
  return (obj[key] = true);
}

var myObj = {};
addProperty(myObj, "myProperty");
console.log(myObj.myProperty); // --> true

// 3. Write a function called "removeProperty".
// Given an object and a key, "removeProperty" removes the given key from the given object.

function removeProperty(obj, key) {
  delete obj[key];
}

var obj = {
  name: "Sam",
  age: 20,
};
removeProperty(obj, "name");
console.log(obj.name); // --> undefined
