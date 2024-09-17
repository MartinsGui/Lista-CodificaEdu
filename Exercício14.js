/* 14. Manipulando Objetos Complexos
○ Objetivo: Crie um objeto empresa com uma propriedade departamentos,
que é um array de objetos. Cada departamento tem um nome e uma lista
de funcionarios. Use for in e for of para iterar sobre os departamentos
e seus funcionários, exibindo o nome de cada funcionário junto com o
departamento ao qual pertence. */
const company = {
    departments: [
        {
            name: 'Doctor',
            employees: [{ name: 'Alice' }, { name: 'Bob' }]
        },
        {
            name: 'Developer',
            employees: [{ name: 'Charlie' }, { name: 'David' }]
        }
    ]
};

for (const department of company.departments) {
    console.log(`Department: ${department.name}`);
    for (const employee of department.employees) {
        console.log(`  Employee: ${employee.name}`);
    }
}
