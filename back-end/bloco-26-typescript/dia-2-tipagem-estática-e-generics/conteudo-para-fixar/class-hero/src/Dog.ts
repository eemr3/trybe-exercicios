interface Dog {
  _name: string;
  _breed: string;
  bark(): string;
}

class Dog {
  constructor(name: string, breed: string) {
    this._name = name;
    this._breed = breed;
  }

  bark() {
    return `${this._name} esta latindo para o ladrão`;
  }
}

const dog1 = new Dog('Brad', 'Shih-tzu');

console.log(dog1.bark());
