
//Get all products stored on the server and display the data in the console
fetch('http://localhost:3000/productos')
.then(response => response.json())
.then(data => console.log("📋 Available products", data))
.catch(error => console.error("⚠️ Error getting products", error));


//Add a new product to the server's collection, validating the data before sending it
const newProduct = {id: 4, name: "Caramel Frappuccino", price: 8500};

if (validateProduct(newProduct)) {
    fetch('http://localhost:3000/productos', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(newProduct)
    })
        .then(response => response.json())
        .then(data => console.log ("✔️  Added product:", data))
        .catch(error => console.error("⚠️ Error adding product:", error));
} else {
    console.log("❌ The product was not added because the data is not valid.");
}


//modify the properties of an existing product
const updatedProduct = {id: 2, name: "Mocha latte", price:6000};

fetch('http://localhost:3000/productos/2', {
    method: 'PUT',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(updatedProduct)
})
    .then(response => response.json())
    .then(data => console.log("🆕 Updated Product:", data))
    .catch(error => console.error("⚠️ Error updating product", error));

//delete a product from the server based on the ID
fetch('http://localhost:3000/productos/3', {
    method: 'DELETE'})
    .then(() => console.log("🗑️  Product 3 successfully removed"))
    .catch(error => console.error("⚠️ Error deleting product", error));
    
    
//Validations and Error Handling
function validateProduct(product) {
    if (!product.name || typeof product.price !== "number") {
        console.error("⚠️  Invalid product data");
        return false;
    }
    return true;
}


