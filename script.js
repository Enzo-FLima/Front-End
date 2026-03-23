const img = document.getElementById("main");
const btn = document.getElementById("btn");

const estados = {
    normal: "./imagensJS/Criatura fofinha de pelúcia verde menta.png",
    comendo: "./imagensJS/criatura_comendo.png",
    feliz: "./imagensJS/criatura_feliz.png",
    fome: "./imagensJS/Brava.png",
    fome2: "./imagensJS/morto.png"
};

let contador = 0;
let intervalo = null;
let timeClick = null;
let timeOut = null;

function initConta(){
    if(intervalo) clearInterval(intervalo);
    intervalo = setInterval(() => {
        contador++;

        console.log("Tempo: " + contador);

        if(contador == 30){
            img.src = estados.fome
        }
        
        if(contador == 60){
            img.src = estados.fome2
        }

}, 1000)};

initConta();