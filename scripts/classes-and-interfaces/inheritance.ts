class Department {
  static fiscalYear: number = 2020;
  private readonly id: string;
  private name: string;
  protected employess: string[] = [];

  constructor(id: string, n: string) {
    this.id = id;
    this.name = n;
  }

  static createEmplyoee(name: string) {
    return { name };
  }

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

// 'extends' - paravra resevada para criar heranças entre classes
class ITDepartment extends Department {
  public admins: string[];

  constructor(id: string, admins: string[]) {
    // super() - Chama o construtor da classe mãe
    super(id, "IT");
    this.admins = admins;
  }
}

class AccountingDepartment extends Department {
  private lastReport: string;

  constructor(id: string, private reports: string[]) {
    super(id, "Accounting");
    this.reports = reports;
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

const accounting = new AccountingDepartment("D2", []);

accounting.mostRecentReport = "Year end Report";
accounting.addReports("Something went wrong...");

console.log(accounting.mostRecentReport);
accounting.printReports();

accounting.addEmployee("Max");
accounting.addEmployee("Menu");

accounting.printEmployeeInformation();
