const generator = require("./utils/generator.js");
const prompt = require("./utils/prompts.js");

console.log("38. Operações com vetores");

const A = generator.randomArray(6);

console.log("[1] Soma dos elementos");
console.log("[2] Produto dos elementos");
console.log("[3] Média dos elementos");
console.log("[4] Ordene em ordem crescente");
console.log("[5] Mostre o vetor");
console.log("[6] Sair");

let choice;

do {
    choice = prompt.promptRange("Escolha uma opção: ", 1, 6);
    switch(choice) {
        case 1:
            console.log("A soma é: " + sumArray());
            break;
        case 2:
            console.log("O produto é: " + multiplyArray());
            break;
        case 3:
            console.log("A média é: " + arrayAverage());
            break;
        case 4:
            console.log("O vecor ordenado ficou: " + A.sort((a, b) => a - b));
            break;
        case 5:
            console.log("O vetor é:");
            console.log(A);
            break;
    }
} while (choice != 6);

function sumArray() {
    let result = 0;
    for (i of A) {
        result += i;
    };
    return result;
};

function multiplyArray() {
    let result = 1;
    for (i of A) {
        result *= i;
    };
    return result;
};

function arrayAverage() {
    return sumArray() / A.length;
};