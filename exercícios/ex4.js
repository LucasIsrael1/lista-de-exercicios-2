const prompt = require("./utils/prompts");

console.log("4. Validador de triângulo");

const line1 = prompt.promptPositive("Insira o valor da primeira reta: ");
const line2 = prompt.promptPositive("Insira o valor da segunda reta: ");
const line3 = prompt.promptPositive("Insira o valor da terceira reta: ");

if (line1 > line2 + line3 || line2 > line1 + line3 || line3 > line1 + line2) {
    console.log("> Não é possível formar um triângulo com essas retas!");
} else {
    console.log("> Essas retas formam um triângulo!");
};