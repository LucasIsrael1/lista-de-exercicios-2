const prompt = require("./utils/prompts");
const format = require("./utils/format");

const cars = {
    popular: {
        rentCost: 90,
        kmCostShort: 0.20,
        kmCostLong: 0.10,
        longTripDistance: 100
    },
    luxo: {
        rentCost: 150,
        kmCostShort: 0.30,
        kmCostLong: 0.25,
        longTripDistance: 200
    }
};

console.log("7. Aluguel do carro");

const carType = prompt.promptObjectKey("Qual carro foi alugado (popular ou de luxo)? ", cars);
const rentingDays = prompt.promptPositive("Por quantos dias esse carro foi alugado? ", true);
const distanceTravelled = prompt.promptPositive("Quantos Km foram percorridos com esse carro? ");

let totalValue = cars[carType]["rentCost"] * rentingDays;

if (distanceTravelled > cars[carType]["longTripDistance"]) {
    totalValue += cars[carType]["kmCostLong"] * distanceTravelled;
} else {
    totalValue += cars[carType]["kmCostShort"] * distanceTravelled;
};

console.log(`> Seu valor final é de ${format.toReais(totalValue)}!`);