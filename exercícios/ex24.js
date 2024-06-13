const generator = require("./utils/generator.js");

const M = generator.randomMatrix(6, 8, -100, 100);
const C = [];

console.log("24. Elementos negativos na matriz");

for (i of M) {
    let negatives = 0;
    for (j of i) {
        if (j < 0) negatives++;
    };
    C.push(negatives);
};

console.log("> Matriz M:");
console.log(M);

console.log("> Vetor C (negativos por linha):");
console.log(C);