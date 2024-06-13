const prompt = require("./utils/prompts");
const format = require("./utils/format");

let mensSalary = 0;
let womensSalary = 0;
let willContinue = true;

console.log("9. Calculadora de salário");

do {
    const sex = prompt.promptOptions("Insira o sexo do(a) funcionário(a) (M/F): ", ["m", "f"]);
    if (sex === "m") {
        mensSalary += prompt.promptPositive("Insira o salário do funcionário: ");
    } else if (sex === "f") {
        womensSalary += prompt.promptPositive("Insira o salário da funcionária: ");
    };
    willContinue = prompt.promptConfirmation("Você deseja adicionar outro funcionário? (s/n): ");

} while (willContinue);

console.log(`> O salário total pago aos homens é de ${format.toReais(mensSalary)}!`);
console.log(`> O salário total pago às mulheres é de ${format.toReais(womensSalary)}!`);