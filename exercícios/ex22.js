const prompt = require("./utils/prompts");
const format = require("./utils/format");

console.log("22. Pesquisa municipal");

const salaries = [];
const children = [];

let willContinue;

do {
    salaries.push(prompt.promptPositive("Insira o salário: "));
    children.push(prompt.promptPositive("Insira o número de filhos: ", true));
    willContinue = prompt.promptConfirmation("Deseja continuar? (s/n): ");
} while (willContinue);

let totalSalary = 0
let highestSalary = salaries[0]
let lowSalaries = 0

for (salary of salaries) {
    totalSalary += salary;
    if (salary > highestSalary) highestSalary = salary;
    if (salary <= 350) lowSalaries++;
}
const salaryAverange = totalSalary / salaries.length;
const lowSalaryPercentage = lowSalaries * 100 / salaries.length

let totalChildren = 0

for (childCount of children) {
    totalChildren += childCount
};

const childrenAverage = totalChildren / children.length;

console.log("> A média de salários é: " + format.toReais(salaryAverange));
console.log("> A média do número de filhos é: " + childrenAverage);
console.log("> O maior salário registrado é: " + format.toReais(highestSalary));
console.log("> O percentual de salários abaixo de R$ 350,00 é: " + lowSalaryPercentage + "%");