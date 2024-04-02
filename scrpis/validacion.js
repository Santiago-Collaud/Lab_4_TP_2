function borrarDatos(){
    var MailInput = document.getElementById('Mail');
    var NombreInput = document.getElementById('Nombre');
    var ApellidoInput = document.getElementById('Apellido');
    var EmpresaInput = document.getElementById('Empresa');
    var TelefonoInput = document.getElementById('Telefono');
    var MensajeInput = document.getElementById('Mensaje');
    
    var ProductosInput = document.getElementById('Productos');

    // limpiar
    MailInput.value=' ';
    NombreInput.value=' ';
    ApellidoInput.value=' ';
    EmpresaInput.value= ' ';
    TelefonoInput.value=' ';
    MensajeInput.value= ' ';
    
    //selector
    ProductosInput.selectedIndex=-1;
}

function estaVacio()
{
    var Mail = document.getElementById('Mail').value;
    var Nombre = document.getElementById('Nombre').value;
    var Apellido = document.getElementById('Apellido').value;
    var Empresa = document.getElementById('Empresa').value;
    var Telefono = document.getElementById('Telefono').value;
    var Mensaje = document.getElementById('Mensaje').value;
    var Producto = document.getElementById('Productos').value;

    var flag1=false;
    var flag2=false;
    
    // Expresión regular para verificar si el email contiene '@' y '.'
    var expresionRegular = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(Mail=='' || Nombre=='' || Apellido== '' || Empresa== '' || Telefono== '' || Mensaje == '' || Producto== '')
    {
        alert("Faltan completar datos")
    }
    else
    {
        if(expresionRegular.test(Mail))
        {
            captcha()
        }
        else
        {
            alert("El mail debe contener un @ y al menos un punto")
        }
    }  
}

function captcha()
{
    // Generar un número aleatorio entre 0 y 20
    var numero1 = Math.floor(Math.random() * 21);//Math.random() genera un número decimal pseudoaleatorio en el rango de 0 (incluido) 
                                                         //a 1 (excluido). Luego, al multiplicarlo por 21, obtienes un número en el rango de 0 
                                                         //(incluido) a 20.999... (excluido). Finalmente, Math.floor() redondea este número hacia 
                                                         //abajo al entero más cercano, dando como resultado un número entero en el rango de 0 a 20.
    var numero2 = Math.floor(Math.random() * 21);

    var respuesta=prompt("Captcha\nQue resulatado da esta operacion:\n"+numero1+" + "+numero2+" = ?");
    if(respuesta==(numero1+numero2))
    {
        alert("Respuesta Correcta\nDatos Enviados\nGracias");
        DescargarDatos();
        borrarDatos();
    }
    else
    {
        alert("Respuesta Incorrecta");
    }
}
function DescargarDatos() {
    var Mail = document.getElementById('Mail').value;
    var Nombre = document.getElementById('Nombre').value;
    var Apellido = document.getElementById('Apellido').value;
    var Empresa = document.getElementById('Empresa').value;
    var Telefono = document.getElementById('Telefono').value;
    var Mensaje = document.getElementById('Mensaje').value;
    var Producto = document.getElementById('Productos').value;

    var cadena = "Nombre:" + Nombre + "\nApellido:" + Apellido + "\nEmpresa:" + Empresa + "\nMail:" + Mail + "\nTel:" + Telefono + "\nProducto Seleccionado: " + Producto + "\nMensaje:" + Mensaje;
    console.log(cadena);
    // Crear un objeto Blob con el contenido del archivo
    var archivo = new Blob([cadena], { type: 'text/plain' });

    // Crear un elemento <a> para descargar el archivo
    var enlaceDescarga = document.createElement('a');
    enlaceDescarga.href = URL.createObjectURL(archivo);
    enlaceDescarga.download = 'datos.txt'; // Nombre del archivo a descargar

    // Agregar el enlace al cuerpo del documento y simular un clic para iniciar la descarga
    document.body.appendChild(enlaceDescarga);
    enlaceDescarga.click();

    // Limpiar el elemento <a> y revocar el objeto Blob
    document.body.removeChild(enlaceDescarga);
    URL.revokeObjectURL(enlaceDescarga.href);
}


