/* 
2.1 Declara una variable nombre y asígnale tu nombre. 
Luego, muestra un saludo en la consola que diga "Hola, [nombre]".
*/
let nombre = "Susana";
console.log("Hola, " + nombre);

/* 
2.2 Crea tres variables: una con un número entero, 
otra con un número decimal 
y otra con una cadena de texto.
Muestra cada una en la consola usando console.log().
*/
let edad = 20;
let precio = 10.5;
let color = "rojo";
console.log(edad, precio, color);

/* 
2.3 Declara una constante llamada PI con el valor 3.1416.
Intenta cambiar su valor y observa qué sucede.
*/
const PI = 3.1416;
// si se intenta cambiar el valor, por ejemplo: PI = 3.14; 
//sale (TypeError: Assignment to constant variable.) porque no se puede reasignar una constante
console.log("El valor de PI es:", PI);


/* 
2.4 Declara una variable sin asignarle valor. 
Muestra en consola qué contiene.
*/
let variable;
console.log("La variable tiene el valor:", variable);
//la consola muestra: "La variable tiene el valor: undefined"


/*
 2.5 Crea una variable con valor null y otra con un valor booleano. 
 Muestra ambos en consola.
 */
let variableNull = null;
let variableBoolean = true;
console.log("Las variables tienen los valores:", variableNull, variableBoolean)

