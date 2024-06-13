const basePrompt = require("prompt-sync")();

function prompt(message) {
    return basePrompt(message).trim()
}

function promptNumber(message = "Insira um valor: ", roundToInt = false) {
    let input = parseFloat(basePrompt(message));
    while (isNaN(input)) {
        console.log("Por favor insira um valor válido!");
        input = parseFloat(basePrompt(message));
    };
    if (roundToInt) input = Math.trunc(input)
    return input;
};

function promptPositive(message, roundToInt) {
    let input = promptNumber(message, roundToInt);
    while (input < 0) {
        console.log("Por favor insira um valor positivo!");
        input = promptNumber(message, roundToInt);
    };
    return input;
};

function promptRange(message, min, max, roundToInt) {
    let input = promptNumber(message, roundToInt);
    while (input > max || input < min) {
        console.log(`Por favor insira um valor entre ${min} e ${max}!`);
        input = promptNumber(message, roundToInt);
    };
    return input;
};

function promptOptions(message, options) {
    let input = basePrompt(message).toLowerCase().trim();
    while (!options.includes(input)) {
        console.log("Por favor escolha uma das opções!");
        input = basePrompt(message).toLowerCase().trim();
    };
    return input;
};

function promptObjectKey(message, object) {
    let input = basePrompt(message).toLowerCase().trim();
    while (!(input in object)) {
        console.log("Por favor escolha uma das opções!");
        input = basePrompt(message).toLowerCase().trim();
    };
    return input;
};

function promptConfirmation(message, confirmationValue = "s") {
    const input = basePrompt(message).toLowerCase().trim();
    return input === confirmationValue;
};

function promptJson(message, properties = []) {
    let input = (basePrompt(message)).trim();
    while (true) {
        try {
            const object = JSON.parse(input);
            let success = true
            for (property of properties) {
                if (!(property in object)) {
                    input = (basePrompt("Por favor insira todas as propriedades exigidas: ")).trim();
                    success = false;
                    break;
                };
            };
            if (success) {
                return object;
            }

        } catch {
            input = (basePrompt("Por favor insira um objecto (em JSON) válido: ")).trim();
        };
    };
};

module.exports = {
    prompt,
    promptNumber,
    promptPositive,
    promptRange,
    promptOptions,
    promptObjectKey,
    promptConfirmation,
    promptJson
};