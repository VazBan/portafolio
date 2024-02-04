const  btnSwitch = document.getElementById("switch");
const nav = document.getElementById("inicio");
const sobremi = document.getElementById("sobremi");
const skills = document.getElementById("skills");
const curriculum = document.getElementById("curriculum");
const portfolio = document.getElementById('portfolio')
const contacto = document.getElementById('contacto')

btnSwitch.addEventListener('click', () => {
    btnSwitch.classList.toggle('active');
    inicio.classList.toggle('light');
    sobremi.classList.toggle('light2');
    skills.classList.toggle('light');
    curriculum.classList.toggle('light2');
    portfolio.classList.toggle('light');
    contacto.classList.toggle('light2');
})
curriculum
let  menuVisible = false;
//Función que oculta o muestra el menu

function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList = "";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList= "responsive";
        menuVisible = true;
    }
}

function seleccionar(){
    //oculto el menu una vez que selecciono una opcion
    document.getElementById("nav").classList = "";
    menuVisible = false;
}

//Función que aplica animaciones de las habilidades
function efectoHabilidades(){
    let skills = document.getElementById("skills");
    let distancia_skills = window.innerHeight - skills.getBoundingClientRect().top
    if(distancia_skills >= 300){
        let habilidades = document.getElementsByClassName("progreso");
        habilidades[0].classList.add("javascript");
        habilidades[1].classList.add("html");
        habilidades[2].classList.add("css");
        habilidades[3].classList.add("git");
        habilidades[4].classList.add("comunicacion");
        habilidades[5].classList.add("trabajo");
        habilidades[6].classList.add("creatividad");
        habilidades[7].classList.add("dedicacion");
    }
}

//detector el scrolling para aplicar la animacion de la barra de habilidades
window.onscroll = function(){
    efectoHabilidades();
}  

 // Obtener referencia al botón
 let botonDescargar = document.getElementById('descargar');

 // Agregar un event listener para el evento 'click'
 botonDescargar.addEventListener('click', function() {
     // Crear un elemento <a> temporal
     var linkDescarga = document.createElement('a');
     // Asignar la URL del archivo que deseas descargar
     linkDescarga.href = './pdf/CV Rafael Vazquez (1).pdf';
     // Asignar el nombre del archivo que deseas descargar
     linkDescarga.download = 'CV Rafael Vazquez (1).pdf';
     // Ocultar el elemento <a>
     linkDescarga.style.display = 'none';
     // Agregar el elemento <a> al DOM
     document.body.appendChild(linkDescarga);
     // Simular el clic en el elemento <a>
     linkDescarga.click();
     // Remover el elemento <a> del DOM después de la descarga
     document.body.removeChild(linkDescarga);
    });

    function validarFormulario() {
        // Obtener los valores de los campos
        let nombre = document.getElementById('nombre').value;
        let telefono = document.getElementById('telefono').value;
        let correo = document.getElementById('correo').value;
        let tema = document.getElementById('tema').value;
        let mensaje = document.getElementById('mensaje').value;

         // Validar si los campos están vacíos
        if (nombre === '' || telefono === '' || correo === '' || tema === '' || mensaje === '') {
            alert('Por favor, llena todos los campos.');
            return false; // Detener el envío del formulario
        } else {
            alert('¡El formulario se ha enviado con éxito!');
            return true; // Permitir el envío del formulario
        }
    }