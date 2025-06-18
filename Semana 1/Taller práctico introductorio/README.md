# Taller Práctico: Introducción a JavaScript

## Parte 1

**1.1 Javascript es un lenguaje de programación** el cúal permite la creación de sitios web mucho más funcionales y atractivos de lo que permiten HTML y CSS

**1.2 Tres características principales:**

- *Lenguaje dinámico y de tipado débil:* No necesitas declarar el tipo de dato (string, número, etc.), JavaScript lo detecta automáticamente.
- *Multiplataforma y versátil:* Se puede usar en el navegador (frontend) y también en el servidor (backend) con tecnologías como Node.js.
- Le da interactividad a las páginas web (formularios, animaciones, validaciones, menús dinámicos, etc).

**1.3 ¿Qué significa que JavaScript sea un lenguaje "interpretado" y "basado en eventos"?**

Que sea un lenguaje *"interpretado"* significa que el código no necesita ser compilado antes de ejecutarse.

💡 El navegador (como Chrome o Firefox) lee y ejecuta el código línea por línea al momento de cargar la página.

Y que sea *"basado en eventos"* significa que espera a que algo suceda (un evento) para ejecutar cierta acción.

**Eventos como:** Clic en un botón, movimiento del mouse, enviar un formulario, presionar una tecla...

💡 Esto hace que el sitio sea interactivo y dinámico.

## Parte 2: Variables y Tipos de Datos

**`parte2.js`**

**2.1**

```js 
let nombre = "Susana"; console.log("Hola, " + nombre);
```

**2.2**

```js
let edad = 20;
let precio = 10.5;
let color = "rojo";
console.log(edad, precio, color);
```

**2.3**

```js
const PI = 3.1416;
// si se intenta cambiar el valor, por ejemplo: PI = 3.14; 
// sale (TypeError: Assignment to constant variable.) porque no se puede reasignar una constante
console.log("El valor de PI es:", PI);
```

**2.4**

```js
let variable;
console.log("La variable tiene el valor:", variable);
// La consola muestra: "La variable tiene el valor: undefined"
```

**2.5**

```js
let variableNull = null;
let variableBoolean = true;
console.log("Las variables tienen los valores:", variableNull, variableBoolean)
```

## Parte 3: Entrada y Salida de Datos

**`parte3.js`**

**3.1**

```js
let edad = prompt("¿Qué edad tienes?");
console.log("Tienes " + edad + " años");
```

**3.2**

```js
alert("Bienvenido al programa");
```

**3.3**

```js
let respuesta = confirm("¿Deseas continuar?");
console.log(respuesta);
```

## Parte 4: Operadores

**`parte4.js`**

**4.1**

```js
let num1 = 24
let num2 = 48

console.log(num1+num2);
console.log(num1-num2);
console.log(num1*num2);
console.log(num1/num2);
console.log(num1%num2);
```

**4.2**

```js
let cadena1 = "Hola"
let cadena2 = "Mundo"
let cadenacompleta = cadena1 + " " + cadena2
console.log(cadenacompleta);
```

**4.3**

```js
console.log(5 == "5");
console.log(5 === "5");
console.log(true && false);
console.log(false || true);
console.log(!true);
```

## Parte 5: Condicionales

**`parte5.js`**

**5.1**

```js
let numero = prompt("Ingrese un número:")
console.log("El número ingresado es: " + numero)

if(numero > 10) {
    console.log("El número es mayor")
} else if (numero < 10) {
    console.log("El número es menor")
} else {   
    console.log("El número es igual a 10");
}
```

**5.2**

```js
let nombre = prompt("Ingrese su nombre:");

if (nombre.toLowerCase() === "admin") {
    console.log("¡Bienvenido administrador!");
} else {
    console.log("¡Bienvenido usuario!");
}
```

**5.3**

```js
let numeropoi = prompt("Ingrese un número");
let resultado = numeropoi % 2 === 0 ? "par" : "impar";
//calcula el residuo de dividir entre 2, si es igual a 0 entonces es par, sino es impar
console.log("El número es: " + resultado)
```

## Parte 6

**`parte6.js`**

**6.1**

```js
// Mensaje informativo
console.info("Este es un mensaje informativo sobre el estado del programa");

// Mensaje de advertencia
console.warn("¡Advertencia! Este es un mensaje de precaución");

// Mensaje de error
console.error("Error: Algo salió mal en la ejecución");

// Grupo de mensajes
console.group("Información del Usuario");
console.log("Nombre: Susana Gutiérrez");
console.log("Edad: 26 años");
console.log("Ciudad: Medellín");
console.groupEnd();

// El tiempo que tarda un bloque de código en ejecutarse
console.time("Tiempo de procesamiento");
// Operación vacía para simular trabajo
for(let i = 0; i < 1000000; i++) { 
}
console.timeEnd("Tiempo de procesamiento");
```

## Parte 7

**`parte7.js`**

**7.1**

```js
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
```

## Parte 8

**`index.html`**
**`parte8.js`**

**8.1**

HTML
```html
<!DOCTYPE html>
<html>
<head>
    <title>Mi Programa JavaScript</title>
</head>
<body>
    <h1>Introducción a JavaScript</h1>
    <h3>Ver consola...</h3>
    <script src="parte8.js"></script>
</body>
</html> 
```

JAVASCRIPT
```js
let nombre = prompt("¿Cuál es su nombre?");
let edad = prompt("Ingrese su edad:");
let ciudad = prompt("¿En qué ciudad vive?")
console.log("Hola " + nombre + ", tienes " + edad + " años y vives en " + ciudad + ".");

//forma más moderna de mostrar info en consola:
//console.log(`Hola ${nombre}, tienes ${edad} años y vives en ${ciudad}.`);
```