function Autobind(_: any, _2: string, descriptor: PropertyDescriptor) {
  const originalMethod = descriptor.value;
  const adjDescriptor: PropertyDescriptor = {
    configurable: true,
    enumerable: false,
    get() {
      const boundFn = originalMethod.bind(this);
      return boundFn;
    },
  };
  return adjDescriptor;
}

class Printer {
  message = "This Works";

  @Autobind
  showMessage() {
    console.log(this.message);
  }
}

const printer = new Printer();
printer.showMessage();

const button = document.querySelector("button")!;
button.addEventListener("click", printer.showMessage);
