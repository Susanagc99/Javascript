
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
