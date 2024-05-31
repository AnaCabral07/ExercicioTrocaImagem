document.getElementById("troca").addEventListener("click", (evt) => {
    evt.preventDefault();

    const imagem = document.getElementById("gatitos");

    const index = Math.floor(Math.random() * 15);

    imagem.src = `img/gatitos${index}.jpg`;
});

