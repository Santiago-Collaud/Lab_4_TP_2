function cambiarDarkMode() {
    var stylesheet = document.getElementById("dark_style");
    var Stylesheet = "/css/style.css"; // rutade la hoja de estilo oscuro
    var darkStylesheet = "/css/dark_style.css"; // ruta de la hoja de estilo clara

    // Verifica si la hoja de estilo actual es la hoja de estilo clara
    if (stylesheet.href.endsWith(Stylesheet)) {
        // Cambia a la hoja de estilo oscuro
        stylesheet.href = darkStylesheet;
    } else {
        // Cambia a la hoja de estilo clara
        stylesheet.href = Stylesheet;
    }
}
