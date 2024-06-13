const prompt = require("./utils/prompts");

const timesToPrompt = 5;

console.log("19. Validador de horários");

for (let i = 0; i < timesToPrompt; i++) {
    const inputTime = prompt.prompt("Insira o horário (HH.MM.SS): ");

    if (validateTime(inputTime)) {
        console.log("> Esse horário é válido!");
    } else {
        console.log("> Esse horário não é válido!");
    };
};

function validateTime(time) {
    const timeSplit = time.split(".");

    if (timeSplit.length != 3) {
        return false;
    };
    if (timeSplit[0].length != 2 || parseInt(timeSplit[0]) >= 24 || parseInt(timeSplit[0]) < 0) {
        return false;
    };
    if (timeSplit[1].length != 2 || parseInt(timeSplit[1]) >= 60 || parseInt(timeSplit[1]) < 0) {
        return false;
    };
    if (timeSplit[2].length != 2 || parseInt(timeSplit[2]) >= 60 || parseInt(timeSplit[2]) < 0) {
        return false;
    };
    return true;
};