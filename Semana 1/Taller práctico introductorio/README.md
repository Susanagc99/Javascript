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

## Parte 3
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


## Parte 4
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


## Parte 5

## Parte 6

## Parte 7

## Parte 8

