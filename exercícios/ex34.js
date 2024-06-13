const generator = require("./utils/generator.js");

const matrix = generator.randomMatrix(50, 50);

console.log("34. Multiplicador pela diagonal");

console.log("Matriz original:");
console.log(matrix);

for (i in matrix) {
    const diagonal = matrix[i][i]
    for (j in matrix[i]) {
        matrix[i][j] *= diagonal
    }
}

console.log("Matriz multiplicada:");
console.log(matrix);