/* 12. Atualizando um Array de Objetos
○ Objetivo: Crie um array de objetos estoque, onde cada objeto tem
produto, quantidade e minimo. Use forEach para atualizar a quantidade
dos produtos que estão abaixo do mínimo, duplicando suas quantidades. */
const inventory = [
    { product: 'Pen', quantity: 5, minimum: 10 },
    { product: 'Notebook', quantity: 20, minimum: 15 },
    { product: 'Backpack', quantity: 8, minimum: 10 }
];

inventory.forEach(item => {
    if (item.quantity < item.minimum) {
        item.quantity *= 2;
    }
    console.log(`Product: ${item.product}, Updated Quantity: ${item.quantity}`);
});
