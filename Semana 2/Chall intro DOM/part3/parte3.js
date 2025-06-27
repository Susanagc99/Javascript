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

let libros = [
    {titulo: 'El Señor de los Anillos', autor: 'J.R.R. Tolkien', año: 1954},
    {titulo: 'Cien años de soledad', autor: 'Gabriel García Márquez', año: 1967},
    {titulo: 'Don Quijote de la Mancha', autor: 'Miguel de Cervantes', año: 1605}
];

// Seleccionamos el contenedor de libros en el HTML
let contenedorLibros = document.querySelector('.libros');


// Transformamos cada libro en el formato requerido
let librosFormateados = libros.map(libro => 
    `${libro.titulo} (${libro.año}) - ${libro.autor}`
);

// Encerramos la cadena de texto en un <li> para cada libro:
let librosLi = librosFormateados.map(libro => `<li>${libro}</li>`);

// Insertamos los libros que están dentro del li
contenedorLibros.innerHTML += librosLi.join('');



/*
3. Tienes una lista de tareas (con descripcion y completada). 
Crea una función que genere una estructura HTML diferente si la tarea está
completa o pendiente. Por ejemplo: mostrar un ✅ o ❌ antes del texto.
*/

let tareas = [
    {nombre: 'Tarea 1', descripcion: 'Terminar reto tareas', completada: true},
    {nombre: 'Tarea 2', descripcion: 'Estudiar JavaScript', completada: true},
    {nombre: 'Tarea 3', descripcion: 'Hacer entrenamiento', completada: false}
];

// Función que genera HTML diferente según el estado de la tarea
function mostrarCompletado(tarea) {
    if (tarea.completada) {
        return `<li>${tarea.nombre} ✅ ${tarea.descripcion}  </li>`;
    } else {
        return `<li>${tarea.nombre} ❌ ${tarea.descripcion} </li>`;
    }
};

// Aplicamos la función a todas las tareas
let tareasHTML = tareas.map(tarea => mostrarCompletado(tarea));

// Seleccionamos el contenedor de tareas y las insertamos
let contenedorTareas = document.querySelector('.tareas');
contenedorTareas.innerHTML = tareasHTML.join('');