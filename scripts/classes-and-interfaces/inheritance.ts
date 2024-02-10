// Classe Abstrata, só pode ser heradada
abstract class Department {
  static fiscalYear: number = 2020;
  protected readonly id: string;
  private name: string;
  protected employess: string[] = [];

  constructor(id: string, n: string) {
    this.id = id;
    this.name = n;
  }

  static createEmplyoee(name: string) {
    return { name };
  }

  abstract describe(this: Department): void; // Método abstrado, é configurado apenas pelas classes filhas

  addEmployee(employee: string) {
    this.employess.push(employee);
  }

  printEmployeeInformation() {
    console.log(this.employess.length);
    console.log(this.employess);
  }
}

// 'extends' - paravra resevada para criar heranças entre classes
class ITDepartment extends Department {
  public admins: string[];

  constructor(id: string, admins: string[]) {
    // super() - Chama o construtor da classe mãe
    super(id, "IT");
    this.admins = admins;
  }

  describe() {
    console.log(`IT Department - ID: ${this.id}`);
  }
}

class AccountingDepartment extends Department {
  private lastReport: string;
  private static instance: AccountingDepartment;

  private constructor(id: string, private reports: string[]) {
    super(id, "Accounting");
    this.reports = reports;
  }

  describe(): void {
    console.log(`Accounting Department - ID: ${this.id}`);
  }

  static getInstance() {
    if (AccountingDepartment.instance) return this.instance;
    this.instance = new AccountingDepartment("D2", []);
    return this.instance;
  }

  // Getter e Setter do 'lastReport'
  get mostRecentReport() {
    if (this.lastReport) {
      return this.lastReport;
    }
    throw new Error("No Report Found");
  }

  set mostRecentReport(value: string) {
    if (!value) throw new Error("Please pass in valid value");
    this.addReports(value);
  }

  addReports(text: string) {
    this.reports.push(text);
  }

  printReports() {
    console.log(this.reports);
  }

  addEmployee(name: string) {
    if (name === "Max") return;
    this.employess.push(name);
  }
}

const it = new ITDepartment("D1", ["Max"]);

it.addEmployee("Max");
it.addEmployee("Manu");

it.describe();
it.printEmployeeInformation();

console.log(it);

// const accounting = new AccountingDepartment("D2", []);
const accounting = AccountingDepartment.getInstance();

accounting.mostRecentReport = "Year end Report";
accounting.addReports("Something went wrong...");

console.log(accounting.mostRecentReport);
accounting.printReports();

accounting.addEmployee("Max");
accounting.addEmployee("Menu");

accounting.printEmployeeInformation();
