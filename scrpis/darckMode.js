function cambiarDarkMode() {
    var stylesheet = document.getElementById("dark_style");
    var Stylesheet = "/css/style.css"; // rutade la hoja de estilo oscuro
    var darkStylesheet = "/css/dark_style.css"; // ruta de la hoja de estilo clara

    // Verifica si la hoja de estilo actual es la hoja de estilo clara
    if (stylesheet.href.endsWith(Stylesheet)) {
        // Cambia a la hoja de estilo oscuro
        stylesheet.href = darkStylesheet;
        localStorage.setItem('modo', 'oscuro'); // Guarda el estado del modo oscuro en el almacenamiento local
    } else {
        // Cambia a la hoja de estilo clara
        stylesheet.href = Stylesheet;
        localStorage.setItem('modo', 'normal');// Guarda el estado del modo normal en el almacenamiento local
    }
}
cambiarDarkMode();
// Verificar el estado del modo al cargar la página
window.onload = function() {
    var modoAlmacenado = localStorage.getItem('modo');
    if (modoAlmacenado === 'oscuro') {
        // Aplicar el modo oscuro si está almacenado
        cambiarDarkMode();
    }
};
