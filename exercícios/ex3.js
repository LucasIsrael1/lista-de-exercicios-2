const prompt = require("./utils/prompts");
const format = require("./utils/format");

console.log("3. Valor da passagem");

const distance = prompt.promptPositive("Qual distância deseja percorrer (em Km)? ");
let cost;

if (distance > 200) {
    cost = distance * 0.45;
} else {
    cost = distance * 0.5;
};

console.log(`> Sua passagem custará ${format.toReais(cost)}!`);