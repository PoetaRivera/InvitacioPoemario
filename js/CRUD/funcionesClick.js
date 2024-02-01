//#################################################################################################
//Funcion guardar usuario y comentario
// se ejecuta al ser llamada del sevicio-Crud que a su vez se ejecuta cuando
// se genera un click en el boton guardar.
export function guardarMe(nombre, apellido, email, depa, ruta) {
  const rutaServidor = ruta;
  const miNombre = nombre;
  const miApellido = apellido;
  const miEmail = email;
  const miDepa = depa;

  //-----------------------------------------------------------
  // Definimos funcion guardar poeta
  function guardaPoeta(nombre, apellido, email, departamento, rutaServidor) {
    //Guardamos ruta hacia la coleccion en la base de datos
    const rutaUser = `${rutaServidor}/api/poetas`;

    //Guardamos datos de usuario
    const dataUser = { nombre, apellido, email, departamento };

    // Guardamos cabecera
    const opcionesUser = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(dataUser),
    };

    // Hacemos la peticion post para guardar los datos de usuario
    return fetch(rutaUser, opcionesUser)
      .then((response) => {
        // Verificar el estado de la respuesta
        if (!response.ok) {
          throw new Error(`Error en la solicitud: ${response.status}`);
        }
        // Si la respuesta es exitosa, convertir la respuesta a JSON
        return response.json();
      })
      .then((dataUser) => {
        // Manejar los datos de respuesta del servidor
        console.log("Respuesta del servidor:", dataUser);
      })
      .catch((error) => {
        // Manejar errores
        console.log(error);
      });
  }

  guardaPoeta(miNombre, miApellido, miEmail, miDepa, rutaServidor)
    .then((respuesta) => {
      let mimensaje = "Participante agregado con éxito";
      const mensajeEl = document.getElementById("mensaje");
      mensajeEl.innerHTML = mimensaje;
    })
    .catch((err) => {
      let mimensaje = "Lo siento, hubo un error";
      const mensajeEl = document.getElementById("mensaje");
      mensajeEl.innerHTML = mimensaje;
      console.log(err);
    });
}
