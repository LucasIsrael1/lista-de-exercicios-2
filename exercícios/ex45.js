const strings = ["Bom dia", "Feliz Páscoa!", "Olá mundo", "Miau miau",
                "Feliz ano novo!", "Não esqueça de beber água",
                "Deixa o like e inscreva-se", "Oi eu sou uma string",
                "Espero que tenha um ótimo dia!"];

console.log("45. Organizador de Strings");

const array = [];

for (let i = 0; i < 20; i++) {
    array[i] = strings[(Math.floor(Math.random() * strings.length))];
};

console.log("Array inicial:");
console.log(array);

const stringCounts = {}

for (string of array) {
    if (string in stringCounts) {
        stringCounts[string] += 1;
    } else {
        stringCounts[string] = 1;
    };
};

console.log("Objeto:");
console.log(stringCounts);