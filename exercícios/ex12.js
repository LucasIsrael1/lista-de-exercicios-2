const sequenceLength = 10;

console.log("12. Sequência de Fibonacci");

let firstValue = 0;
let secondValue = 1;

for (let i = 0; i < sequenceLength; i++) {
    const newValue = firstValue + secondValue;
    firstValue = secondValue;
    console.log(firstValue);
    secondValue = newValue;
};