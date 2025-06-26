/*
1. Tienes un array de colores. 
Recorre ese array y crea un mensaje por cada color en formato: 
"El color X es muy bonito". Imagina que luego mostrarás cada mensaje en un <div>.
*/

// Definimos un array con diferentes colores
let colores = ['rojo','verde','azul','lila'];

// Seleccionamos el elemento HTML donde mostraremos el contenido
let containerd = document.querySelector('.containerd');

containerd.innerHTML =`<h3>1.1 Mensaje colores</h3>`; //referencia punto 1.1

// Iniciamos la lista HTML
containerd.innerHTML +=`<ul>`;

// Recorremos cada color del array usando forEach
// Para cada color, creamos un elemento <li> con el mensaje
colores.forEach(color => {
    containerd.innerHTML += `<li>El color ${color} es muy bonito</li>`;
});

// Cerramos la lista HTML
containerd.innerHTML +=`</ul>`;



/*
2. A partir de un array de frases motivadoras,
 crea un nuevo array donde cada frase esté envuelta en una etiqueta HTML (por ejmp: <p>). 
 Esto te ayudará a simular contenido que luego iría al DOM.
*/

//Se crea un array de frases
let frases = [
    'Cree en ti mismo y todo será posible.',
    'El único límite es tu mente.',
    'No limites tus desafíos, desafía tus límites.',
    'No te rindas, recuerda que el éxito viene después de muchos fracasos.',
    'El éxito no es un destino, es un viaje, disfrútalo.',
];

/*
Busca en el documento HTML** el primer elemento con la clase `container` 
y lo guarda en la variable `container`. Así puedes modificar su contenido desde JavaScript.
*/
let container = document.querySelector('.container');

// Crea un nuevo array, usa `.map()` para recorrer cada frase y las envuelve en <h3>
let frasescontainer = frases.map (frase =>`<h4>${frase}</h4>`);

containerd.innerHTML +=`<h3>1.2 Frases motivadoras</h3>`; //referencia punto 1.2
/*
Inserta las frases en el DOM 
Une todos los elementos del array `frasescontainer` en un solo string usando .join
*/
container.innerHTML += frasescontainer.join('');



/*
3. Recorre un array de números y devuelve otro array de <li> con cada número. 
Piensa que será una lista HTML para mostrar luego en pantalla.
*/

//crea un array de números
let numeros = [8, 28, 38, 48, 58];
let lista = document.querySelector('.lista');

//nuevo array que recorra con map cada número y muestre cada uno en un li
let listanum = numeros.map (numero => `<li>${numero}</li>`);

lista.innerHTML +=`<h3>1.3 Lista de números</h3>`; //referencia punto 1.3
//se inserta el array en el HTML
lista.innerHTML += listanum.join('');