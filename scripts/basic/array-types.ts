const person = {
  name: "Maximilan",
  age: 30,
  hobbies: ["Sports", "Cooking"],
};

let favoritesActivities: string[];
favoritesActivities = ["Sports"];

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase());
  // console.log(hobby.map()) // !!! Error - Hobby é uma string, não um Array
}
