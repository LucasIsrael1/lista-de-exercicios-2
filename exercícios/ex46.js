const prompt = require("./utils/prompts");

const sales = require("./data/sales.json").sales;

console.log("46. Calculadora de vendas");

console.log("Array original:");
console.log(sales);

const saleAverages = {}
const saleCount = {}

for (sale of sales) {
    if (sale.name in saleAverages) {
        saleAverages[sale.name] += sale.value
        saleCount[sale.name]++
    } else {
        saleAverages[sale.name] = sale.value
        saleCount[sale.name] = 1
    }
}
for (i in saleAverages) {
    saleAverages[i] = Math.round(100 * saleAverages[i] / saleCount[i]) / 100

}

console.log("Média de vendas:");
console.log(saleAverages);