/* 13. Implementando um Carrinho de Compras
○ Objetivo: Crie um objeto carrinho com uma propriedade itens, que é um
array de objetos. Cada objeto dentro de itens deve representar um
produto no carrinho, com nome, quantidade, e precoUnitario. Use forEach
para calcular o valor total do carrinho. */
const cart = {
    items: [
        { name: 'Pen', quantity: 3, unitPrice: 1.50 },
        { name: 'Notebook', quantity: 2, unitPrice: 5500.00 },
        { name: 'Backpack', quantity: 1, unitPrice: 25.00 }
    ]
};

let totalCartValue = 0;
cart.items.forEach(item => {
    totalCartValue += item.quantity * item.unitPrice;
});

console.log(`Total cart value: $${totalCartValue.toFixed(2)}`);
