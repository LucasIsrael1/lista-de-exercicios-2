const generator = require("./utils/generator.js");

const M = generator.randomMatrix(5, 5);
const SL = Array(M.length).fill(0);
const SC = Array(M[0].length).fill(0);

console.log("30. Somas das linhas e colunas");

console.log("> Matriz inicial:");
console.log(M);

for (i in M) {
    for (j in M[i]) {
        SL[i] += M[i][j];
        SC[j] += M[i][j];
    };
};

console.log("> A soma das linhas é:");
console.log(SL);
console.log("> A soma das colunas é:");
console.log(SC);
