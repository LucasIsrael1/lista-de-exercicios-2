const generator = require("./utils/generator.js");

const matrix = generator.randomMatrix(3, 3);

console.log("33. Multiplicador de diagonal");

console.log("Matriz original:");
console.log(matrix);

let diagonalValue = 0;

for (i in matrix) {
    diagonalValue += matrix[matrix.length - 1 - i][i]
};
const diagonalAverage = diagonalValue / matrix.length

for (i in matrix) {
    matrix[i][i] *= diagonalAverage
};

console.log("Matriz pós-multiplicação:");
console.log(matrix);