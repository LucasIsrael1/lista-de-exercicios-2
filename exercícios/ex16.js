const numbers = new Array(20);

console.log("16. Números aleatórios");

for (let i = 0; i < numbers.length; i++) {
    numbers[i] = Math.floor(Math.random() * 100);
};
console.log("> Array gerado:");
console.log(numbers);

numbers.sort((a, b) => a - b);

console.log("> Array ordenado:");
console.log(numbers);