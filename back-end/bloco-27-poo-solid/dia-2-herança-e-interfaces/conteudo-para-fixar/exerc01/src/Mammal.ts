import Animal from './Aniaml';

class Mammal extends Animal {
  walk() {
    console.log(`${this.name} está andando!`);
  }
}

export default Mammal;
// const tiger = new Mammal('Tigre', new Date(Date.parse('May 03, 2020')));

// const main = (animal: Animal) => {
//   console.log(animal.age);
// };
