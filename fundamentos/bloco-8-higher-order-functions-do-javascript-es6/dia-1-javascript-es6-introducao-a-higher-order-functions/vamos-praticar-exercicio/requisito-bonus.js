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

const randomDamageDragonValue = (strength) => {
  const damageDragon = Math.floor(Math.random() * (strength - 15 + 1) + 15);
  return damageDragon;
};

const randomDamageWarriorValue = (strength, weaponDmg) => {
  const damegeWarrior = Math.floor(
    Math.random() * ((weaponDmg * strength) - strength) + strength
  );

  return damegeWarrior;
};

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

const gameActions = {
  actionWarrior: (callback, strength, weaponDmg) => {
    const resultWarrior = callback(strength, weaponDmg);
    battleMembers.dragon.healthPoints = dragon.healthPoints - resultWarrior;
    battleMembers.warrior.damage = resultWarrior;
  },
  actionMage: (callback, intelligence, mana) => {
    const resultMage = callback(intelligence, mana);

    battleMembers.dragon.healthPoints = dragon.healthPoints - resultMage.dano;
    battleMembers.mage.damage = resultMage.dano;
  },
  actionDragon: (callback, strength) => {
    const resultDragon = callback(strength);
    battleMembers.warrior.healthPoints = warrior.healthPoints - resultDragon;
    battleMembers.mage.healthPoints = mage.healthPoints - resultDragon;
    battleMembers.dragon.damage = resultDragon;
  },
  actionFinalResult: () => console.table(battleMembers),

};

gameActions.actionWarrior(randomDamageWarriorValue, warrior.strength, warrior.weaponDmg);
gameActions.actionMage(damageAndManaSpent, mage.intelligence, mage.mana);
gameActions.actionMage(damageAndManaSpent, mage.intelligence, mage.mana);
gameActions.actionMage(damageAndManaSpent, mage.intelligence, mage.mana);
gameActions.actionDragon(randomDamageDragonValue,battleMembers.dragon.strength);
gameActions.actionDragon(randomDamageDragonValue,battleMembers.dragon.strength);
gameActions.actionFinalResult();