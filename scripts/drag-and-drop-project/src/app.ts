// Validação usando decorators da depedencia 'class-validator'

// import { IsNotEmpty, IsNumber, IsPositive } from "class-validator";
// import { validate } from "class-validator";

// class Product {
//   @IsNotEmpty()
//   title: string;

//   @IsNumber()
//   @IsPositive()
//   price: number;

//   constructor(title: string, price: number) {
//     this.title = title;
//     this.price = price;
//   }

//   getInfo() {
//     return [this.title, `$${this.price}`];
//   }
// }

// const newProd = new Product("", 5.99);
// validate(newProd).then((erros) => {
//   if (erros.length > 0) {
//     console.log("VALIDATION ERROS!");
//     console.log(erros);
//   } else {
//     console.log(newProd.getInfo());
//   }
// });

import { ProjectInput } from "./components/project-input";
import { ProjectList } from "./components/project-list";

new ProjectInput();
new ProjectList("active");
new ProjectList("finished");
