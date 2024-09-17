/* 11. Agrupando Elementos com forEach
○ Objetivo: Crie um array de objetos pedidos, onde cada pedido tem
cliente, produto, e quantidade. Use forEach para criar um objeto que
agrupa a quantidade total de produtos por cliente */
const orders = [
    { customer: 'Alice', product: 'Laptop', quantity: 1 },
    { customer: 'Chester', product: 'Phone', quantity: 2 },
    { customer: 'Alice', product: 'Tablet', quantity: 3 },
    { customer: 'Abby', product: 'Laptop', quantity: 1 },
    { customer: 'Cherster', product: 'Phone', quantity: 6 }
];

const customerTotals = {};

orders.forEach(order => {
    if (!customerTotals[order.customer]) {
        customerTotals[order.customer] = 0;
    }
    customerTotals[order.customer] += order.quantity;
});

console.log(customerTotals);
