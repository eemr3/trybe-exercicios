/* Bônus
Parte I - Game Actions Simulator
Nestes exercícios você irá implementar HOFs que simulam um turno de batalha em um jogo. Você irá criar funções que calculam dano, atualizam status, e ao final, retornam os resultados da rodada.
Para os próximos exercícios copie o código abaixo. */

const mage = {
  healthPoints: 130,
  intelligence: 45,
  mana: 125,
  damage: undefined,
};

const warrior = {
  healthPoints: 200,
  strength: 30,
  weaponDmg: 2,
  damage: undefined,
};

const dragon = {
  healthPoints: 350,
  strength: 50,
  damage: undefined,
};

const battleMembers = { mage, warrior, dragon };

/* 1 - Crie uma função que retorna o dano do dragão.
O dano será um número aleatório entre 15 (dano mínimo) e o valor do atributo strength (dano máximo). */
const randomDamageDragonValue = (strength) => {
  const damageDragon = Math.floor(Math.random() * (strength - 15) + 15);
  return damageDragon;
};

/* 2 - Crie uma função que retorna o dano causado pelo warrior .
O dano será um número aleatório entre o valor do atributo strength (dano mínimo) e o valor de strength * weaponDmg (dano máximo). */
const randomDamageWarriorValue = (strength, weaponDmg) => {
  const damegeWarrior = Math.floor(
    Math.random() * ((weaponDmg * strength) - strength) + strength
  );

  return damegeWarrior;
};

/* 3 - Crie uma função que retorna um objeto com duas chaves e dois valores contendo o dano e a mana gasta pelo mago em um turno.
O dano será um número aleatório entre o valor do atributo intelligence (dano mínimo) e o valor de intelligence * 2 (dano máximo).
A mana consumida por turno é 15. Além disto a função deve ter uma condicional, caso o mago tenha menos de 15 de mana o valor de dano recebe uma mensagem (Ex: "Não possui mana suficiente") e a mana gasta é 0. */
const damageAndManaSpent = (intelligence, mana) => {
  let manaConsumed = 0;
  if (mana < 15) {
    manaConsumed += 0;
    return 'Não possui mana suficiente'
  } else {
    manaConsumed += 15
  }
  
  const mageObject = {
    dano: Math.floor(
      Math.random() * (intelligence * 2 - intelligence) + intelligence
    ),
    mana: mage.mana = mage.mana - manaConsumed,
  };

  return mageObject
}


/* Parte II
Agora que você já possui a implementação das funções relativas aos três exercícios anteriores, passe-as como parâmetro para outras funções que irão compor um objeto gameActions . O objeto será composto por ações do jogo e cada ação é por denifição uma HOF , pois neste caso, são funções que recebem como parâmetro outra função.
Copie o código abaixo e inicie sua implementação: */


/* 1 - Crie a primeira HOF que compõe o objeto gameActions . Ela será a função que simula o turno do personagem warrior . Esta HOF receberá como parâmetro a função que calcula o dano deferido pelo personagem warrior e atualizará os healthPoints do monstro dragon . Além disto ela também deve atualizar o valor da chave damage do warrior . */

/* 2 - Crie a segunda HOF que compõe o objeto gameActions . Ela será a função que simula o turno do personagem mage . Esta HOF receberá como parâmetro a função que calcula o dano deferido pelo personagem mage e atualizará os healthPoints do monstro dragon . Além disto ela também deve atualizar o valor das chaves damage e mana do mage. */

/* 3 - Crie a terceira HOF que compõe o objeto gameActions . Ela será a função que simula o turno do monstro dragon . Esta HOF receberá como parâmetro a função que calcula o dano deferido pelo monstro dragon e atualizará os healthPoints dos personagens mage e warrior . Além disto ela também deve atualizar o valor da chave damage do monstro. */

const gameActions = {
  actionWarrior: (func, strength, weaponDmg) => {
    const resultWarrior = func(strength, weaponDmg);
    battleMembers.dragon.healthPoints = dragon.healthPoints - resultWarrior;
    battleMembers.warrior.damage = resultWarrior;
  },
  actionMage: (func, intelligence, mana) => {
    const resultMage = func(intelligence, mana);

    battleMembers.dragon.healthPoints = dragon.healthPoints - resultMage.dano;
    battleMembers.mage.damage = resultMage.dano;
  },
  actionDragon: (func, strength) => {
    const resultDragon = func(strength);
    battleMembers.warrior.healthPoints = warrior.healthPoints - resultDragon;
    battleMembers.mage.healthPoints = mage.healthPoints - resultDragon;
    battleMembers.dragon.damage = resultDragon;
  }
};



gameActions.actionWarrior(randomDamageWarriorValue, warrior.strength, warrior.weaponDmg);
gameActions.actionMage(damageAndManaSpent, mage.intelligence, mage.mana);
gameActions.actionDragon(randomDamageDragonValue,battleMembers.dragon.strength);
console.log(battleMembers);