# 🛍️ Desafío: Lista de Productos Dinámica

## 📋 Descripción del Proyecto

Este proyecto implementa un sistema de visualización de productos que permite mostrar una lista de productos en pantalla al hacer clic en un botón. Cada producto tiene nombre, precio y categoría, y se muestra de forma dinámica en la página web.

## 🎯 Objetivo

Practicar el uso de **arrays de objetos** y aprender a recorrerlos correctamente para mostrar información en pantalla de forma interactiva.

## 📁 Estructura del Proyecto

```
Chall products/
├── productos.html    # Estructura HTML proporcionada
├── app.js           # Lógica JavaScript implementada
├── todo.md          # Instrucciones del desafío
└── README.md        # Este archivo
```

## 🚀 Cómo ejecutar

1. Abre el archivo `productos.html` en tu navegador
2. Haz clic en el botón "Mostrar productos"
3. Observa cómo aparecen los productos dinámicamente en pantalla

---

## 💻 Código Implementado

### HTML (productos.html) - Estructura proporcionada

```html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <title>Explorador de Productos</title>
  <style>
    body { font-family: Arial, sans-serif; margin: 20px; }
    .producto { border: 1px solid #ccc; padding: 10px; margin: 10px 0; border-radius: 5px; }
  </style>
</head>
<body>

  <h1> Lista de productos</h1>
  <button id="mostrar-productos">Mostrar productos</button>

  <div id="contenedor-productos">
    <!-- Aquí aparecerán los productos -->
  </div>

  <script src="app.js"></script>
</body>
</html>
```

### JavaScript (app.js) - Mi implementación

```javascript
//1.crea un array de productos
let productos = [
    {nombre: 'Laptop', precio: 1200000, categoria: 'tecnologia'},
    {nombre: 'Tenis', precio: 90000, categoria: 'calzado'},
    {nombre: 'Falda', precio: 80000, categoria: 'ropa'},
    {nombre: 'Reloj inteligente', precio: 210000, categoria: 'tecnologia'},
    {nombre: 'Chaqueta', precio: 150000, categoria: 'ropa'},
];

//2. captura el botón
let boton = document.getElementById('mostrar-productos');

//3. agrega un evento al botón
boton.addEventListener("click",function(){
    let contenedor = document.getElementById('contenedor-productos');
    
    /*4. recorre el array
    Crea un `div` con la clase `producto`.
    Muestra el nombre, el precio y la categoría en su interior.
    Agrega ese `div` al contenedor que ya existe en el HTML.
    */
    productos.forEach(function(producto) {
        let divProducto = document.createElement('div');
        divProducto.className = 'producto';
        divProducto.innerHTML = `
            <h3>${producto.nombre}</h3>
            <p>$${producto.precio.toLocaleString()}</p>
            <p>${producto.categoria}</p>
        `;
        contenedor.appendChild(divProducto);
        });
});        
```

---

## 📚 Lo que aprendí

### 1. **Arrays de Objetos**
- Creé un array que contiene objetos con propiedades específicas
- Cada producto tiene: `nombre`, `precio` y `categoria`
- Aprendí a estructurar datos complejos en JavaScript

### 2. **Manipulación del DOM**
- **Selección de elementos**: Usé `document.getElementById()` para obtener referencias
- **Creación de elementos**: Implementé `document.createElement()` para generar HTML dinámico
- **Inserción en el DOM**: Utilicé `appendChild()` para agregar elementos al contenedor

### 3. **Event Listeners**
- Agregué un evento `click` al botón usando `addEventListener()`
- La función se ejecuta solo cuando el usuario interactúa con el botón
- Esto hace que la aplicación sea interactiva y eficiente

### 4. **Métodos de Arrays**
- **`forEach()`**: Recorrí cada producto del array para procesarlos
- Aprendí a usar callbacks dentro de los métodos de arrays

### 5. **Template Literals**
- Utilicé template literals (`` ` ``) para crear HTML dinámico
- Interpolé variables dentro del HTML usando `${variable}`
- Esto hace el código más legible y mantenible

### 6. **Formateo de Datos**
- **`toLocaleString()`**: Formateé los precios con separadores de miles
- Esto mejora la presentación visual de los datos numéricos

### 7. **CSS y Estilos**
- Aprendí a aplicar clases CSS desde JavaScript
- Entendí cómo los estilos se aplican dinámicamente a elementos creados

---

## 🔧 Conceptos Técnicos Aplicados

### **DOM Manipulation**
```javascript
// Selección de elementos
let boton = document.getElementById('mostrar-productos');
let contenedor = document.getElementById('contenedor-productos');

// Creación de elementos
let divProducto = document.createElement('div');

// Inserción en el DOM
contenedor.appendChild(divProducto);
```

### **Event Handling**
```javascript
boton.addEventListener("click", function(){
    // Lógica que se ejecuta al hacer clic
});
```

### **Array Methods**
```javascript
productos.forEach(function(producto) {
    // Procesamiento de cada producto
});
```

### **Template Literals**
```javascript
divProducto.innerHTML = `
    <h3>${producto.nombre}</h3>
    <p>$${producto.precio.toLocaleString()}</p>
    <p>${producto.categoria}</p>
`;
```

---

*Desarrollado como parte del programa de formación en RIWI* 🚀
**Autora:** Susana Gutiérrez Callejas (Susanagc)

---


