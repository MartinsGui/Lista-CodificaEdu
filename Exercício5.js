/* 5. Calculando Valores em Arrays de Objetos
○ Objetivo: Crie um array de objetos alunos, cada um com propriedades
nome, nota1, e nota2. Use for of para calcular a média das notas de cada
aluno e exibir o nome do aluno junto com sua média.
 */
const students = [
    { name: "Jagunço", score1: 8, score2: 9 },
    { name: "Tião", score1: 7, score2: 6 },
    { name: "Jão", score1: 6, score2: 6 },
]
for (const student of students) {
    const avarage = (student.score1 + student.score2) / 2
    console.log(`${student.name} have avarage ${avarage}`)
    }