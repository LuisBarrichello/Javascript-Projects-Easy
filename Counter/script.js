//variavel que será nosso inicio do contator 
let contador = 0;

//pegando span onde será apresentado nosso contador
const valor =  document.querySelector('#valor');

//Selecionando todos botoes para criar suas respectivas funções
const btns = document.querySelectorAll('.button');

//O método forEach() executa uma dada função em cada elemento ou/e um array, no nosso caso, será botoes
btns.forEach(function (btn) {
    btn.addEventListener('click', function(e){
        const styles = (e.currentTarget.classList)

        //sequencia de 'ifs' para verificação de qual botao se trata o click e executando a função respectiva
        //
        if(styles.contains('desincrementar')){
            contador--;
        } else if (styles.contains('reset')) {
            contador = 0;
        } else if (styles.contains('incrementar')) {
            contador++;
        }

        //Adicionando colores caso sega negativo e positivo
        if (contador > 0){
            valor.style.color = 'green'
        }
        if (contador < 0) {
            valor.style.color = 'red'
        }
        if (contador === 0) {
            valor.style.color = 'black'
        }

        //Adicionando na tela o resultado do contador depois do click em qualquer botao
        valor.textContent = contador;
    })
})