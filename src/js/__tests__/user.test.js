import { loadUser } from '../user';
import { httpGet } from '../http';
import health, { getSpecial, orderByProps } from "../../index";
import { Bowman } from '../app';
import { Swordsman } from '../app';
import { Magician } from '../app';
import { Zombie } from '../app';
import { Undead } from '../app';
import { Daemon } from '../app';
import { Character } from '../app';

jest.mock('../http');

beforeEach(() => {
  jest.resetAllMocks();
});

test('should call loadUser once', () => {
  httpGet.mockReturnValue(JSON.stringify({}));

  const response = loadUser(1);
  expect(response).toEqual({});
  expect(httpGet).toHaveBeenCalledWith('http://server:8080/users/1');
});


const dataList = [
  [{ name: "Маг", health: 100 }, "healthy"],
  [{ name: "Маг", health: 51 }, "healthy"],
  [{ name: "Маг", health: 50 }, "wounded"],
  [{ name: "Маг", health: 49 }, "wounded"],
  [{ name: "Маг", health: 15 }, "wounded"],
  [{ name: "Маг", health: 14 }, "critical"],
  [{ name: "Маг", health: 1 }, "critical"],
];

test.each(dataList)("testing function health", (object, expented) => {
  let result = health(object);
  expect(result).toEqual(expented);
});

test("testing Bowman", () => {
  const result = new Bowman("Bow", "Bowman")
  const ans = {
      name: "Bow",
      type: "Bowman",
      health: 100,
      level: 1,
      attack: 25,
      defence: 25,
  }
  expect(result).toEqual(ans)
})

test("testing Swordsman", () => {
  const result = new Swordsman("Swo", "Swordsman")
  const ans = {
      name: "Swo",
      type: "Swordsman",
      health: 100,
      level: 1,
      attack: 40,
      defence: 10,
  }
  expect(result).toEqual(ans)
})

test("testing Magician", () => {
  const result = new Magician("Magician", "Magician")
  const ans = {
      name: "Magician",
      type: "Magician",
      health: 100,
      level: 1,
      attack: 10,
      defence: 40,
  }
  expect(result).toEqual(ans)
})

test("testing Undead", () => {
  const result = new Undead("Undead", "Undead")
  const ans = {
      name: "Undead",
      type: "Undead",
      health: 100,
      level: 1,
      attack: 25,
      defence: 25,
  }
  expect(result).toEqual(ans)
})

test("testing Zombie", () => {
  const result = new Zombie("Zombie", "Zombie")
  const ans = {
      name: "Zombie",
      type: "Zombie",
      health: 100,
      level: 1,
      attack: 40,
      defence: 10,
  }
  expect(result).toEqual(ans)
})

test("testing Daemon1", () => {
  const result = new Daemon("Daemon", "Daemon")
  const ans = {
      name: "Daemon",
      type: "Daemon",
      health: 100,
      level: 1,
      attack: 10,
      defence: 40,
  }
  expect(result).toEqual(ans)
})


test("testing CharacterError1", () => {
  expect(() => new Character("D", "Daemon")).toThrow("Имя должно быть строкой не короче 2 и не длиннее 10 символов");
});

test("testing CharacterError2", () => {
  expect(() => new Character("Daemon", "Durmon")).toThrow(`Тип должен быть строкой и может принимать значения`);
});

test("testing Daemon2", () => {
  const result = new Daemon("Daemon", "Daemon").levelUp()
  const ans = {
      name: "Daemon",
      type: "Daemon",
      health: 100,
      level: 2,
      attack: 12,
      defence: 48,
  }
  expect(result).toEqual(ans)
})

test("testing Daemon3", () => {
  const result = new Daemon("Daemon", "Daemon").damage(1)
  const ans = {
      name: "Daemon",
      type: "Daemon",
      health: 99.4,
      level: 1,
      attack: 10,
      defence: 40,
  }
  expect(result).toEqual(ans)
})

test("testing CharacterError3", () => {
  const result = new Daemon("Daemon", "Daemon")
  result.damage(165)
  //expect(result.health).toBeGreaterThan(0);
  
  // Первое исключение
  expect(() => result.damage(2)).toThrow('Game Over');
  
  // Второе исключение
  expect(() => result.damage(1)).toThrow('Game Over');

  // Проверка исключения повышения уровня
  expect(() => result.levelUp()).toThrow('Нельзя повысить левел умершего');
})

test("testing orderByProps", () => {
  const obj = {name: 'мечник', health: 10, level: 2, attack: 80, defence: 40}
  const order = ["health", "level"];
    const expected = [
      { key: 'health', value: 10 },
      { key: 'level', value: 2 },
      { key: 'attack', value: 80 },
      { key: 'defence', value: 40 },
      { key: 'name', value: 'мечник' }
    ];
    expect(orderByProps(obj, order)).toEqual(expected);
  });

// test("testing getSpecialAttacks", () => {
//   const character = {
//     name: 'Лучник',
//     type: 'Bowman',
//     health: 50,
//     level: 3,
//     attack: 40,
//     defence: 10,
//     special: [
//       {
//         id: 8,
//         name: 'Двойной выстрел',
//         icon: 'http://...',
//         description: 'Двойной выстрел наносит двойной урон'
//       }, 
//       {
//         id: 9,
//         name: 'Нокаутирующий удар',
//         icon: 'http://...'
//         // <- обратите внимание, описание "засекречено"
//         }
//       ]
//     }
//     const id = 9;
//     const expected = {
//       id: 9,
//       name: 'Нокаутирующий удар',
//       icon: 'http://...',
//       description: 'Описание не доступно'
//     };
//     expect(getSpecialAttacks(character, id)).toEqual(expected);
//   });

// test("testing getSpecialNull", () => {
//     const character = {
//       name: 'Лучник',
//       type: 'Bowman',
//       health: 50,
//       level: 3,
//       attack: 40,
//       defence: 10,
//       special: [
//           {
//               id: 8,
//               name: 'Двойной выстрел',
//               icon: 'http://...',
//               description: 'Двойной выстрел наносит двойной урон'
//           }, 
//           {
//               id: 9,
//               name: 'Нокаутирующий удар',
//               icon: 'http://...'
//               // <- обратите внимание, описание "засекречено"
//               }
//           ]
//         }
//     const id = 10;
//       const expected = null;
//       expect(getSpecialAttacks(character, id)).toEqual(expected);
//     });

test("testing getSpecial", () => {
  const character = {
    name: 'Лучник',
    type: 'Bowman',
    health: 50,
    level: 3,
    attack: 40,
    defence: 10,
    special: [
      {
        id: 8,
        name: 'Двойной выстрел',
        icon: 'http://...',
        description: 'Двойной выстрел наносит двойной урон'
      }, 
      {
        id: 9,
        name: 'Нокаутирующий удар',
        icon: 'http://...'
        // <- обратите внимание, описание "засекречено"
        }
      ]
    }
    const expected = [
      {
        id: 8,
        name: 'Двойной выстрел',
        icon: 'http://...',
        description: 'Двойной выстрел наносит двойной урон'
      },
      {
        id: 9,
        name: 'Нокаутирующий удар',
        icon: 'http://...',
        description: 'Описание не доступно'
      }
    ];
    expect(getSpecial(character)).toEqual(expected);
  });