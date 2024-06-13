const generator = require("./utils/generator.js");

const M = generator.randomMatrix(10, 10);

console.log("28. Acima e abaixo da diagonal");

console.log("> Matriz inicial:");
console.log(M);

let aboveDiagonal = 0;
let underDiagonal = 0;

for (i in M) {
    for (j in M[i]) {
        if (j > i) aboveDiagonal += M[i][j];
        if (i > j) underDiagonal += M[i][j];
    };
};

console.log("> A soma dos elementos acima da diagonal é: " + aboveDiagonal);
console.log("> A soma dos elementos abaixo da diagonal é: " + underDiagonal);

