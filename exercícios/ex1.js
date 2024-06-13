const prompt = require("./utils/prompts");

console.log("1. Redução de tempo de vida de um fumante");

const cigarettesPerDay = prompt.promptPositive("Quantos cigarros foram fumados por dia? ");
const yearsSmoked = prompt.promptPositive("Por quantos anos se fumou? ");
const totalCigarettes = cigarettesPerDay * yearsSmoked * 365.25;
const daysLost = (totalCigarettes * 10) / 1440;

console.log(`> A vida do fumante será reduzida em ${daysLost} dias.`);