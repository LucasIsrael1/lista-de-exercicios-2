const generator = require("./utils/generator.js");

console.log("40. Sorteador da loteria (de novo)");

const results = generator.randomArray(5, 1, 3);

console.log("Resultados:");
console.log(results);

const players = [];

console.log("Participantes:");

for (let i = 0; i < 50; i++) {
    players.push(generator.randomArray(5, 1, 3))
    console.log(players[i])
    if(JSON.stringify(players[i]) === JSON.stringify(results)) {
        console.log("Ganhador!")
    }
}
