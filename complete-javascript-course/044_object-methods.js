// The Complete JavaScript Course 2021
// JavaScript Fundamentals — Part 2
// 44. Object Methods

const hollis = {
  firstName: "Hollis",
  lastName: "Archibold",
  dob: 1977,
  job: "teacher",
  friends: ["Molly", "Lindsey", "Anna"],
  hasDriversLicense: true,

  //   calculateAge: function (dob) {
  //     return 2021 - dob;
  //   },

  // 'this' keyword
  //   calculateAge: function () {
  //     console.log(hollis);
  //     return 2021 - this.dob;
  //   },

  calculateAge: function () {
    this.age = 2021 - this.dob;
    return this.age;
  },
  // Note: This is a good solution if you need to access the age multiple times in your code.

  getSummary: function () {
    return `${this.firstName} is a ${this.calculateAge()}-year old ${
      this.job
    }, and she has ${this.hasDriversLicense ? "a" : "no"} driver's license.`;
  },
};

console.log(hollis.calculateAge(1977));
console.log(hollis.calculateAge(hollis.dob));

console.log(hollis["calculateAge"](1977));
console.log(hollis["calculateAge"](hollis["dob"]));

// Challenge
// Log the following sentence to the console, dynamically: "Hollis is a 44-year old teacher, and she has a/no drivers license."

console.log(hollis.calculateAge());
// Note: You need to call the function before the new property 'age' is added to the object.

if (hollis.hasDriversLicense === true) {
  console.log(
    `${hollis.firstName} is a ${hollis.age}-year old ${hollis.job}, and she has a driver's license.`
  );
} else {
  console.log(
    `${hollis.firstName} is a ${hollis.age}-year old ${hollis.job}, but she does not have a driver's license.`
  );
}
