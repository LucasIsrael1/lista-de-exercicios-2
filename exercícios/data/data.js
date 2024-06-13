const {fakerPT_BR: faker} = require("@faker-js/faker");
const generator = require("../utils/generator.js")
const fs = require("fs")

const fileCallback = error => {
    if (error) {
        console.log("Algo deu errado: " + error);
    } else {
        console.log("Tudo pronto!");
    };
}

const employee = () => {
    return {
        id: faker.string.alphanumeric({length: 5, casing: "upper"}),
        name: faker.person.fullName(),
        salary: faker.number.float({ fractionDigits: 2, min: 1500, max: 3500 })
    };
}

function randomEmployees(amount) {
    const table = {
        employees: faker.helpers.multiple( employee, {count: amount} )
    };
    const jsonString = JSON.stringify(table);
    fs.writeFile("data/ex20.json", jsonString, fileCallback);
};

const bettor = () => {
    return faker.helpers.multiple(() => Math.floor(Math.random() * 5) + 1, {count: 13})
};

function randomBettors(amount) {
    const bettors = {
        bettors: faker.helpers.multiple( bettor, {count: amount})
    };
    const jsonString = JSON.stringify(bettors);
    fs.writeFile("data/bettors.json", jsonString, fileCallback);
}


const student = () => {
    return {
        R: generator.randomTextArray(20, ["A", "B", "C", "D", "E"])
    };
};

function randomStudents(amount) {
    const students = {
        students: faker.helpers.multiple( student, {count: amount})
    };
    const jsonString = JSON.stringify(students);
    fs.writeFile("data/students.json", jsonString, fileCallback);
}

const sale = () => {
    return {
        name: names[(Math.floor(Math.random() * names.length))],
        value: faker.number.float({ fractionDigits: 2, min: 10, max: 100 })
    }
}

function randomSales(amount) {
    const sales = {
        sales: faker.helpers.multiple( sale, {count: amount})
    }
    const jsonString = JSON.stringify(sales);
    fs.writeFile("data/sales.json", jsonString, fileCallback);
}

const transaction = () => {
    return {
        id: faker.string.numeric({length: 5}),
        value: faker.number.float({ fractionDigits: 2, min: 10, max: 500 }),
        date: faker.date.between({ from: '2018-01-01T00:00:00.000Z', to: '2023-01-01T00:00:00.000Z' }).toLocaleDateString(),
        category: categories[(Math.floor(Math.random() * categories.length))]
    }
}

function randomTransactions(amount) {
    const transactions = {
        transactions: faker.helpers.multiple( transaction, {count: amount})
    }
    const jsonString = JSON.stringify(transactions);
    fs.writeFile("data/transactions.json", jsonString, fileCallback);
}

// randomEmployees(80);

// randomBettors(100);

// randomStudents(50);

// const names = faker.helpers.multiple(faker.person.fullName, {count: 5});
// randomSales(20);

// const categories = ["Crédito", "Débito", "Cheque", "Dinheiro"]
// randomTransactions(30)