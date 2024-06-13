const prompt = require("./utils/prompts");

const numbersToCalculate = 10;

console.log("11. Progressão aritmética");

let firstTerm = prompt.promptNumber("Insira o termo incial da progressão: ");
let commonDifference = prompt.promptNumber("Insira a razão da progressão: ");

let progression = firstTerm
let number;

for (let n = 2; n <= numbersToCalculate; n++) {
    number = firstTerm + (n - 1) * commonDifference
    progression += ", " + number;
};

const sum = (firstTerm + number) * numbersToCalculate / 2;

console.log(`> Os ${numbersToCalculate} primeiros termos da PA são: ${progression}!`);
console.log(`A soma dos termos da PA é ${sum}!`);