const aviso = document.getElementById("aviso-clicavel");
const links = document.querySelectorAll(".link");

links.forEach(link => {
    link.addEventListener("mouseover", () => {
        aviso.textContent = "Clique para acessar";
        aviso.style.opacity = "1";
    });

    link.addEventListener("mouseout", () => {
        aviso.style.opacity = "0";
    });
});