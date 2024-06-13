const prompt = require("./utils/prompts");

const names = new Array(7);

console.log("14. Lista de nomes");

for (let i = 0; i < names.length; i++) {
    names[i] = prompt.prompt("Insira um nome: ")
};

names.reverse();
let namesString = names[0];
for (let i = 1; i < names.length; i++) {
    namesString += ", " + names[i];
};

console.log("> " + namesString);