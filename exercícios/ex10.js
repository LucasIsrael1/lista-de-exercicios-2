const prompt = require("./utils/prompts");

const numbers = [];
let willContinue = true;

console.log("10. Leitor de números");

do {
    numbers.push(prompt.promptNumber("Insira um número: "));

    willContinue = prompt.promptConfirmation("Deseja inserir outro valor? (s/n): ");

} while (willContinue);

let sum = 0;
let smallest = numbers[0];
let evenAmount = 0;

for (let number of numbers) {
    sum += number;
    if (number < smallest) smallest = number;
    if (number % 2 === 0) evenAmount++;
};

const average = sum / numbers.length;

console.log(`> A soma dos valores é ${sum}!`);
console.log(`> O menor valor digitado é ${smallest}!`);
console.log(`> A média dos valores é ${average}!`);
console.log(`> Dos valores digitados, ${evenAmount} são pares!`);