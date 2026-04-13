window.onload = () => {
    document.getElementById("conteudo").classList.add("blur");
};

function verificarIdade() {
    const idade = document.getElementById("idade").value;

    if (idade >= 18) {
        document.getElementById("ageGate").style.display = "none";
        document.getElementById("conteudo").classList.remove("blur");
    } else {
        alert("Acesso permitido apenas para maiores de 18 anos!");
    }
}