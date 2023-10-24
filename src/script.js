// Loader
window.addEventListener('load', function(){
    this.document.querySelector('.preloader').classList.add('opacity-0');
    setTimeout(function(){
        document.querySelector('.preloader').style.display='none';
    },1000);
});
// Fim do Loader


// Troca de tela

// Fim da troca de tela


// Funções

// Funções fim


// Calculadora
function insert(num){
    var numero = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = numero + num;
}

function clean(){
    document.getElementById('resultado').innerHTML = "";
}

function back(){
    var resultado = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = resultado.substring(0, resultado.length -1)
}

function calcular(){
    var resultado = document.getElementById('resultado').innerHTML;
    if(resultado){
        document.getElementById('resultado').innerHTML = eval(resultado);
    }
    else{
        document.getElementById('resultado').innerHTML = 'Error'
    }
}
// Calculadora fim


// Cartão

// Cartão fim


// Teclado

// Teclado fim