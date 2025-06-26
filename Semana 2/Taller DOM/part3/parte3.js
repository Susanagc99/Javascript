/*
1. Recorre un array de usuarios (con nombre y correo) 
y crea un array de etiquetas <div> que incluyan esa 
información formateada como tarjeta de contacto.
*/

// Se define array que dentro tiene usuarios con valor de nombre y correo
let usuarios = [
    {nombre: 'Sebastián', correo: 'sebitas@gmail.com'},
    {nombre: 'Daniela', correo: 'dani@gmail.com'},
    {nombre: 'Juan Pablo', correo: 'jpjim@gmail.com'}
];

// Se selecciona el contenedor del documento HTML
let container = document.querySelector('.usuarios');

// Creamos el array de etiquetas <div>
let tarjetas = usuarios.map (usuario =>
    `<div>
    <h4>${usuario.nombre}</h4>
    <p>${usuario.correo}</p>
    </div>`
);

container.innerHTML = tarjetas.join('');

/*
2. Dado un array de libros con titulo, autor y año, 
transforma cada uno en una cadena de texto con formato: "Título (Año) - Autor". 
Luego imagina que cada una irá dentro de un <li>.
*/



/*
3. Tienes una lista de tareas (con descripcion y completada). 
Crea una función que genere una estructura HTML diferente si 
la tarea está completa o pendiente. Por ejemplo: mostrar un ✅ o ❌ antes del texto.
*/
