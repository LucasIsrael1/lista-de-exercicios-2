const generator = require("./utils/generator.js");

const strings1 = ["Bom dia", "Feliz Páscoa!", "Olá mundo", "Miau miau"];
const strings2 = ["Feliz ano novo!", "Não esqueça de beber água", "Deixa o like e inscreva-se", "Oi eu sou um texto"];

console.log("42. Filtrador de Array");

const object = {
    "number": Math.round(Math.random() * 20),
    "text": strings1[(Math.floor(Math.random() * strings1.length))],
    "array": generator.randomArray(5),
    "bool": Math.random() > 0.5,
    "anotherNumber": Math.round(Math.random() * 20),
    "anotherArray": generator.randomArray(3),
    "anotherText": strings2[(Math.floor(Math.random() * strings2.length))],
    "thirdArray": generator.randomArray(6)
}

console.log("Objeto original:");
console.log(object);

const arrayObject = {}

for (i in object) {
    if (Array.isArray(object[i])) {
        arrayObject[i] = object[i];
    };
};

console.log("Objeto filtrado:");
console.log(arrayObject);