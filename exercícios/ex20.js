const format = require("./utils/format");

const employees = require("./data/employees.json").employees;

console.log("20. Folha mensal");

for (let employee of employees) {
    const deduction =  employee.salary * 0.12;
    const netSalary =  employee.salary - deduction;

    console.log("> Matrícula: " + employee.id);
    console.log("> Nome: " + employee.name);
    console.log("> Salário bruto: " + format.toReais(employee.salary));
    console.log("> Dedução INSS: " + format.toReais(deduction));
    console.log("> Salário Líquido: " + format.toReais(netSalary));
    console.log("");
};