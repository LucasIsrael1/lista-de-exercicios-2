function toReais(value) {
    return value.toLocaleString("pt-BR", {
        minimumFractionDigits: 2, maximumFractionDigits: 2,
        style: "currency", currency: "BRL" 
    });
}

function capitalize(text) {
    const firstLetter = text.charAt(0).toUpperCase();
    const remainder = text.substring(1);
    return firstLetter + remainder;
}

module.exports = {
    toReais,
    capitalize
}