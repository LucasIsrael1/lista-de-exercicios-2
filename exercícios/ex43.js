const prompt = require("./utils/prompts.js");

console.log("43. Combinador de objetos");

const obj1 = prompt.promptJson("Insira um objeto em formato JSON: ");
const obj2 = prompt.promptJson("Insira outro objeto: ");

const combined = {...obj1, ...obj2};

console.log("Objeto combinado:");
console.log(combined);