//Obtiene los elementos del DOM
const formu = document.getElementById('formulario-tarea');
const inputTitle = document.getElementById('titulo');
const inputDescription = document.getElementById('descripcion');
const tasksdiv = document.getElementById('lista-tareas');

//Array para almacenar las tareas
let tasks = [];

//Evento para crear una nueva tarea
formu.addEventListener('submit', async function(event) {
    event.preventDefault();

    /*
    Obtiene los valores de los inputs, 
    les quita espacios y verifica que no estén vacíos.
    Si están vacíos, no se crea la tarea.
    */
    const title = inputTitle.value.trim();
    const description = inputDescription.value.trim();
    if (title === '' || description === '') return

    //Crea un objeto con los valores de los inputs
    const task = {
        title,
        description,
        completed: false
    }

    /*
    Envía la tarea al backend usando una petición POST 
    (esto es para guardar la tarea en un servidor local).
    */
    await fetch ('http://localhost:3000/task', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(task)
    });

    //Limpia los inputs y actualiza la lista de tareas
    inputTitle.value = '';
    inputDescription.value = '';
    fetchTasks();                             
});

//Función para obtener las tareas del servidor
async function fetchTasks() {
    const res = await fetch('http://localhost:3000/task');
    tasks = await res.json();
    renderTasks();
}

//Función para renderizar las tareas en pantalla
function renderTasks() {
    tasksdiv.innerHTML = '';

    tasks.forEach((task) => {
        const div = document.createElement('div');
        div.className = 'task';

        div.innerHTML = `
            <br><strong>${task.title}</strong><br>
            <em>${task.description}</em>
        `;

        if (task.completed) {
            div.style.textDecoration = 'line-through';
            div.style.color = 'green';
        }

        //Botón para marcar una tarea como completada
        const buttonComplete = document.createElement('button');
        buttonComplete.textContent = 'Mark as done';
        buttonComplete.addEventListener('click', async () => {
            task.completed = true;
            await fetch(`http://localhost:3000/task/${task.id}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(task)
            });
            fetchTasks();
        });

        //Botón para eliminar una tarea
        const buttonDelete = document.createElement('button');
        buttonDelete.textContent = 'Delete';
        buttonDelete.style.marginLeft = '10px';
        buttonDelete.addEventListener('click', async () => {
            await fetch(`http://localhost:3000/task/${task.id}`, {
                method: 'DELETE'
            });
            fetchTasks();
        });

        div.appendChild(buttonComplete);
        div.appendChild(buttonDelete);
        tasksdiv.appendChild(div);
    });
}

//Llamada inicial para cargar las tareas al cargar la página
fetchTasks();
