interface ValidatorConfig {
  [prop: string]: {
    [validatableProp: string]: string[];
  };
}

const registeredValidators: ValidatorConfig = {};

function Required(target: any, propName: string) {
  registeredValidators[target.constructor.name] = {
    ...registeredValidators[target.constructor.name],
    [propName]: ["required"],
  };
}

function PositiveNumber(target: any, propName: string) {
  registeredValidators[target.constructor.name] = {
    ...registeredValidators[target.constructor.name],
    [propName]: ["positive"],
  };
}

function validate(obj: any) {
  const objValidatorsConfig = registeredValidators[obj.constructor.name];
  if (!objValidatorsConfig) return true;

  let isValid = true;
  for (const prop in objValidatorsConfig) {
    for (const validator of objValidatorsConfig[prop]) {
      switch (validator) {
        case "required":
          isValid = isValid && !!obj[prop];
          break;
        case "positive":
          isValid = isValid && obj[prop] > 0;
          break;
      }
    }
  }
  return isValid;
}

class Course {
  @Required
  title: string;

  @PositiveNumber
  price: number;

  constructor(title: string, price: number) {
    this.title = title;
    this.price = price;
  }
}

const courseForm = document.querySelector("form")!;
courseForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const titleEelement = document.getElementById("title")! as HTMLInputElement;
  const priceElement = document.getElementById("price")! as HTMLInputElement;

  const title = titleEelement.value;
  const price = +priceElement.value;

  const createdCourse = new Course(title, price);

  if (!validate(createdCourse)) {
    alert("Inavlid input, please Try Again!");
    return;
  }

  console.log(createdCourse);
});
