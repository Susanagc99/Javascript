/*
7.1 Escribe un pequeño bloque de código donde utilices comentarios de una línea 
y de varias líneas para explicar lo que hace cada parte.
*/


// Definimos una variable, en este caso temperatura y le asignamos un valor
let temperatura = 18;

/*
Este es un comentario de varias líneas
para explicar que hará este código:
- Verifica si la temperatura es alta
- Muestra un mensaje según la condición
- Cierra el programa con un mensaje
*/

if (temperatura > 30) {
    console.log("¡Hace mucho calor!"); //si es mayor a 30, muestra que hace mucho calor
} else if (temperatura > 20) {
    console.log("La temperatura está agradable"); //si está entre 20 y 30 muestra este mensaje
} else {
    console.log("Hace frío"); //de lo contrario, es decir, si está por debajo de 20, hace frío
}

//se avisa al usuario que el programa ha finalizado
console.log("Programa de verificación de temperatura completado");

