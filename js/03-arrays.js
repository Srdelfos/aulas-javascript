// Array também é conhecido como vetor. 

console.log("Arrays!");

// Declarando um array
let alunos = ["Paul Atreides", "Leto II", "Duncan Idaho"]

// Exibindo a estrutura do array
console.log(alunos);

// Acessando um elemento específico do array 
console.log(`${alunos[2]} é o último Kwisatz Haderach!`);

/* Mini-exercício

1) Criar um novo array contendo o nome de 7 coisas que você gosta (artista, música, livro, comida...)

2) Em seguida, mostre no console uma frase personalizada indicando o nome do segundo, quinto e do sétimo elemento array. Use concatenação OU template string.
*/

let exerc = ["Paul Atreides","Murbella", "Miles Teg", "Alia Atreides", "Scytale", "Duncan Idaho", "Leto II"]

console.log(exerc);

console.log(`${exerc[1]} se tornou a grande mãe comandante.`);
console.log(`${exerc[4]} é o último mestre Tleilaxu vivo.`);
console.log(`No fim, ${exerc[6]} novamente se uniu aos vermes da areia.`);

/* Array como Matriz de 2 dimensões */
const tecnologias = [
    ["HTML5", "CSS3", "JavaScript"], 
    ["Figma","Photoshop"],
    ["PHP","Node.js","SQL","Express", ["Apache","IIS"]] 
];

// console.log(tecnologias);

console.log(tecnologias[0][2]); // Mostrar somente o JavaScrpit
console.log(tecnologias[1][0]); // Mostrar somente o Figma
console.log(tecnologias[2][3]); // Mostrar somente o Express
console.log(tecnologias[0][0]); // Mostrar somente o HTML5
console.log(tecnologias[2][4][0]); // Mostrar somente o Apache





