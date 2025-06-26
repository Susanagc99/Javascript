/*
1. Dado un objeto persona con nombre, edad y ocupación, 
construye un string en formato HTML para mostrar esa información como una tarjeta.
*/

//se define objeto con sus claves y valores
let persona = {
    nombre: 'Susana Gutiérrez Callejas',
    edad: 26,
    ocupación: 'Desarrolladora web'
};

//se selecciona en dónde va a ir en el HTMl
let containerperson = document.querySelector('.persona');

//tarjeta donde va a ir la info
let cardHTML = 
    `<div>
        <h3>${persona.nombre}<h3>
        <p>Edad: ${persona.edad} años<p>
        <p>Ocupación: ${persona.ocupación}<p>
    <div>`

//se inserta el contenedor en el DOM
containerperson.innerHTML += cardHTML


/*
2. A partir de un objeto que representa una canción (titulo, artista, duracion), 
crea una estructura HTML en formato <div> que contenga esa información. 
Piensa cómo inyectarías eso al DOM.
*/

//definimos objeto canción con sus claves y valores
let canción = {
    titulo: 'Just the way you are',
    artista: 'Bruno Mars',
    duración: 3.56
};

//selección en que sección del HTML va a ir
let contcancion = document.querySelector('.cancion');

//estructura en formato div para contener la info

const mensaje = 
    `<div>
        <p>💿 ${canción.titulo}</p>
        <p>🧑‍🎤 ${canción.artista}</p>
        <p>⌛ ${canción.duración}</p>
    </div>`

//se muestra mensaje en HTML
contcancion.innerHTML += mensaje


/*
3. Dado un objeto con múltiples propiedades 
(como producto.nombre, producto.precio, producto.stock), 
construye una lista <ul> donde cada propiedad sea un <li> con clave y valor.
*/

let producto = {
    nombre:'Audifonos inalámbricos',
    precio: 80000,
    stock: 28
};

let container = document.querySelector('.producto');

const info = 
    `<h4>PRODUCTO</h4>
    <ul>
        <li>Nombre: ${producto.nombre}</li>
        <li>Precio: $${producto.precio.toLocaleString()}</li>
        <li>Stock: ${producto.stock}</li>
    </ul>`


container.innerHTML += info
    
    