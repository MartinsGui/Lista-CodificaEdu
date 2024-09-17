/* 10. Criando Relatórios com Objetos e Arrays
○ Objetivo: Crie um array de objetos vendas, onde cada objeto tem produto,
quantidade e valor. Use forEach para calcular o valor total de vendas de
todos os produtos. */
const sales = [
    { product: 'Laptop', quantity: 2, value: 6500 },
    { product: 'Phone', quantity: 5, value: 4000 },
    { product: 'Tablet', quantity: 3, value: 1700 }
];

let totalSales = 0;
sales.forEach(sale => {
    totalSales += sale.quantity * sale.value;
});

console.log(`Total sales value: $${totalSales}`);
