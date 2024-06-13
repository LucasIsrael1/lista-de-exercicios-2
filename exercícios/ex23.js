const matrixSize = 7;
const matrix = [];

console.log("23. Matriz identidade");

for (let i = 0; i < matrixSize; i++) {

    matrix.push([]);

    for (let j = 0; j < matrixSize; j++) {
        matrix[i].push((i === j) ? 1 : 0);
    };
};

console.log(matrix);