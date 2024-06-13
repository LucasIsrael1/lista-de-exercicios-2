const prompt = require("./utils/prompts.js");

console.log("48. Combinador de inventários");

console.log("Por favor insira o estoque das lojas em JSON");
console.log('no formato "produto":<quantidade>');

const store1 = prompt.promptJson("Insira o inventário da primeira loja: ");
const store2 = prompt.promptJson("Insira o inventário da segunda loja: ");

const combinedStock = {...store1};

for (i in store2) {
    if (i in combinedStock) {
        combinedStock[i] += store2[i];
    } else {
        combinedStock[i] = store2[i];
    };
};

console.log("Inventário combinado:");
console.log(combinedStock);