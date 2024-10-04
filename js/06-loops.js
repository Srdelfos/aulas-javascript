/* Principais comandos de repetição
- while -> ENQUANTO
- for   -> PARa

São comandos de uso geral, existem em praticamente qualquer linguagem de programação.
*/

// Exemplo 1: while
let contador = 1;

while (contador <=5){
    console.log("Valor do contador é:"+contador);
    contador++; // ++ é o operador de incremento 
}

console.log("---\n");

// Exemplo 2: for 
for( let contador =1; contador <=10; contador ++){
    // alert("Oieeee pela"+contador+"ª vez!")
    console.log("Oieeee pela"+contador+"ª vez!");

}

// alert("Fim");

/* Nomenclatura para variáveis de controle, embora possamos dar qualquer nome (como contador por exemplo), geralmente são usadas as letras i, j ou k (ou outras letras se necessário). */
for( let i = 1; i <=3; i++ ){
    console.log("Valor de i é:"+i);
}

/* Loops exclusivos do JS para estruturas de dados */

// for/of -> loop para arrays
const cores = ["azul", "verde", "amarelo", "roxo", "vermelho", "preto"];

for (const cor of cores) {
    console.log(cor); 
}

console.log("\n--- ");

// Usando o for tradicional

// Guardando o tamanho do array uma vez (fazendo cache do array)
let quantidade = cores.length;

for( let i = 0; i < quantidade; i++ ){
    
    // Usamos i dentro dos colchetes como índice dinâmico do array
    console.log(cores[i]);
}
/* 
Também pode ser: (dependendo da quantidade de informações pode causar lentidão)
for( let i = 0; i < cores.length; i++ ){
    console.log(cores[i]);
    } 
    */
   
   
   
   console.log("\n--- ");
   // for/in -> loop para objetos
   const pessoa = {
       nome: "Peppa Pig",
       idade: 4,
       cidade: "Vila da Folha",
       estado: "VF",
       email: "peppa@pig.com",
       irmao: "George Pig"
    }
    
    for( const prop in pessoa){
        // Mostrar somente o nome da propriedade
        console.log(prop);
        
        // Mostrar somente o valor da propriedade
        console.log(pessoa[prop]);   
    }


    console.log("\n--- ");

/* Exercício:

1) Faça um array chamado "clientes" contendo 3 objetos. Cada objeto deverá ter uma propriedade "identificador" (com valores 1, 2 e 3) e uma propriedade "nome" com os nomes dos clientes 

2) Faça um loop (qualquer um dos que vimos) e mostre no console os dados de cada cliente conforme a seguir: 
- Cliente: nome, id: 1
- Cliente: nome, id: 2
- Cliente: nome, id: 3
*/



const clientes = [
    {
        nome: "Peppa Pig",
        id: 1,
    },
    {
        nome: "Mamãe Pig",
        id: 2,
    },
    {
        nome: "Papai Pig",
        id: 3,
    }, 
]

for(const cliente of clientes){
    console.log(cliente);
}

