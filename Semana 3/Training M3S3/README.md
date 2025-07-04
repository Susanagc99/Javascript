# Product Management with JSON Server

This project is a practical exercise to learn how to perform CRUD operations (Create, Read, Update, and Delete) on a product collection using JavaScript and a simulated server with [json-server]

## Main Files

- **db.json**: Simulated database with the products.
- **gestión_ap.js**: JavaScript script that makes HTTP requests to manage the products.

---

## What operations does the script perform?

1. **Read products**: Retrieves and displays all products stored on the server.
2. **Add product**: Validates and adds a new product if the data is correct.
3. **Update product**: Modifies the data of an existing product.
4. **Delete product**: Deletes a product by its ID.

---

## Prerequisites

- Have [Node.js](https://nodejs.org/) installed.
- Have `json-server` installed globally:
  ```bash
  npm install -g json-server
  ```
---

## How to run the training?

1. **Start the json-server**

   Open a terminal and navigate to the folder where the files are:
   ```bash
   cd "Semana 3/Training M3S3"
   json-server --watch db.json --port 3000
   ```
   This will start a server at `http://localhost:3000`.

2. **Run the management script**

   Open another terminal in the same folder and run:
   ```bash
   node gestión_ap.js
   ```
   You will see the results of the CRUD operations in the console.

---

## Important notes

- The script validates the data before adding a new product.
- If you run the script several times, you may end up with duplicate products if you do not control the IDs.
- You can manually modify the products in `db.json` if needed.

---

## Author 👩‍💻

Susana Gutiérrez Callejas 🤍    
*Developed as part of the RIWI training program* 🚀

-----

# Gestión de Productos con JSON Server

Este proyecto es un ejercicio práctico para aprender a realizar operaciones CRUD (Crear, Leer, Actualizar y Eliminar) sobre una colección de productos utilizando JavaScript y un servidor simulado con [json-server].

---

## Archivos principales

- **db.json**: Base de datos simulada con los productos.
- **gestión_ap.js**: Script en JavaScript que realiza peticiones HTTP para gestionar los productos.

---

## ¿Qué operaciones realiza el script?

1. **Leer productos**: Obtiene y muestra todos los productos almacenados en el servidor.
2. **Agregar producto**: Valida y agrega un nuevo producto si los datos son correctos.
3. **Actualizar producto**: Modifica los datos de un producto existente.
4. **Eliminar producto**: Elimina un producto por su ID.

---

## Requisitos previos

- Tener instalado [Node.js](https://nodejs.org/).
- Tener instalado `json-server` globalmente:
  ```bash
  npm install -g json-server
  ```

---

## ¿Cómo ejecutar el training?

1. **Inicia el servidor json-server**

   Abre una terminal y navega a la carpeta donde están los archivos:
   ```bash
   cd "Semana 3/Training M3S3"
   json-server --watch db.json --port 3000
   ```
   Esto levantará un servidor en `http://localhost:3000`.

2. **Ejecuta el script de gestión**

   Abre otra terminal en la misma carpeta y ejecuta:
   ```bash
   node gestión_ap.js
   ```
   Verás en la consola los resultados de las operaciones CRUD.

---

## Notas importantes

- El script valida los datos antes de agregar un producto nuevo.
- Si ejecutas varias veces el script, puedes terminar con productos duplicados si no controlas los IDs.
- Puedes modificar los productos en `db.json` manualmente si lo necesitas.

---

## Autora 👩‍💻

Susana Gutiérrez Callejas 🤍    
*Desarrollado como parte del programa de formación en RIWI* 🚀
