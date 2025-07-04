# Challenge: Lista de Tareas con Fetch API ✅📝

## Descripción 📋

Este proyecto es una aplicación web simple para gestionar una lista de tareas (To-Do List). Permite agregar, visualizar, marcar como completadas y eliminar tareas. Utiliza **HTML**, **JavaScript** (con Fetch API) y **JSON Server** como backend simulado para el almacenamiento de datos.

---

## Estructura del proyecto 🗂️

- **app.js**: Lógica principal de la aplicación (manejo de tareas, peticiones Fetch, renderizado).
- **tasks.html**: Interfaz de usuario para interactuar con la lista de tareas.
- **db.json**: Archivo de base de datos utilizado por JSON Server para almacenar las tareas.
- **README.md**: Este archivo de documentación.

---

## Requisitos ⚙️

- Tener instalado [Node.js](https://nodejs.org/) 🟢
- Tener instalado [JSON Server](https://www.npmjs.com/package/json-server) 🗄️

---

## Instalación y uso 🚀

1. **Instala JSON Server** (si no lo tienes):
   ```bash
   npm install -g json-server
   ```

2. **Ubícate en la carpeta del proyecto**:
   ```bash
   cd "D:/RIWI usb/Javascript/Semana 3/Challenge Fetch APIs"
   ```

3. **Inicia el servidor JSON Server**:
   ```bash
   json-server --watch db.json
   ```
   Esto levantará un servidor en `http://localhost:3000`.

4. **Abre el archivo `tasks.html` en tu navegador** 🌐

---

## Funcionalidades ✨

- **Agregar tarea:** Completa el formulario y presiona "Agregar" ➕
- **Ver tareas:** Las tareas se muestran automáticamente al cargar la página 👀
- **Marcar como completada:** Haz clic en "Mark as done" para tachar la tarea ✅
- **Eliminar tarea:** Haz clic en "Delete" para borrar la tarea 🗑️

---

## Notas 📝

- Si modificas el archivo `db.json` manualmente, asegúrate de que el formato sea válido JSON ⚠️
- Si tienes problemas de conexión, asegúrate de que el servidor JSON Server esté corriendo y que no haya errores en la consola 🖥️

---

## Autora 👩‍💻

Susana Gutiérrez Callejas 🤍    
*Desarrollado como parte del programa de formación en RIWI* 🚀
