const prompt = require("./utils/prompts.js");

const validCharacters = "0123456789.abcdefgijklmnopqrstuvwxyz"

console.log("41. Gerador de e-mail");

const person = prompt.promptJson('Insira um objeto em JSON com as propriedades "nome" e "idade" de uma pessoa: ', ["nome", "idade"]);

if (typeof(person.nome) != "string") {
    person.nome = person.nome.toString();
}

console.log("> Idade: " + person.idade);

let email = ""

for (let i = 0; i < person.nome.length; i++) {
    const char = person.nome.charAt(i).toLowerCase();
    if (!(validCharacters.includes(char))) {
        continue;
    };
    if (char === "." && (i === 0 || i === person.nome.length - 1 || email.slice(-1) === ".")) {
        continue
    };
    email += char;
};
email += "@gmail.com";

person.email = email;

console.log("> Seu e-mail: " + email);

console.log("> Objeto final:")
console.log(person)