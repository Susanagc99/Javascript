//program title
console.log('\nData Management with Objects, Sets and Maps')

//define products object
const products = {
    1: {id: 1, name: "Screen", price: 650000},
    2: {id: 2, name: "Laptop", price: 1200000},
    3: {id: 3, name: "Keyboard", price: 150000},
};

//use for...in to iterate through the object's keys so we can convert the price with toLocaleString
for (const key in products) {
    const product = products[key];
    console.log(`${product.id}.${product.name}: $${product.price.toLocaleString()}`);
} 

//create a set with the names of the products
const setProducts = new Set(Object.values(products).map(product => product.name));
console.log("\nProducts Set:\n", setProducts);


//use map to add categories to products
const mapProducts = new Map([
    ["Accessories", ["Screen", "Keyboard"]],
    ["Electronics", ["Laptop"]]
]);

console.log("\nCategories and Products's Map:\n", mapProducts);


//use for...in loop to iterate over the products object
for (const id in products) {
    console.log(`ID Product: ${id}, Details:`, products[id])
};

//use for...of to iterate over the products set
for (const product of setProducts) {
    console.log("Unique product:", product);
}

//use forEach to iterate over the products map"
mapProducts.forEach((product,category)=> {
    console.log(`Category: ${category}, Product: ${product}`);
});

//complete data management tests are performed to display in the console
console.log("\n\nComplete data management tests:");
console.log("\nProduct list (Object):\n", products);
console.log("\nUnique product list (Set):\n", setProducts);
console.log("\nCategories and products (Map):\n", mapProducts);




