/* 6. Filtrando Arrays de Objetos
○ Objetivo: Crie um array de objetos funcionarios, onde cada objeto
contém informações como nome, cargo, e salario. Use for of para filtrar
e exibir apenas os funcionários cujo salário seja maior que um valor
específico.
 */
const employees = [
    { name: 'Alice', position: 'Developer', salary: 120000 },
    { name: 'Bob', position: 'Designer', salary: 90000 },
    { name: 'Charlie', position: 'Manager', salary: 50000 }
];

const salaryThreshold = 100000;
const highEarners = [];

for (let employee of employees) {
    if (employee.salary > salaryThreshold) {
        highEarners.push(employee);
    }
}

console.log(highEarners);
