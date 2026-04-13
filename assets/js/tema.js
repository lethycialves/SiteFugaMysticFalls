function alternarTema() {
    const body = document.body;
    const botao = document.getElementById("btnTema");

    body.classList.toggle("light");

    if (body.classList.contains("light")) {
        botao.innerText = "Tema Escuro";
    } else {
        botao.innerText = "Tema Claro";
    }
}