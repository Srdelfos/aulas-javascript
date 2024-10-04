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
    volumes: [ // Array indexado
        "Duna", "O Messias de Duna", "Os Filhos de Duna", "O Imperador-Deus de Duna", "Os Hereges de Duna", "As Herdeiras de Duna", "Os Caçadores de Duna", "OS Vermes de Duna"
    ]
}

// Exibindo a estrutura
console.log(livro);

// Acesso usando o nome da propriedade. e índice do array desta propriedade
console.log(livro.volumes[1]);

// Exemplo 3: array de objetos
const livros = [
    {
        titulo: "Percy Jackson",
        autor: "Rick Riordan"
    },
    {
        titulo: "Duna",
        autor: "Frank Herbert"
    },
    {
        titulo: "Harry Potter",
        autor: "J.K. Rowling"
    }, 
]

// Acessando através do índice a propriedade.
console.log(livros[1].autor);


/* Exercício:
1) Crie um objeto chamado "aluno" contendo os seguintes dados: 
a) Nome completo 
b) Data de nascimento
c) (Use Array) lista de telefones (fixo e celular)
d) - (Desafio: use um objeto nesta propriedade)
    endereço contendo (separadamente)
    - rua
    - número
    - bairro

2) Mostre no console o nome do aluno, o telefone celular e o bairro em que mora. 
  */

const aluno = {
    nome_completo: "Tony Tony Chopper",
    data_de_nascimento: "24/12/2007",
    
    telefones: [
        "(11) 1111-1111",
        "(11) 1-1111-1111" 
    ],

    endereco:{
        rua: "Castelo Drum",
        numero: "123",
        bairro: "Ilha de Drum"
    }
};

console.log(aluno);
console.log(aluno.nome_completo);
console.log(aluno.telefones[1]);
console.log(aluno.endereco.bairro);
 
// Em uma única linha: console.log(aluno.nome_completo, aluno.telefones[1], aluno.endereco.bairro);



