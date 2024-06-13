const prompt = require("./utils/prompts");

const options = [
    "pedra",
    "tesoura",
    "papel"
]

console.log("5. JoKenPo");

const playerChoice = prompt.promptOptions("Pedra, papel ou tesoura? ", options);
const playerChoiceIndex = options.indexOf(playerChoice)

const computerChoice = Math.floor(Math.random() * options.length);

console.log(`> Você escolheu ${playerChoice}!`)
console.log(`> Eu escolhi ${options[computerChoice]}!`)

if (playerChoiceIndex === computerChoice) {
    console.log("> Empate!")
} else if ((playerChoiceIndex + 1) % options.length === computerChoice) {
    console.log("> Você venceu!")
} else {
    console.log("> Computador venceu!")
};