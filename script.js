// Mostrar flores y pop-up
document.getElementById("mostrarFlores").addEventListener("click", function() {
  document.getElementById("flores").style.display = "block";
  this.style.display = "none";

  // Mostrar pop-up sorpresa
  document.getElementById("popup").style.display = "block";
});

// Cerrar pop-up
document.getElementById("cerrarPopup").addEventListener("click", function() {
  document.getElementById("popup").style.display = "none";
});

// Corazones flotando
function crearCorazon() {
  const heart = document.createElement("div");
  heart.classList.add("heart");
  heart.innerHTML = "❤️";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration = (4 + Math.random() * 3) + "s";
  document.getElementById("hearts").appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 7000);
}

setInterval(crearCorazon, 500);
