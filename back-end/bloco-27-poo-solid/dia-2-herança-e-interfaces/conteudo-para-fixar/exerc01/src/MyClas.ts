interface MyInterface {
  myNumber: number;
  myFunc(myParam: number): string;
}

class MyClass implements MyInterface {
  constructor(public myNumber: number) {}

  myFunc(myParam: number): string {
    return `A soma entre ${myParam} e ${this.myNumber} é: ${myParam + this.myNumber}`;
  }
}

export default MyClass;
