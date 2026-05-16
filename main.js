// MENU HAMBURGUESA
const menu = document.querySelector(".menu");
const navLinks = document.querySelector(".nav-links");

menu.addEventListener("click", () => {

    navLinks.classList.toggle("active");

});


// EFECTO NAVBAR SCROLL
const header = document.querySelector(".header");

window.addEventListener("scroll", () => {

    if(window.scrollY > 50){

        header.classList.add("active");

    }else{

        header.classList.remove("active");

    }

});


// VALIDACION FORMULARIO
const formulario = document.getElementById("formulario");

formulario.addEventListener("submit", function(e){

    e.preventDefault();

    const nombre =
    document.getElementById("nombre").value.trim();

    const correo =
    document.getElementById("correo").value.trim();

    const telefono =
    document.getElementById("telefono").value.trim();

    const mensaje =
    document.getElementById("mensaje").value.trim();

    const errorNombre =
    document.getElementById("errorNombre");

    const errorCorreo =
    document.getElementById("errorCorreo");

    const errorTelefono =
    document.getElementById("errorTelefono");

    const errorMensaje =
    document.getElementById("errorMensaje");

    const mensajeExito =
    document.getElementById("mensajeExito");

    errorNombre.textContent = "";
    errorCorreo.textContent = "";
    errorTelefono.textContent = "";
    errorMensaje.textContent = "";
    mensajeExito.textContent = "";

    let valido = true;

    if(nombre === ""){

        errorNombre.textContent =
        "El nombre es obligatorio";

        valido = false;
    }

    const regex =
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(correo === ""){

        errorCorreo.textContent =
        "El correo es obligatorio";

        valido = false;

    }else if(!regex.test(correo)){

        errorCorreo.textContent =
        "Correo no válido";

        valido = false;
    }

    if(telefono === ""){

        errorTelefono.textContent =
        "El teléfono es obligatorio";

        valido = false;
    }

    if(mensaje === ""){

        errorMensaje.textContent =
        "El mensaje es obligatorio";

        valido = false;
    }

    if(valido){

        mensajeExito.textContent =
        "Formulario enviado correctamente";

        formulario.reset();
    }

});
