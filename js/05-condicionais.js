/* Comandos condicionais mais comuns:
if = SE
else = SENÃO
*/

// Exemplo 1: condicional simples
let numero = 5;

if( numero > 10 ){
    console.log(numero);   
}

// Exemplo 2: condicional composta
let aluno = "Klaibert";
let idade = 78;

/*  Lógica: verificar se o aluno é maior de idade ou maior de idade. */
if( idade < 18 ){
    console.log("É menor de idade");
} else {
    console.log("É maior de idade");
}

console.log("---\n");


/* 
Exercícios

1) Crie duas variáveis conforme a seguir:
Nota 1 (contendo um valor de 0 a 10)
Nota 2 (contendo outro valor de 0 a 10)

2) Crie uma variável chamada "Média" que receberá o valor CALCULADO da média das duas notas informadas. DICA: você deve SOMAR as duas notas e DEPOIS dividir por 2.

3) Programe uma condicional que verifique o valor da média calculada. Se a média for maior/igual a 7, mostre "aprovado". Caso contrário, mostre "reprovado",
*/

let nota1 = 5;
let nota2 = 9;
let media = (nota1 + nota2)/2
console.log(media);   

if( media >= 7){
    console.log("Aprovado");
} else {
    console.log("Reprovado");    
}

/* ShortHand if/else (if/else "curto/abreviado")
usando operador ternário ?:  */
let situacao = media >= 7 ? "aprovado" : "reprovado";
console.log(situacao);
