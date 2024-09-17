/* 8. Criando Novos Arrays a Partir de Objetos
○ Objetivo: Crie um array de objetos filmes, onde cada filme tem titulo,
diretor, e anoLancamento. Use forEach para criar um novo array
contendo apenas os títulos dos filmes. */
const movies = [
    { title: 'Inception', director: 'Christopher Nolan', releaseYear: 2010 },
    { title: 'The Matrix', director: 'Lana Wachowski', releaseYear: 1999 },
    { title: 'Interstellar', director: 'Christopher Nolan', releaseYear: 2014 }
];

const movieTitles = [];
movies.forEach(movie => movieTitles.push(movie.title));

console.log(movieTitles);
