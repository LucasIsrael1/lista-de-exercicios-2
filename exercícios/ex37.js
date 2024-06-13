const generator = require("./utils/generator.js");

const students = require("./data/students.json").students;

const answers = generator.randomTextArray(20, ["A", "B", "C", "D", "E"]);

console.log("37. Corretor de provas");

console.log("> Gabarito:")
console.log(answers);

for (student of students) {
    console.log(student.R);
    let correctAnswers = 0;
    for (i in student.R) {
        if (student.R[i] === answers[i]) {
            correctAnswers++;
        };
    };
    console.log(`> ${correctAnswers} questões corretas, você foi ${correctAnswers < 12 ? "REPROVADO" : "APROVADO"}!`)
};