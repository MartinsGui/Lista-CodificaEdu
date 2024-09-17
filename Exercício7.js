/* 7. Modificando Objetos em um Array
○ Objetivo: Crie um array de objetos produtos, onde cada objeto tem nome,
preco, e desconto. Use forEach para aplicar um desconto de 10% em todos
os produtos e exibir o novo preço. */
const products = [
    { name: 'Pen', price: 1.50, discount: 0 },
    { name: 'Notebook', price: 5500.00, discount: 0 },
    { name: 'Backpack', price: 25.00, discount: 0 }
];

products.forEach(product => {
    product.discount = 0.10; 
    product.price = product.price * (1 - product.discount);
    console.log(`Name: ${product.name}, New Price: ${product.price.toFixed(2)}`);
});
