class Department {
  
  // Atributos
  public readonly id: string; // 'readonly' - Proibe a re-escrita do atributo
  public name: string; // Atributo publico
  private employess: string[] = []; // Atributo Privado

  // Métodos
  constructor(id: string,name: string) {
    this.id = id;
    this.name = name;
  }

  // Criação de classe com atributos no construtor
  // constructor(private id: string, public name: string) {
  //   this.id = id;
  //   this.name = n;
  // }

  // This - Palavra Resevada para referir o objeto que chama o método
  describe(this: Department) {
    console.log(`Department (${this.id}): ${this.name}`);
  }

  addEmployee(employee: string) {
    this.employess.push(employee);
  }

  printEmployeeInformation() {
    console.log(this.employess.length);
    console.log(this.employess);
  }

}

const accounting = new Department('D1', "Accounting");

console.log(accounting);
accounting.describe();

// const accountingCopy = { name: "DUMMY", describe: accounting.describe };

// accountingCopy.describe();

accounting.addEmployee("Max");
accounting.addEmployee("Manu");

accounting.describe();
accounting.printEmployeeInformation();