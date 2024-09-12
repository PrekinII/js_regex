// TODO: write your code here
//import sum from './basic';

//console.log('worked');

//console.log(sum([1, 2]));

const MIN_LENGTH = 2;
const MAX_LENGTH = 10;
const TYPES = [
  "Bowman",
  "Swordsman",
  "Magician",
  "Undead",
  "Zombie",
  "Daemon",
];

export class Character {
    constructor (name, type) {
        if (typeof name !== 'string' || name.length < MIN_LENGTH || name.length > MAX_LENGTH) {
            throw new Error('Имя должно быть строкой не короче 2 и не длиннее 10 символов');
          }
        if (typeof type !== 'string' || !TYPES.includes(type)) {
            throw new Error(`Тип должен быть строкой и может принимать значения ${TYPES.join(", ")}`);
        }
        this.name = name;
        this.type = type;
        this.health = 100;
        this.level = 1;
        this.attack = undefined;
        this.defence = undefined;
    }
    levelUp() {
        if (this.health > 0) {
          this.level += 1;
          this.attack *= 1.2;
          this.defence *= 1.2;
          this.health = 100;
        }
        else {
          throw new Error('Нельзя повысить левел умершего');
        }
        return this;
      }
    damage(points) {
        if (this.health > 0) {
          this.health -= points * (1 - this.defence / 100);
          if (this.health <= 0) {
            throw new Error("Game Over");
          }
        }
        else {
          throw new Error("Game Over");
        }
        return this;
    }
}   

// Bowman: 25/25
// Swordsman: 40/10
// Magician: 10/40
// Undead: 25/25
// Zombie: 40/10
// Daemon: 10/40

export class Bowman extends Character {
  constructor(name, type) {
    super(name, type);
    this.attack = 25;
    this.defence = 25;
  }
}

export class Swordsman extends Character {
  constructor(name, type) {
    super(name, type);
    this.attack = 40;
    this.defence = 10;
  }
}

export class Magician extends Character {
  constructor(name, type) {
    super(name, type);
    this.attack = 10;
    this.defence = 40;
  }
}

export class Undead extends Character {
  constructor(name, type) {
    super(name, type);
    this.attack = 25;
    this.defence = 25;
  }
}

export class Zombie extends Character {
  constructor(name, type) {
    super(name, type);
    this.attack = 40;
    this.defence = 10;
  }
}

export class Daemon extends Character {
  constructor(name, type) {
    super(name, type);
    this.attack = 10;
    this.defence = 40;
  }
}

//const zombie = new Undead('Zomb', 'Zombie');
//console.log(zombie)