//Array das cores do background
const colors = ["Green", "Red", "Blue", "Lightgray", "Gray", "Brown"]

//Cor de fundo - Home
const colorHome = ["#F1F5F8"]

//pegando botao CLICK ME pelo seu ID
const button = document.getElementById('btn');

//pegando botao COLOR HOME pelo class css
const buttonHomeColor = document.querySelector('.btn-cor-home');

//Pegando o span da cor que aparece na pagina 
const color = document.querySelector(".color");

/*adicioandno o escutador de evento no botao e adicionadno a logica que irar ser: toda vez que clicar no botao, a cor do fundo é alterada*/
button.addEventListener('click', function() {
    //gerar numero aleatorio entre 0 - 5 
    const randomNumber = getRandomNuber();

    //Selecionando body para alteração de fundo. usando propriedade "style.backgroundColor"
    document.body.style.backgroundColor = colors[randomNumber];

    //Com Span que aparece a cor, selecionamos para aparecer cor na pagina assim que mudar
    color.textContent = colors[randomNumber];
  
    //Com Span que aparece a cor, selecionamos para aparecer a mesma cor que aparece de fundo
    color.style.color = colors[randomNumber];
})

//função que gera numero aleatorio para seleção do background
function getRandomNuber () {
    /*returna numero aleatorio, A função Math.floor(x) retorna o menor número inteiro dentre o número "x". 
    Math.random() retorna um número aleatório entre 0 (inclusive) e 1 (exclusivo), ou seja, Math.random() sempre retorna um número inferior a 1.
    Multiplicamos pela quantidade de cores para gerar um numero entre a quantidade de cores existente no array colors
    */
    return Math.floor(Math.random() * colors.length);
}

//escutador de evento de click no botao de COLOR HOME, com uma função para voltar a pagina da cor de inicio
buttonHomeColor.addEventListener('click', function() {
  //Selecionando body para alteração de fundo. usando propriedade "style.backgroundColor"
  document.body.style.backgroundColor = colorHome[0];
  
  //Com Span que aparece a cor, selecionamos para aparecer cor na pagina assim que mudar
  color.textContent = colorHome[0];
  
  //Com Span que aparece a cor, selecionamos para aparecer a mesma cor que aparece de fundo
  color.style.color = colorHome[0];

});