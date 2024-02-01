import { guardarMe } from "./CRUD/funcionesClick.js";

// "https://poemario.onrender.com"

const rutaServidor = "https://poemario.onrender.com"; //ruta servidor
const mensajeNombre = "Nombre, solo carácteres alfanuméricos sin espacios";
const mensajeApellido = "Apellido, solo carácteres alfanuméricos sin espacios";
const mensajeEmail = "email, solo minusculas";

//------------------------------------------------------------------
//Inputs a la escucha
const nombreEl = document.getElementById("nombre");
nombreEl.addEventListener("mouseout", validar);

const apellidoEl = document.getElementById("apellido");
apellidoEl.addEventListener("mouseout", validar);

const emailEl = document.getElementById("email");
emailEl.addEventListener("mouseout", validar);

const depaEl = document.getElementById("depa");

//----------------------------------------------------------------
//Botones a la escucha

const bGuardar = document.getElementById("btnGuardar");
bGuardar.addEventListener("click", guardar);

//------------------------------------------------------------------
//Funciones

function validar(e) {
  if (e.target == nombreEl && "" != nombreEl.value) {
    validaString(nombreEl.value, mensajeNombre, 0);
  } else if (e.target == apellidoEl && "" != apellidoEl.value) {
    validaString(apellidoEl.value, mensajeApellido, 1);
  } else if (e.target == emailEl && "" != emailEl.value) {
    validaString(emailEl.value, mensajeEmail, 2);
  }
}



function guardar() {
  const formulario = document.querySelector("#formulario");
  formulario.addEventListener("submit", (e) => {
    e.preventDefault();
  });

  let nombre = nombreEl.value;
  let apellido = apellidoEl.value;
  let email = emailEl.value;
  let depa = depaEl.value;
  

  guardarMe(nombre, apellido, email, depa, rutaServidor);
 
}

/*
Función que valida nombre, apellido y email.
reglas de validación tanto para nombre como para password:
1_Mínimo 3 caracteres y máximo de 12.
2_Sin espacios en blanco.
3_Solo caracteres alfanuméricos incluyendo ñ y tildes. */
function validaString(cadena, mensaje, npp) {
  let micadena = cadena;
  let mimensaje = mensaje;
  let minpp = npp;
  const mensajeEl = document.getElementById("mensaje");
  let regex;
  if (minpp == 0) {
    regex = /^[a-zA-Z0-9ñáéíóúü]{3,12}$/; // reglas para nombre;
    if (!evaluacion(micadena)) {
      mensajeEl.innerHTML = mimensaje;
    } else {
    }
  } else if (minpp == 1) {
    regex = /^[ a-zA-Z0-9ñáéíóúü]{3,12}$/; // reglas para pais;
    if (!evaluacion(micadena)) {
      mensajeEl.innerHTML = mimensaje;
    } else {
    }
  } else if (minpp == 2) {
    regex = /^[a-zA-Z0-9ñáéíóúü]{3,12}$/; // reglas para password;
    if (!evaluacion(micadena)) {
      mensajeEl.innerHTML = mimensaje;
    } else {
    }
  }

  function evaluacion(cadena) {
    let escadena = cadena;
    if (regex.test(escadena)) {
      return true;
    } else {
      return false;
    }
  }
}
