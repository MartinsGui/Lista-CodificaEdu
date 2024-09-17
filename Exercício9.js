/* 9. Contabilizando Elementos com uma Condição
○ Objetivo: Crie um array de objetos clientes, cada um com propriedades
nome, idade, e cidade. Use forEach para contar quantos clientes têm mais
de 30 anos. */
const customers = [
    { name: 'John', age: 28, city: 'New York' },
    { name: 'Guilherme', age: 27, city: 'Gravataí' },
    { name: 'Mike', age: 31, city: 'Chicago' },
    { name: 'Marcel', age: 57, city: 'Chicago' }
];

let countOver30 = 0;
customers.forEach(customer => {
    if (customer.age > 30) {
        countOver30++;
    }
});

console.log(`Number of customers over 30: ${countOver30}`);
