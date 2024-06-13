const prompt = require("./utils/prompts.js");

const sumThree = value => {
    if (typeof(value) != "number") return value;
    return value + 3;
};
const doubleValue = value => {
    if (typeof(value) != "number") return value;
    return value * 2;
};
const upperCase = value => {
    if (typeof(value) != "string") return value;
    return value.toUpperCase();
};

function applyToObject(object, callback) {
    const output = {};
    for (key in object) {
        output[key] = callback(object[key]);
    };
    return output
};

console.log("47. Transformador de objetos");

const obj = prompt.promptJson("Insira um objeto em formato JSON: ");

console.log("[1] Adicionar 3 aos valores");
console.log("[2] Multiplicar valores por 2");
console.log("[3] Converter valores para maiúsculo");

const input = prompt.promptRange("Escolha uma das funções acima: ", 1, 3);

let obj2 = {};

switch(input) {
    case 1:
        obj2 = applyToObject(obj, sumThree)
        break;
    case 2:
        obj2 = applyToObject(obj, doubleValue)
        break;
    case 3:
        obj2 = applyToObject(obj, upperCase)
        break;
};

console.log("Seu resultado:");
console.log(obj2);
