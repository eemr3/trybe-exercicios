interface Character {
  name: string;
  specialMove: string;
}

interface IModel {
  getAll(): Array<string>;
  create(name: string, specialMove: string): void;
}

interface DbCharacter extends Character {
  id: number;
}

const db: DbCharacter[] = [];

class LocalDbModel implements IModel {
  getAll(): string[] {
    throw new Error('Method not implemented.');
  }
  create(name: string, specialMove: string): void {
    throw new Error('Method not implemented.');
  }
}

class CharacterService<T> {
  constructor(localDbModel: T) {}
}


