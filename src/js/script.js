var botao = document.getElementById("botao");
botao.addEventListener("mouseover", function() {
    var x = Math.random() * window.innerWidth;
    var y = Math.random() * window.innerHeight;
    botao.style.position = "absolute"
    botao.style.top = y + "px";
    botao.style.left = x + "px";
})
