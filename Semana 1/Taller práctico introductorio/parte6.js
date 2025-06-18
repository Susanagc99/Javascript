/*6.1 Muestra diferentes tipos de mensajes en la consola:
(console.info)
(console.warn)
(console.error)
(console.group y console.groupEnd)
(console.time y console.timeEnd)
*/

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
for(let i = 0; i < 1000000; i++) {
// Operación vacía para simular trabajo
}
console.timeEnd("Tiempo de procesamiento");
