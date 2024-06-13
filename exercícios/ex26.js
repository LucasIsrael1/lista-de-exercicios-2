const generator = require("./utils/generator.js");

const A = generator.randomMatrix(3, 5, 1, 20);
const B = generator.randomMatrix(5, 3, 1, 20);
const C = [];

console.log("26. Multiplicador de matrizes");

console.log("Matrizes originais:");
console.log(A);
console.log(B);

for (i in A) {
    C[i] = [];
    for (j in A) {
        let number = 0;
        for (k in A[i]) {
            number += A[i][k] * B[k][j];
        };
        C[i][j] = number;
    };
};

console.log("Matriz produto:");
console.log(C);