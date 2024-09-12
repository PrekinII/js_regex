// export class Validator {
//     validateUsername() {
//         function checkName(nameStr) {
//             const regexp = /^[\d_-]|[\d_-]$|[\d]{3}/;
//             const regexp2 = /[^\d\w-]/;
//             console.log(`Проверка имени: ${nameStr}`);
//             if (regexp2.test(nameStr) || regexp.test(nameStr)) {
//                 console.log("Недопустимое имя");
//                 return "Недопустимое имя"
//             } 
//             console.log("Все ок");
//             return "Все ок";
//         }
//         return checkName(nameStr);
//     }
// }

export class Validator {
    validateUsername(nameStr) {
        const regexp = /^[\d_-]|[\d_-]$|[\d]{3}/;
        const regexp2 = /[^\d\w-]/;
        if (regexp2.test(nameStr) || regexp.test(nameStr)) {
            return "Недопустимое имя";
        } 
        return "Все ок";
    }
}



//const validator = new Validator();
//const nameStr = "g12adminnetolodyru"
//console.log(validator.validateUsername(nameStr));

