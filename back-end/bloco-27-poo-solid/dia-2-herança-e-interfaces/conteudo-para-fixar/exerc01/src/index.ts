import Animal from './Aniaml';
import Bird from './Bird';
import Mammal from './Mammal';
import MyClass from './MyClas';
import Subclass from './Subclass';
import Superclass from './SuperClass';

const tiger = new Mammal('Tigre', new Date(Date.parse('May 03, 2020')));

const main = (animal: Animal) => {
  console.log(animal.age);
};
main(tiger);
tiger.walk();

const parrot = new Bird('Papagaio', new Date(Date.parse('Jun 07, 2017')));

console.log(parrot.age);
parrot.fly();

function myFunc(obj: Superclass) {
  if (obj.iSuper) return console.log('Super');
  if (!obj.iSuper) return console.log('Sub');
  obj.sayHello();
}

const super1 = new Superclass(true);
const subC1 = new Subclass();

myFunc(super1);
myFunc(subC1);

const myClass = new MyClass(4);

console.log(myClass.myFunc(3));
