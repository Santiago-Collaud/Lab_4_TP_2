
function ocultarTodosLosDivs() {
    // Obtener todos los divs que deseas controlar
    var divDiseñoSoft = document.getElementById('DiseñoSoft');
    var divDiseñoWeb = document.getElementById('DiseñoWeb');
    var divOperador = document.getElementById('Operador');
    var divAudio = document.getElementById('Audio');
    var divFotografia = document.getElementById('Fotografia');
    var divRadio = document.getElementById('Radio');



    // Ocultar todos los divs
    divDiseñoSoft.style.display = 'none';
    divDiseñoWeb.style.display = 'none';
    divOperador.style.display = 'none';
    divAudio.style.display = 'none';
    divFotografia.style.display = 'none';
    divRadio.style.display = 'none';

    
    // Agrega aquí más líneas si tienes más divs que deseas controlar
}

function mostrarDiv(divId) {
    // Obtener el div deseado por su ID
    var div = document.getElementById(divId);
    

    // Verificar si el div está visible
    if (div.style.display === 'block') {
        // Si el div está visible, ocultarlo
        div.style.display = 'none';
        div_abajo.style.display='none';

        
    } else {
        // Si el div está oculto, ocultar todos los demás divs y luego mostrar el div deseado
        ocultarTodosLosDivs();
        div.style.opacity = 1; // Luego establecer opacidad a 1 para mostrar con fade
        div.style.display = 'block';
        
    }
}
