/* 4. Iterando Sobre Arrays de Objetos
○ Objetivo: Crie um array de objetos pessoas, onde cada objeto representa
uma pessoa com nome, idade, e cidade. Use for of para exibir as
informações de cada pessoa no console */
const persons = [
    {name: "Guilherme", age: 27, city: "Gravataí"},
    {name: "Marcelo", age: 26, city: "Sydney"},
    {name: "Tiburcio", age: 56, city: "Tucunduva"}
];

let num = 1;

for (let person of persons) {
    // Exibe todas as propriedades e seus valores
    for (let key in person) {
        console.log(`${key}: ${person[key]}`);
    }
    // Exibe uma string formatada com as propriedades específicas
    console.log(`==============||============`);
    num++;
}

