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

/* Poderiamos tamtém usar a função getelementByid em vez do querySelector. A diferença é que ela só funciona para seleção através do ID. Obs.: ao usá-la NÂO COLOQUE #.   
const ex1 = document.getElementById("exemplo01");*/

const msg = document.querySelector("#mensagem");
const pagina = document.querySelector("body");

/* Função Ouvinte de Evento (Event Listener) - aplicando ao elemento ALVO do evento desejado("click") e uma função para executar as ações a partir do evento. Obs.: esta função é considerada do tipo "anônima" e é conhecida como "callback". */
ex1.addEventListener("click", function(){
    /* Acessamos o parágrafo vazio e colocamos um conteúdo dentro dele*/
    msg.innerHTML = "Olá 😘!";

    /* Modificar a página alterando a fonte (CSS via JS) */
    pagina.style.fontFamily = "Verdana";
})

/* Ouvinte de evento para voltar ao normal (sem texto no parágrafo e com fonte padrão na página). O evento ocorrerá ao clicar DUAS VEZES no parágrafo da mensagem */
msg.addEventListener("dblclick", function(){
    msg.innerHTML = ""; // Remove o conteúdo do parágrafo
    pagina.style.fontFamily = "initial"; // Voltando para fonte padrão
});

 /* Exemplo 02: modo noturno*/
 const botaoAtivar = document.querySelector("#ativar");
 botaoAtivar.addEventListener("click", function(){
    /* Usamos o toggle do classList para alternar a aplicação/remoção da classe "noturno". Na prática, vira um liga/desliga. */
    pagina.classList.toggle("noturno");
    pagina.style.transition = '.4s'

 /* DESAFIO: Trocar o texto do botão.
 Se a página estiver com a classe "noturno" aplicada, o botão deve mostrar a palavra "Desativar". Caso contrário, deve mostrar a palavra "Ativar". Use if/else! */

//  if (pagina.classList == "noturno"){
//     botaoAtivar.innerHTML = "Desativar"
//  } else {
//     botaoAtivar.innerHTML = "Ativar"
//  }

 if (pagina.classList.contains("noturno")){
    botaoAtivar.innerHTML = "Desativar"
 } else {
    botaoAtivar.innerHTML = "Ativar"
 }
 });

 /* Sobre o duplo e o triplo valor de igual */

 let a = "10";
 let b = 10;
 let resultado = a === b;
 console.log(resultado);

 // == Compara VALORES
 // === Compara VALORES E TIPO DE DADO
 





