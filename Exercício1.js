/*1. Acessando Propriedades de Objetos
○ Objetivo: Crie um objeto carro com propriedades como marca, modelo,
ano, e cor. Use for in para iterar sobre as propriedades e exibir seus valores no console. */
const car = {
    Marca : 'Toyota',
    Modelo : 'Corola',
    Year : 2022,
    Color : 'Silver',
}
for(let proprety in car) {
    console.log(`${proprety}: ${car[proprety]}`);
}

