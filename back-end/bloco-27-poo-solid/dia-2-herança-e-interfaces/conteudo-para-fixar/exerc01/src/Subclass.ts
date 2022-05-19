import Superclass from './SuperClass';

class Subclass extends Superclass {
  constructor() {
    super(false);
  }
  sayHello2(): void {
    this.sayHello();
  }
}

export default Subclass;
