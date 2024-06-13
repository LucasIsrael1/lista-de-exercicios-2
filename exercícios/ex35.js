const generator = require("./utils/generator.js");

const inputArray = generator.randomArray(30);

const evenNumbers = [];
const oddNumbers = [];

console.log("35. Separador de pares e ímpares");

console.log("> Vetor de entrada:")
console.log(inputArray);

for (number of inputArray) {
    if (number % 2 === 0) {
        if (evenNumbers.length < 5) {
            evenNumbers.push(number)
        };
    } else {
        if (oddNumbers.length < 5) {
            oddNumbers.push(number)
        };
    };
};

console.log("Números pares:");
console.log(evenNumbers);
console.log("Números ímpares:");
console.log(oddNumbers);