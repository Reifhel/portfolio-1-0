var currentNumberWrapper = document.getElementById('currentNumber');
var currentNumber = 0;

const botaoAumenta = document.getElementById('adicionar');
const botaoDiminui = document.getElementById('subtrair');

botaoAumenta.addEventListener('click', increment);
botaoDiminui.addEventListener('click', decrement);

function verificar(){

    if(currentNumber < 0){
        currentNumberWrapper.style.color = 'red';
    }
    else{
        currentNumberWrapper.style.color = 'white'; 
    }


    document.body.style.background  = gerarCor();
}

function increment(){
    currentNumber = currentNumber + 1;
    currentNumberWrapper.innerHTML = currentNumber;
    verificar();
}

function decrement(){
    currentNumber = currentNumber - 1;
    currentNumberWrapper.innerHTML = currentNumber;
    verificar();
}

function gerarCor(opacidade = 1){
    let r = Math.random() * 255;
   let g = Math.random() * 255;
   let b = Math.random() * 255;

   return `rgba(${r}, ${g}, ${b}, ${opacidade})`;
}