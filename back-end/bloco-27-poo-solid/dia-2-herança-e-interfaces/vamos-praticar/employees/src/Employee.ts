class Employee {
  private _name: string;
  private _baseSalary: number;
  private _monthlyWorkload: number;

  constructor(name: string, baseSalary: number, monthlyWorkload: number) {
    this._name = name;
    this._baseSalary = baseSalary;
    this._monthlyWorkload = monthlyWorkload;
  }

  public calcSalary(extraHours: number): number {
    const salaryHour = this._baseSalary / this._monthlyWorkload;
    const extraHOursAmount = extraHours * salaryHour * 1.2;
    const finalSalary = this._baseSalary + extraHOursAmount;
    return finalSalary;
  }
}

const mazer: Employee = new Employee('Mazer', 100000, 100);
console.log(mazer.calcSalary(10));
