const prompt = require("./utils/prompts.js");
const generator = require("./utils/generator.js");

const M = generator.randomMatrix(6, 6);

console.log("27. Multiplicador de matriz");

console.log("> Matriz inicial:");
console.log(M);

const A = prompt.promptNumber("Insira o valor para multiplicar a matriz: ");

for (i in M) {
    for (j in M[i]) {
        M[j][i] *= A;
    }
}

const flattened = M.flat();

console.log(flattened);

