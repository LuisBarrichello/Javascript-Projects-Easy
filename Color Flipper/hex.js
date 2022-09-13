//Array para gerar colres de fundo
const hex = [ 0 , 1 , 2 , 3 , 4 , 5 , 6 , 7 , 8 , 9 , " A " , " B " , " C " , " D " , " E " , " F " ];

//pegando botao pelo seu ID
const button = document.getElementById('btn');

//Pegando o span da cor que aparece na pagina 
const color = document.querySelector(".color");

//adicioandno o escutador de evento no botao e adicionadno a logica que irar ser: toda vez que clicar no botao, a cor do fundo é alterada conforme a cor em Hexdecimal que é gerada a partir da função getRandomNumber*/
button.addEventListener('click', function() {
    //declaração da variavel HexColor onde tera o valor da cor
    let hexColor = "#";

    //laço para agrupar 6 numeros aleatorios gerado pela função getRandomNumber para gerar a cor;
    for(let i = 0; i < 6; i++){
        hexColor += hex[getRandomNumber()];
    };

    //Adicionado a cor gerada na tela, para saber em hexdecimal a cor do fundo
    color.textContent = hexColor;

    //alterarndo com de fundo com a cor hex gerada
    document.body.style.backgroundColor = hexColor;

});

//Função para gerar numero aleatorio entre a quantidade de index do array hex(16 index)
function getRandomNumber () {
    return Math.floor(Math.random() * hex.length);
};