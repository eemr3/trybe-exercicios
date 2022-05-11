interface Hero {
  _name: string;
  _power: string;
  speakInspirationalPhrase(phrase: string): string;
}

class Hero {
  constructor(name: string, power: string) {
    this._name = name;
    this._power = power;
  }

  speakInspirationalPhrase(phrase: string) {
    return `${this._name} fala: ${phrase}`;
  }
}

const hero1 = new Hero('Super-Man', 'visão de calr');
console.log(
  hero1.speakInspirationalPhrase(
    'Não se abata diante dos problemas, prosiga em frente e sempre confie em Deus!',
  ),
);
