function revelar(){
    img = document.getElementById("imagem");
    img.src = "../img/_vinicius_junior.png";

    const nome = document.getElementById("nome_jogador");
    const rank = document.getElementById("Rank");
    const nascimento = document.getElementById("Data_Nas");
    const altura = document.getElementById("Alutra");
    const pos = document.getElementById("Posição");

    nome.textContent = "Vinicius José Paixão de Oliveira Júnior";
    rank.innerHTML = "9,5";
    nascimento.textContent = "12/07/2000 (25 anos)";
    altura.innerHTML = "1.76";
    pos.textContent = "Ponta-esquerda / Atacante";

    const elementos = document.getElementsByClassName("placeholder");
    while (elementos.length > 0) {
        elementos[0].classList.add("card-text");
        elementos[0].classList.remove("placeholder");
    }
}