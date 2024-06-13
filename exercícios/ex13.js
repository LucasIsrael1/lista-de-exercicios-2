const sequence = new Array(15);

console.log("13. Vetor de Fibonacci");

let firstValue = 0;
let secondValue = 1;

for (let i = 0; i < sequence.length; i++) {
        const newValue = firstValue + secondValue;
        firstValue = secondValue;
        sequence[i] = firstValue;
        secondValue = newValue;
};

console.log(sequence);