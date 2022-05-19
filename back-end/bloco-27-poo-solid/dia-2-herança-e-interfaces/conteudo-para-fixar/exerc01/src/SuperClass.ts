class Superclass {
  public iSuper: boolean = true;

  constructor(iSuper: boolean) {
    this.iSuper = iSuper;
  }

  sayHello() {
    return console.log('Olá mundo!');
  }
}

export default Superclass;
