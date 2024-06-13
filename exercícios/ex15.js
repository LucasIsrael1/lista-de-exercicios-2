const prompt = require("./utils/prompts");

const numbers = new Array(10);
let evenNumbers = "";

console.log("15. Números pares");

for (let i = 0; i < numbers.length; i++) {
    const number = prompt.promptNumber("Insira um número: ", true);
    numbers[i] = number;

    if (number % 2 === 0) {
        if (evenNumbers != "") evenNumbers += ", "
        evenNumbers += `${number} (posição ${i})`
    }
};

console.log("> Valores pares:");
console.log("> " + evenNumbers);