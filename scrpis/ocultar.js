
function ocultarTodosLosDivs() {
    // Obtener todos los divs que deseas controlar
    var divDiseñoSoft = document.getElementById('DiseñoSoft');
    var divDiseñoWeb = document.getElementById('DiseñoWeb');
    var divOperador = document.getElementById('Operador');
    var divAudio = document.getElementById('Audio');
    var divFotografia = document.getElementById('Fotografia');
    var divRadio = document.getElementById('Radio');

    //botones
    var BotonDiseñoSoft=document.getElementById('BotonDiseñoSoft');
    var BotonDiseñoweb=document.getElementById('BotonDiseñoWeb');
    var BotonOperador=document.getElementById('BotonOperador');
    var BotonAudio=document.getElementById('BotonAudio');
    var BotonFoto=document.getElementById('BotonFoto');
    var BotonRadio=document.getElementById('BotonRadio');

    // Ocultar todos los divs
    divDiseñoSoft.style.display = 'none';
    divDiseñoWeb.style.display = 'none';
    divOperador.style.display = 'none';
    divAudio.style.display = 'none';
    divFotografia.style.display = 'none';
    divRadio.style.display = 'none';

    //inicializar con color por defecto
    BotonDiseñoSoft.style.backgroundImage = 'none';
    BotonDiseñoweb.style.backgroundImage = 'none';
    BotonOperador.style.backgroundImage = 'none';
    BotonAudio.style.backgroundImage = 'none';
    BotonFoto.style.backgroundImage = 'none';
    BotonRadio.style.backgroundImage = 'none';
    
    // Agrega aquí más líneas si tienes más divs que deseas controlar
}

function mostrarDiv(divId,boton) {
    // Obtener el div deseado por su ID
    var div = document.getElementById(divId);
    var boton=document.getElementById(boton);

    // Verificar si el div está visible
    if (div.style.display === 'block') {
        // Si el div está visible, ocultarlo
        div.style.display = 'none';
        boton.style.backgroundImage = 'none';
        
    } else {
        // Si el div está oculto, ocultar todos los demás divs y luego mostrar el div deseado
        ocultarTodosLosDivs();
        div.style.display = 'block';
        div.style.opacity = '1'; // Luego establecer opacidad a 1 para mostrar con fade
        
        boton.style.backgroundImage = 'linear-gradient(to top, rgb(255, 0, 0), rgb(254, 180, 89))';
    }
}
