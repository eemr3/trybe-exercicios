abstract class Character {
  abstract talk(): void;

  // abstract specialMove(): void;
}

class MeleeCharacter extends Character {
  talk(): void {
    console.log('ataque de perto');
  }

  // specialMove(): void {
  //   console.log('super giro no ar!!');
  // }
}

class LongRangeCharacter extends Character {
  talk(): void {
    console.log('ataque de longe');
  }

  // specialMove(): void {
  //   console.log('super soco flamejante!');
  // }
}

const char01 = new MeleeCharacter();
const char02 = new LongRangeCharacter();

const char = (charater: Character) => {
  charater.talk();
  // charater.specialMove();
};

char(char01);
char(char02);
