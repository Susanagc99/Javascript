/*5.1 Crea un programa que pida al usuario un número 
y muestre en consola si es mayor, menor o igual a 10.
*/
let numero = prompt("Ingrese un número:")
console.log("El número ingresado es: " + numero)

if(numero > 10) {
    console.log("El número es mayor")
} else if (numero < 10) {
    console.log("El número es menor")
} else {   
    console.log("El número es igual a 10");
}


/*
5.2 Crea un programa que solicite el nombre de un usuario y compare si se llama "Admin". 
Si es así, muestra un mensaje de bienvenida especial, de lo contrario, un mensaje genérico.
*/
let nombre = prompt("Ingrese su nombre:");

if (nombre.toLowerCase() === "admin") {
    console.log("¡Bienvenido administrador!");
} else {
    console.log("¡Bienvenido usuario!");
}
//tolowerCase se usa para convertir en minúsculas y que en este caso acepte "admin"


//5.3 Usa el operador ternario para mostrar si un número ingresado es par o impar.
let numeropoi = prompt("Ingrese un número");
let resultado = numeropoi % 2 === 0 ? "par" : "impar";
//calcula el residuo de dividir entre 2, si es igual a 0 entonces es par, sino es impar
console.log("El número es: " + resultado)
