const prompt = require("./utils/prompts");

console.log("6. Jogo de Adivinhação");

const secretNumber = Math.floor(Math.random() * 5) + 1;
let playerChoice = prompt.promptRange("Escolha um número de 1 a 5: ", 1, 5, true);

while (playerChoice != secretNumber) {
    console.log("Número incorreto!")
    playerChoice = prompt.promptRange("Escolha um número de 1 a 5: ", 1, 5, true);
};
console.log("Parabéns, você adivinhou!");