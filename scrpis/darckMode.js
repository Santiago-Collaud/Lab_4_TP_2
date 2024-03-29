function cambiarDarkMode() {
    var stylesheet = document.getElementById("dark_style");
    var Stylesheet = "/css/style.css"; // rutade la hoja de estilo oscuro
    var darkStylesheet = "/css/dark_style.css"; // ruta de la hoja de estilo clara

    // Verifica si hay un modo almacenado en el almacenamiento local
    var modoAlmacenado = localStorage.getItem('modo');
    if (!modoAlmacenado) {
        // Si no hay un modo almacenado, establece el modo predeterminado como claro
        localStorage.setItem('modo', 'normal');
        // Aplica la hoja de estilo clara
        stylesheet.href = Stylesheet;
    } else {
        // Verifica el modo almacenado y cambia al modo correspondiente
        if (modoAlmacenado === 'oscuro') {
            // Cambia a la hoja de estilo oscuro si el modo almacenado es oscuro
            stylesheet.href = darkStylesheet;
        } else {
            // De lo contrario, aplica la hoja de estilo clara
            stylesheet.href = Stylesheet;
        }
    }
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
    console.log(stylesheet.href);
}
cambiarDarkMode();
// Verificar el estado del modo al cargar la página
window.onload = function() {
    var modoAlmacenado = localStorage.getItem('modo');
    console.log('Modo almacenado:', modoAlmacenado);
    if (modoAlmacenado === 'oscuro') {
        // Aplicar el modo oscuro si está almacenado
        cambiarDarkMode();
    }
}
