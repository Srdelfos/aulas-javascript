/* Funções de acesso e maniplação do DOM 

- querySelector() é uma função para selecionar UM ÚNICO elemento na página (DOM).

- querySelectorAll() é uma função para selecionar VÁRIOS elementos na página (DOM).

Nos dois casos, a seleção é feita usando seletores comuns ao que fazemos no CSS.*/

/* Exemplos */
const titulo = document.querySelector("h1");
const textoDom = document.querySelector(".texto-dom");
const subTitulos = document.querySelectorAll("h2");
const varios = document.querySelectorAll("p, img, button");
console.log(varios);

/* Modificando elementos no DOM */
titulo.textContent = "Olá JavaScript!";
textoDom.innerHTML = "<i>O Marcio será reprovado!</i>";

/* Selecionar todos os links da lista de referências e colocar neles o atributo target valendo_blank. */

const links = document.querySelectorAll(".lista-de-referencias a");
console.log(links);

/* Se fosse um por um
links[0].setAttribute("target", "_blank"); */
 
// Faça a mesma coisa usando o for/of

for (const link of links) {
    // Versão 1 (moderna, vale para qualquer atributo)(usando atributo via propriedade)
    link.setAttribute("target", "_blank");
    
    /* versão 2 (usando atributo via propriedade) mais antiga, vale para atributos nativos do HTML 
    link.target = '_blank';   
     */
}

/* Manipulando Eventos */
const ex1 = document.querySelector("#exemplo01");
const msg = document.querySelector("#mensagem");

ex1.addEventListener("click", function(){
    msg.innerHTML = "Olá 😘!";
})