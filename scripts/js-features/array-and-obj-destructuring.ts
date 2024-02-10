// Array
const hobbies = ["Sports", "Cooking"];

const [hobby1, hobby2, ...remainingHobbies] = hobbies;

console.log(hobbies, hobby1, hobby2);

// Objects

const person = {
  firstName: "Max",
  age: 30,
};

const { firstName: username, age } = person;

console.log(username, age, person);
