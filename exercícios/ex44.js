const prompt = require("./utils/prompts.js");

console.log("44. Contador de Strings");

const object = prompt.promptJson("Insira um objeto em formato JSON: ");

let stringsCount = 0;

for (i in object) {
    if (typeof(object[i]) === "string") {

        stringsCount++;
    };
};

if (stringsCount === 1) {
    console.log(`Foi encontrada ${stringsCount} string no objeto inserido!`);
} else {
    console.log(`Foram encontradas ${stringsCount} strings no objeto inserido!`);
}