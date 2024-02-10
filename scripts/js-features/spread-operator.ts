const hobbies = ['Sports', 'Cooking'];
const activesHobbies = ['Hiking'];

activesHobbies.push(...hobbies); // Adiciona todos elementos do Array

const person = {
  name: 'Max',
  age: 30
};

const copiedPerson = {...person}; // Criação de uma copia de Obj