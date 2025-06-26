# Taller DOM - Manipulación del DOM con JavaScript

Este proyecto contiene ejercicios prácticos de manipulación del DOM (Document Object Model) usando JavaScript. Está dividido en tres partes principales, cada una enfocada en diferentes aspectos de la programación web.

## 📁 Estructura del Proyecto

```
Taller DOM/
├── part1/
│   ├── index.html
│   └── parte1.js
├── part2/
│   ├── index.html
│   └── parte2.js
├── part3/
│   ├── index.html
│   └── parte3.js
└── README.md
```

## 🚀 Cómo ejecutar

1. Clona este repositorio
2. Abre cualquiera de los archivos `index.html` en tu navegador
3. Abre las herramientas de desarrollador (F12) para ver la consola

---

## 📋 Parte 1: Arrays orientados al DOM

### HTML (part1/index.html)

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>part1</title>
</head>
<body>
    <h1>Arrays orientados al DOM</h1>
    <div class="containerd">
    </div>
    <div class="container"> 
    </div>
    <ul class="lista">
    </ul>

    <script src="./parte1.js"></script>
</body>
</html>
```

### JavaScript (part1/parte1.js)

#### 1.1 - Mensaje de colores
```javascript
// Definimos un array con diferentes colores
let colores = ['rojo','verde','azul','lila'];

// Seleccionamos el elemento HTML donde mostraremos el contenido
let containerd = document.querySelector('.containerd');

containerd.innerHTML =`<h3>1.1 Mensaje colores</h3>`;

// Iniciamos la lista HTML
containerd.innerHTML +=`<ul>`;

// Recorremos cada color del array usando forEach
colores.forEach(color => {
    containerd.innerHTML += `<li>El color ${color} es muy bonito</li>`;
});

// Cerramos la lista HTML
containerd.innerHTML +=`</ul>`;
```

#### 1.2 - Frases motivadoras
```javascript
// Se crea un array de frases
let frases = [
    'Cree en ti mismo y todo será posible.',
    'El único límite es tu mente.',
    'No limites tus desafíos, desafía tus límites.',
    'No te rindas, recuerda que el éxito viene después de muchos fracasos.',
    'El éxito no es un destino, es un viaje, disfrútalo.',
];

let container = document.querySelector('.container');

// Crea un nuevo array usando .map() para envolver cada frase en <h4>
let frasescontainer = frases.map (frase =>`<h4>${frase}</h4>`);

containerd.innerHTML +=`<h3>1.2 Frases motivadoras</h3>`;

// Inserta las frases en el DOM
container.innerHTML += frasescontainer.join('');
```

#### 1.3 - Lista de números
```javascript
// Crea un array de números
let numeros = [8, 28, 38, 48, 58];
let lista = document.querySelector('.lista');

// Nuevo array que recorre con map cada número y muestra cada uno en un li
let listanum = numeros.map (numero => `<li>${numero}</li>`);

lista.innerHTML +=`<h3>1.3 Lista de números</h3>`;
// Se inserta el array en el HTML
lista.innerHTML += listanum.join('');
```

---

## 📋 Parte 2: Objetos pensados para mostrarse

### HTML (part2/index.html)

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>part2</title>
</head>
<body>
    <h1>Objetos pensados para mostrarse</h1>

    <h2>2.1</h2>
    <div style="background-color: #5b0866; color:white; padding: 10px; margin:60px;
    display: flex; justify-content:center; 
    font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;" 
    class="persona">
    </div>

    <h2>2.2</h2>
    <div class="cancion">
    </div>

    <h2>2.3</h2>
    <div class="producto">
    </div>
    
    <script src="./parte2.js"></script>
</body>
</html>
```

### JavaScript (part2/parte2.js)

#### 2.1 - Tarjeta de persona
```javascript
// Se define objeto con sus claves y valores
let persona = {
    nombre: 'Susana Gutiérrez Callejas',
    edad: 26,
    ocupación: 'Desarrolladora web'
};

// Se selecciona en dónde va a ir en el HTML
let containerperson = document.querySelector('.persona');

// Tarjeta donde va a ir la info
let cardHTML = 
    `<div>
        <h3>${persona.nombre}</h3>
        <p>Edad: ${persona.edad} años</p>
        <p>Ocupación: ${persona.ocupación}</p>
    </div>`

// Se inserta el contenedor en el DOM
containerperson.innerHTML += cardHTML
```

#### 2.2 - Información de canción
```javascript
// Definimos objeto canción con sus claves y valores
let canción = {
    titulo: 'Just the way you are',
    artista: 'Bruno Mars',
    duración: 3.56
};

// Selección en que sección del HTML va a ir
let contcancion = document.querySelector('.cancion');

// Estructura en formato div para contener la info
const mensaje = 
    `<div>
        <p>💿 ${canción.titulo}</p>
        <p>🧑‍🎤 ${canción.artista}</p>
        <p>⌛ ${canción.duración}</p>
    </div>`

// Se muestra mensaje en HTML
contcancion.innerHTML += mensaje
```

#### 2.3 - Lista de propiedades de producto
```javascript
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
```

---

## 📋 Parte 3: Listas de Objetos enfocadas en visualización

### HTML (part3/index.html)

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>part3</title>
</head>
<body>
    <h1>Listas de Objetos enfocadas en visualización</h1>

    <h2>3.1</h2>
    <div class="usuarios">
    </div>

    <h2>3.2</h2>
    <div class="libros">
    </div>

    <h2>3.3</h2>
    <div class="tareas">
    </div>

    <script src="parte3.js"></script>
</body>
</html>
```

### JavaScript (part3/parte3.js)

#### 3.1 - Array de tarjetas de contacto
```javascript
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
```

#### 3.2 - Array de libros (Pendiente)
```javascript
/*
Dado un array de libros con titulo, autor y año, 
transforma cada uno en una cadena de texto con formato: "Título (Año) - Autor". 
Luego imagina que cada una irá dentro de un <li>.
*/
```

#### 3.3 - Lista de tareas (Pendiente)
```javascript
/*
Tienes una lista de tareas (con descripcion y completada). 
Crea una función que genere una estructura HTML diferente si 
la tarea está completa o pendiente. Por ejemplo: mostrar un ✅ o ❌ antes del texto.
*/
```

---

## 🛠️ Tecnologías Utilizadas

- **HTML5**: Estructura de las páginas web
- **CSS3**: Estilos básicos (inline en algunos casos)
- **JavaScript (ES6+)**: Manipulación del DOM y lógica de programación

## 📚 Conceptos Aprendidos

### Parte 1: Arrays y DOM
- Manipulación de arrays con `forEach()` y `map()`
- Inyección de contenido HTML dinámicamente
- Selección de elementos del DOM con `querySelector()`

### Parte 2: Objetos y DOM
- Creación y manipulación de objetos JavaScript
- Template literals para generar HTML
- Formateo de números con `toLocaleString()`

### Parte 3: Arrays de Objetos
- Arrays que contienen objetos
- Transformación de datos con `map()`
- Generación de estructuras HTML complejas

## 🎯 Objetivos del Proyecto

- Aprender a manipular el DOM con JavaScript
- Practicar el uso de arrays y objetos
- Entender cómo generar contenido HTML dinámicamente
- Desarrollar habilidades en programación web frontend

---