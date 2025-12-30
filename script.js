function abrirPopup() {
  document.getElementById("meuPopup").style.display = "flex";
}

function fecharPopup() {
  document.getElementById("meuPopup").style.display = "none";
}

document.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    fecharPopup();
  }
});