const prompt = require("./utils/prompts");

const names = new Array(9);
const ages = new Array(9);

console.log("17. Identificador de menores de idade");

for (let i = 0; i < names.length; i++) {
    names[i] = prompt.prompt("Insira o nome do indivíduo: ");
    ages[i] = prompt.promptPositive("Insira a idade: ", true);
};

for (let i = 0; i < names.length; i++) {
    if (ages[i] >= 18) continue;

    console.log(`> ${names[i]} tem ${ages[i]} ${(ages[i] === 1) ? "ano" : "anos"}`);
};