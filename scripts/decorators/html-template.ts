function WithTemplate(template: string, hookId: string) {
  return function (constructor: any) {
    const hookElement = document.getElementById(hookId);
    const p = new constructor();
    if (hookElement) {
      hookElement.innerHTML = template;
      hookElement.querySelector("h1")!.textContent = p.name;
    }
  };
}

// Forma em que utiliza um novo Construtor que substitui o construtor original da Classe

// function WithTemplate(template: string, hookId: string) {
//   return function <T extends { new (...args: any[]): { name: string } }>(
//     originalConstructor: T
//   ) {
//     return class extends originalConstructor {
//       constructor(..._: any[]) {
//         super();
//         const hookElement = document.getElementById(hookId);
//         const p = new originalConstructor();
//         if (hookElement) {
//           hookElement.innerHTML = template;
//           hookElement.querySelector("h1")!.textContent = this.name;
//         }
//       }
//     };
//   };
// }

@WithTemplate("<h1>My Person Object </h1>", "app")
class Person {
  name = "Max";

  constructor() {
    console.log("Create Person Object...");
  }
}

const p1 = new Person();
