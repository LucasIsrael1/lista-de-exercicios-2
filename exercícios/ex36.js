const generator = require("./utils/generator.js");

const bettors = require("./data/bettors.json").bettors;

const results = generator.randomArray(13, 1, 5);

console.log("36. Loteria esportiva");

console.log("> Valores sorteados:");
console.log(results);

for (bettor of bettors) {
    let correctBets = 0;
    for (i in bettor) {
        
        if (bettor[i] === results[i]) {
            correctBets++;
        };
    };
    if (correctBets != 0) {
        console.log(bettor);
        console.log("Acertos: " + correctBets);
        if (correctBets === 13) {
            console.log("Parabéns, tu foi o GANHADOR!");
        };
    };
};