import Animal from './Aniaml';

class Bird extends Animal {
  fly() {
    console.log(`${this.name} está voando!`);
  }
}

/*
Saída (código executado em Mar/2022):

Papagaio está voando!
*/
export default Bird;
