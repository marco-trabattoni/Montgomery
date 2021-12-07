// assegno alla variabile l'elemento "myModal"
var modal = document.getElementById("myModal");

var overlay = document.getElementById("overlay");


var btn = document.getElementById("myBtn");

// assegno alla variabile il primo elemento con classe "close"
var span = document.getElementsByClassName("close")[0];

// quando si clicca sul bottone esegue la funzione
btn.onclick = function() {
  modal.style.display = "block";
  overlay.style.display = "block";
}


span.onclick = function() {
  modal.style.display = "none";
  overlay.style.display = "none";

}
