// funzione per il cambio di tema


function changeTheme(name) {

    let cssFile = "style-" + name + ".css";  // concatena il valore passato alla funzione a una stringa in modo da ottenere il nome del file css assegnato alla variabile

    var oldCss = document.getElementsByTagName("link").item(0); // assegna alla variabile il primo elemento all'interno della pagina con il tagname "link"


    var newCss = document.createElement("link"); // assegna alla variabile un nuovo elemento con il tag "link"
    newCss.setAttribute("rel", "stylesheet");  // imposta gli attributi del nuoco elemento
    newCss.setAttribute("type", "text/css");
    newCss.setAttribute("href", cssFile); // imposta come collegamento al foglio di stile la variabile cssFile

    document.getElementsByTagName("head").item(0).replaceChild(newCss,oldCss);


    window.localStorage.setItem('theme', name);
}





function setupPage() {
  let theme = window.localStorage.getItem('theme');

  if (theme === 'null') {
    theme = 'base';
  }

  changeTheme(theme);


  let selector = document.getElementById("themeSelector")
  selector.value = theme; // assegna al valore del selttore di id "themeSelector" la variabile theme


}

window.onload = setupPage; // al caricamento della pagina viene invocata la funzione setupPage
