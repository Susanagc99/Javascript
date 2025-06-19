// Programa para clasificar triángulos según sus lados

// Solicito al usuario los tres lados del triángulo
console.log("=== CLASIFICADOR DE TRIÁNGULOS ===");
console.log("Ingresa las longitudes de los tres lados del triángulo:");

let ladoA = prompt("Ingresa el primer lado (a): ");
let ladoB = prompt("Ingresa el segundo lado (b): ");
let ladoC = prompt("Ingrese el tercer lado (c)");


// Se muestra los valores ingresados
console.log(`\nLados ingresados:`);
console.log(`a = ${ladoA}`);
console.log(`b = ${ladoB}`);
console.log(`c = ${ladoC}`);

// Validar que todos los lados sean positivos
if (ladoA <= 0 || ladoB <= 0 || ladoC <= 0) {
    console.error("ERROR: Todos los lados deben ser números positivos mayores que 0");
    console.warn("Por favor, ejecuta el programa nuevamente con valores válidos");
} else {
    console.log("Todos los lados son positivos");
}

// Función para validar si es un triángulo válido
function esTrianguloValido(a, b, c) {
    // Verificar la desigualdad triangular
    // La suma de dos lados debe ser mayor que el tercer lado
    return (a + b > c) && (a + c > b) && (b + c > a);
}

// Validar si forma un triángulo válido
if (esTrianguloValido(ladoA, ladoB, ladoC)) {
    console.log("✓ Los lados forman un triángulo válido");
} else {
    console.error("ERROR: Los lados no forman un triángulo válido");
    console.info("Recuerda: la suma de dos lados debe ser mayor que el tercer lado");
}


// Función para clasificar el tipo de triángulo
function clasificarTriangulo(a, b, c) {
    // Clasificar según las longitudes de los lados
    if (a === b && b === c) {
        return "Equilátero: todos los lados son iguales";
    } else if (a === b || a === c || b === c) {
        return "Isósceles: dos lados son iguales";
    } else {
        return "Escaleno: todos los lados son diferentes";
    }
}


// Clasificar el triángulo si es válido
if (esTrianguloValido(ladoA, ladoB, ladoC)) {
    let tipoTriangulo = clasificarTriangulo(ladoA, ladoB, ladoC);
    console.log(`\nClasificación: ${tipoTriangulo}`);
} else {
    console.error("No se puede clasificar porque no es un triángulo válido");
}





