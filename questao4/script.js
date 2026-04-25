function revelar(){
    img = document.getElementById("imagem");
    img.src = "../img/_vinicius_junior.png";

    nome = document.getElementById("nome_jogador");
    rank = document.getElementById("Rank");
    nascimento = document.getElementById("Data_Nas");
    altura = document.getElementById("Alutra");
    pos = document.getElementById("Posição");

    nome.textContent = "Vinicius José Paixão de Oliveira Júnior";
    rank.innerHTML = "9,5";
    nascimento.textContent = "12/07/2000 (25 anos)";
    altura.innerHTML = "1.76";
    pos.textContent = "Ponta-esquerda / Atacante";

    elementos = document.getElementsByClassName("placeholder");
    for (let i = 0; i < elementos.length; i++) {
        elementos[i].classList.remove("placeholder");
        elementos[i].classList.add("card-text");
    }
}