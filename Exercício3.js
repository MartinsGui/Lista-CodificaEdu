/* 3. Filtrando Propriedades de Objetos
○ Objetivo: Dado um objeto produto com várias propriedades, crie uma
função que retorna um novo objeto contendo apenas as propriedades cujo
valor seja maior que um valor específico. Use for in para filtrar as
propriedades. */
const products = [
    {
        name: 'Pencil',
        price: 7.99
    },
    {
        name: 'Car',
        price: 8500
    }
];
const value = 7.98; 
const filterProduct = [];

for (const product of products) {
    if (product.price > value) {
        filterProduct.push(product);
    }
}

console.log(filterProduct);

