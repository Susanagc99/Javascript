/*
8.1 ...
Declara tres variables: nombre, edad, y ciudad.
Pide al usuario su nombre, edad y ciudad mediante prompt().
Muestra esa información formateada en consola con una frase como:
"Hola [nombre], tienes [edad] años y vives en [ciudad]."
*/

let nombre = prompt("¿Cuál es su nombre?");
let edad = prompt("Ingrese su edad:");
let ciudad = prompt("¿En qué ciudad vive?")
console.log("Hola " + nombre + ", tienes " + edad + " años y vives en " + ciudad + ".");

//forma más moderna de mostrar info en consola:
//console.log(`Hola ${nombre}, tienes ${edad} años y vives en ${ciudad}.`);
