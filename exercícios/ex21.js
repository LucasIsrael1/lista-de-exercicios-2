const prompt = require("./utils/prompts");

console.log("21. Peso ideal");

function calculateIdealWeight(height, sex) {
    if (sex === "m") {
        return height * 72.7 - 58;
    }
    if (sex === "f") {
        return height * 62.1 - 44.7;
    }
    return null
};

const height = prompt.promptPositive("Insira sua altura (em metros): ");
const sex = prompt.promptOptions("Insira seu sexo (M/F): ", ["m", "f"]);

const idealWeight = calculateIdealWeight(height, sex);
console.log("Seu peso ideal é: " + idealWeight)