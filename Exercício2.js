/* 2. Verificando Propriedades
○ Objetivo: Crie um objeto livro com propriedades titulo, autor,
anoPublicacao e genero. Verifique se a propriedade editora existe no
objeto usando for in. Se não existir, adicione essa propriedade ao objeto */
const livro ={
    titulo : "A volta dos que não foram",
    autor : "Martins Guilherme",
    anoPublicado : 1800,
    genero : "Comédia",
}
const newQuery = "editora";
let proprety = false;
for(let editora in livro) {
    if(editora.includes(livro)){
        proprety = true;
    }
    else{
        livro.editora = "Minha casa"
    }
}
console.log(livro);
