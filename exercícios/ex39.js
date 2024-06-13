const generator = require("./utils/generator.js");

console.log("39. Compactador de vetor");

const A = generator.randomArray(100, -30, 30);

console.log("Vetor original:");
console.log(A);

const B = [];

for (item of A) {
    if (item >= 0 && item != null) {
        B.push(item);
    };
};

console.log("Vetor compactado:");
console.log(B);