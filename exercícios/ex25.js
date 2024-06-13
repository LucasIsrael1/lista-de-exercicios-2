const generator = require("./utils/generator.js");

const matrix = generator.randomMatrix(15, 20);
const sums = [];

console.log("25. Soma das colunas da matriz");

for (i in matrix[0]) {
    let sum = 0
    for (j in matrix) {
        sum += matrix[j][i];
    }
    sums.push(sum);
};

console.log("> Matriz:");
console.log(matrix);
console.log("> Soma de cada coluna:");
console.log(sums);