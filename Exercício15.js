/* 15. Filtrando e Somando Valores
○ Objetivo: Crie um array de objetos transacoes, onde cada transação tem
tipo (entrada ou saída) e valor. Use forEach para calcular o saldo final,
somando as entradas e subtraindo as saídas */
const transactions = [
    { type: 'income', amount: 1000 },
    { type: 'expense', amount: 500 },
    { type: 'income', amount: 200 },
    { type: 'expense', amount: 150 }
];

let balance = 0;
transactions.forEach(transaction => {
    if (transaction.type === 'income') {
        balance += transaction.amount;
    } else if (transaction.type === 'expense') {
        balance -= transaction.amount;
    }
});

console.log(`Final balance: $${balance}`);
