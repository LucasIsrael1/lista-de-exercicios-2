const generator = require("./utils/generator.js");

const M = generator.randomMatrix(5, 5);

console.log("29. Cálculos com matrizes");

console.log("> Matriz inicial:");
console.log(M);

let row4Sum = 0;
let column2Sum = 0;
let diagonalSum = 0
let totalSum = 0;

for (i in M) {
    for (j in M[i]) {
        const value = M[i][j];
        if (i == 3) row4Sum += value;
        if (j == 1) column2Sum += value;
        if (i == j) diagonalSum += value;
        totalSum += value;
    };
};

console.log("> A soma dos elementos na linha 4 é: " + row4Sum);
console.log("> A soma dos elementos na coluna 2 é: " + column2Sum);
console.log("> A soma dos elementos na diagonal principal é: " + diagonalSum);
console.log("> A soma dos elementos totais é: " + totalSum);

