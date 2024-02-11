interface Named {
  readonly name: string;
  outputName?: string; // Deixa opicional a implementação do atributo
}

interface Greetable extends Named {
  greet(phrase: string): void;
}

class Person implements Greetable {
  name: string;
  age = 30;

  constructor(name: string) {
    this.name = name;
  }

  greet(phrase: string): void {
    console.log(`${phrase} ${this.name}`);
  }
}

// Implementação direto no objeto

// let user1: Person;
// user1 = {
//   name: "Max",
//   age: 30,
//   greet(phrase: string) {
//     console.log(`${phrase} ${this.name}`);
//   },
// };

// Implementação na classe (Uso da Herança)
let user1: Greetable;
user1 = new Person("Max");

user1.greet("Hi there - I am");
console.log(user1);

// Tipagem de função usando interfaces
// type AddFn = (a: number, b: number) => number;
interface AddFn {
  (a: number, b: number): number;
}

let add: AddFn = (a: number, b: number) => {
  return a + b;
};
