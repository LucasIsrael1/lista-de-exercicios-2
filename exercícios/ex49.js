const prompt = require("./utils/prompts.js");

const transactionsArray = require("./data/transactions.json").transactions;

console.log("49. Organizador de transações");

const transactionsObj = {}
const subtotals = {}

console.log("Array inicial:");
console.log(transactionsArray);

for (transaction of transactionsArray) {
    if (!(transaction.category in transactionsObj)) {
        transactionsObj[transaction.category] = [];
        subtotals[transaction.category] = 0;
    }
    const obj = {
        id: transaction.id,
        value: transaction.value,
        date: transaction.date
    };
    transactionsObj[transaction.category].push(obj);
    subtotals[transaction.category] += transaction.value;
};

console.log("Objeto final:");
console.log(transactionsObj);
console.log("Subtotais:");
console.log(subtotals);