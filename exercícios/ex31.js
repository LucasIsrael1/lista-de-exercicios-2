const generator = require("./utils/generator.js");
const prompt = require("./utils/prompts.js");

const V = generator.randomMatrix(30, 30);

console.log("31. Identificar na matriz");

console.log("> Matriz inicial:");
console.log(V);

const A = prompt.promptPositive();
const X = Array(V.length).fill(0);

let count = 0;

function checkValues (value, index, array) {
    if (value === A) {
        count++;
        return false;
    };
    return true;
};

for (i in X) {
    X[i] = V[i].filter(checkValues);
};

console.log(`> A matriz dos valores diferentes de ${A} é:`);
console.log(X);
console.log(`> Foram encontrados ${count} valores iguais a ${A} na matriz`);