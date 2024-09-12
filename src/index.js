//import './css/style.css';

//import './js/app';

// TODO: write your code in app.js
export default function health(obj) {
    let res = 'critical';
    if (obj.health > 50) {
        res = 'healthy';
    } if (obj.health <= 50 && obj.health >= 15) {
        res = 'wounded';
    } if (obj.health < 15) {
        res = 'critical';
    }
    return res;
  }

// js_advanced for ... in
const obj = {name: 'мечник', health: 10, level: 2, attack: 80, defence: 40}

export function orderByProps(obj, order) {
    const sortedKeys = [];
    const result = [];
    for (const key in obj) {
        if (order.includes(key)) {
            result.push({ key, value: obj[key] });
        } else sortedKeys.push(key)
    }
    sortedKeys.sort();
    for (const key of sortedKeys) {
        result.push({ key, value: obj[key] });
    }
    return result
}

orderByProps(obj, ["name", "level"])

// Destructuring
// export function getSpecialAttacks(character, id) {
//     const specialItem = character.special.find(item => item.id === id);
//     if (specialItem) {
//         return {...specialItem, description: specialItem.description || "Описание не доступно"}
//     } else {
//         return null; 
//     }
// }
export function getSpecial(character) {
    const { special } = character;
    const specialAttacks = special.map(({ id, name, icon, description = "Описание не доступно" }) => ({
        id, name, icon, description
    }));
    return specialAttacks;
}  

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

getSpecial(character)