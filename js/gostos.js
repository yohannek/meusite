document.addEventListener("DOMContentLoaded", function() {
    let gostos = JSON.parse(localStorage.getItem("meusgostos")) || { 
        filmes: [{ id: 1, titulo: "Alice no País das Maravilhas", ano: 2010, favorito: true },
                { id: 2, titulo: "Crepúsculo", ano: 2008, favorito: true } ],
        bandas: [{ id: 1, nome: "BTS", pais: "Coreia do Sul", favorito: true }], 
        series: [{ id: 1, titulo: "The 100", temporadas: 7, favorito: true }] };
    let abaAtual = "filmes";
        const container = document.getElementById("container-gostos");
            function mostrarGostos() {
                container.innerHTML = ""; 
                    gostos[abaAtual].forEach(function(item) {
        const card = document.createElement("div");
            card.classList.add("card-gosto");
        const titulo = item.titulo || item.nome;
        const ano = item.ano? "Ano: " + item.ano : "";
        const temporadas = item.temporadas? "Temporadas: " + item.temporadas : "";
        const pais = item.pais? "País: " + item.pais : "";
        const fav = item.favorito? "⭐ Favorito" : "";
        card.innerHTML = "<h3>" + titulo + "</h3>" + "<p>" + ano + "</p>" + "<p>" + temporadas + "</p>" + "<p>" + pais + "</p>" + "<span class='favorito'>" + fav + "</span>";
    container.appendChild(card);
  });
}
document.querySelectorAll(".aba-btn").forEach(function(botao) {
  botao.addEventListener("click", function(e) {
    document.querySelector(".aba-btn.ativo").classList.remove("ativo");
    e.target.classList.add("ativo");
    abaAtual = e.target.dataset.aba;
    mostrarGostos();
  });
});
document.getElementById("btn-adicionar").addEventListener("click", function() {
  const novo = prompt("Adicionar novo " + abaAtual + ":");
    if(novo === "" || novo === null){ alert("Digite algo!"); return; }
  const novoItem = { id: Date.now(), favorito: false };
     if(abaAtual === "filmes") novoItem.titulo = novo;
    if(abaAtual === "bandas") novoItem.nome = novo;
    if(abaAtual === "series") novoItem.titulo = novo;
  gostos[abaAtual].push(novoItem);
    localStorage.setItem("meusGostos", JSON.stringify(gostos));
        mostrarGostos();
    });
mostrarGostos();
});