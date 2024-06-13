const prompt = require("./utils/prompts");
const format = require("./utils/format");

console.log("8. Programa de Saúde");

const exerciseHours = prompt.promptPositive("Quantas horas de atividades físicas você fez no último mês? ");

let points;

if (exerciseHours >= 20) {
    points = exerciseHours * 10;
} else if (exerciseHours >= 10) {
    points = exerciseHours * 5;
} else {
    points = exerciseHours * 2;
};

const prize = points * 0.05;

console.log(`> Você obteve ${points} pontos e faturou ${format.toReais(prize)}!`);