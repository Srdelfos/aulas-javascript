// Exemplo 1: objeto com dados de uma pessoa
const pessoa = {
    // propriedade: valor
    nome: "Robervandro",
    idade: 10,
    cidade: "São Paulo",
    estado: "SP"
};

// Exibindo a estrutura do objeto
console.log(pessoa);

// Acessando determinadas propriedades
console.log(
    `O ${pessoa.nome} tem ${pessoa.idade} anos e morar em ${pessoa.cidade}.`
);

// Exemplo 2: objeto com array
const livro = {
    titulo: "Duna",
    autor: "Frank Herbert",
    volumes: [
        "Duna", "O Messias de Duna", "Os Filhos de Duna", "O Imperador-Deus de Duna", "Os Hereges de Duna", "As herdeiras de Duna", "Os Caçadores de Duna", "OS Vermes de Duna"
    ]
}

console.log(livro);
