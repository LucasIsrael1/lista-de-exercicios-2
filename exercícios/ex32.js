const generator = require("./utils/generator.js");

const M = generator.randomMatrix(12, 13);
const highestValues = [];

console.log("32. Dividir pelo maior número");

console.log("Matriz original:");
console.log(M);

for (i in M) {
    for (j in M[i]) {
        if (j === "0") {
            highestValues[i] = M[i][j]
        } else if (M[i][j] > highestValues[i]) {
            highestValues[i] = M[i][j];
        };
    };
};

console.log(highestValues)

for (i in M) {
    for (j in M[i]) {
        M[i][j] = Math.round(M[i][j] * 100 / highestValues[i]) / 100;
    };
};

console.log("Matriz pós-divisão:");
console.log(M);