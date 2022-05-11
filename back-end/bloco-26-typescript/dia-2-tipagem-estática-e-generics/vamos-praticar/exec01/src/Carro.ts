enum Color {
  black = 'preta',
  white = 'branca',
  red = 'vemelha',
  silver = 'prata',
}

enum Port {
  rigth = 'direita',
  left = 'esquerda',
}

enum Turn {
  rigth = 'direita',
  left = 'esquerda',
}

class Carro {
  brand: string;
  color: Color;
  door: number;

  constructor(brand: string, color: Color, door: number) {
    this.brand = brand;
    this.color = color;
    this.door = door;
  }

  honk() {
    console.log('bi-bi-pe');
  }

  openTheDoor(port: Port) {
    console.log(`Abre a porta ${port}`);
  }

  closeTheDoor(port: Port) {
    console.log(`Fecha a porta ${port}`);
  }

  turnOn(): void {
    console.log('ligar carro');
  }

  turnOff(): void {
    console.log('desligar carro');
  }

  speedUp(): void {
    console.log('acelerando');
  }

  speedDown(): void {
    console.log('freiando');
  }

  stop(): void {
    console.log('carro parado');
  }

  turn(direction: Turn) {
    console.log(`virar para a ${direction}`);
  }
}
