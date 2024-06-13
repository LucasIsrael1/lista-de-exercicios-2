const prompt = require("./utils/prompts");
const format = require("./utils/format");

const speedLimit = 80;

console.log("2. Multa de velocidade");

const speed = prompt.promptPositive("A qual velocidade o carro está andando? ");

if (speed > speedLimit) {
    const fine = (speed - speedLimit) * 5;

    console.log(`> Você está acima do limite! Você será multado ${format.toReais(fine)}.`);
} else {
    console.log("> Você está dentro do limite, bom trabalho!");
};