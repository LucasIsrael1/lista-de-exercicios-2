const prompt = require("./utils/prompts");

const employee = {}

console.log("18. Registro de funcionário");

employee.nome = prompt.prompt("Insira o nome do funcionário: ");
employee.cargo = prompt.prompt("Insira o cargo do funcionário: ");
employee.salario = prompt.promptPositive("Insira o salário do funcionário: ");

console.log("> Seu registro:");
console.log(employee);