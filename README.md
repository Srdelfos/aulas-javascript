# Aulas JavaScript

Introdução ao JavaScript para uso básico.

## Sobre a linguagem 

- JavaScript **NÃO É** Java!
- JavaScript = JS = EcmaScript
- É uma linguagem voltada principalmente para o Front-End
- Mas também pode ser usada no Back-End através de plataformas como o node.js por exemplo
- Até mesmo no nicho de apps Mobile, o JS também pode ser usado (React, Next.js, React Native etc)

## Onde usar o JS dentro do Front-End? 

- Funcionalidades de menu responsivo
- Galeria de fotos
- Carousel/Slider de conteúdo
- Recursos avançados de formulário (validação, integração com API)
- Interações avançadas (manipulação de mouse, teclado, gestos, toques etc)

## Como implementar? 

### Interna

Programação feita dentro da própria página HTML usando a tag `<script>`, usada principalmente principalmente quando são scripts mais simples ou pequenos. 

### Externa

Programação feita dentro de arquivos JavaScript exclusivos (possuem a expansão **.js**), usada principalmente quando queremos reutilizar scripts entre páginas HTML diferentes. A ligação entre o arquivo JavaScript e a página HTML também é feita usando a tag `<script>`. É a forma mais recomendada. 

**Obs.:** Normalmente a programação é feita (ou ligada) **NO FINAL ** da página HTML, portanto, pouco antes do fechamando `<body>`.

---

## Sobre Arrays

Arrays são estruturas de dados **indexados**, também conhecidos como **vetores** ou **matrizes**.

Na prática, um array é uma lista de dados sequenciais, e cada dado é armazenado em uma posição/índice do array. 

**Obs.:** a contagem de elementos do array, **sempre inicia em zero**.

---

## Sobre Objetos 

Objetos também são estruturas de dados só que **não-indexados**, ou seja, o acesso aos dados é feita de forma diferente das que vimos nos arrays. No objeto, acessamos através de **propriedades** e **valores** declarados dentro do objeto.

Normalmente, o objeto é programado de acordo com algum contexto relacionado ao mundo real. 

---

## Sobre condicionais

São estruturas/comandos que permitem analisar uma ou mais condições dentro de uma aplicação.

De acordo com o resultado dessa análise, podendo ser **verdadeiro/true** ou **falso/false**, a aplicação poderá fazer ações diferentes. 

## Operadores relacionados 

Ao trabalhar com condicionais, é comum utilizar operações relacionais para comparação dentro das condições. Os operadores mais comuns são: 

- Maior que         >
- Menor que         <
- Maior ou igual    >=
- Menor ou igual    <=
- Igualdade         ==
- Diferença         !=

---

## Sobre comandos de repetição

São estruturas/comandos que permitem a execução repetidas vezes de uma ou mais ações/comandos/operações. Também conhecidos como **loops** ou **laços de repetição**.

A quantidade de vezes que o loop será executado dependerá de alguma lógica ou condição definida pelo programador ou pelo sistema/aplicação. Também é comum que, para que o loop pare de executar, seja definida uma variável de controle de repetição. 