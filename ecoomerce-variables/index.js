// 1. Variables & Data Types
// Scenario: You are building an e-commerce site that tracks products in a shopping cart. 
// Define a variable that stores product details, including name, price, and stock availability. Ensure type safety.


function createProduct(name,price,isStock){

    if(typeof name !== "string" || typeof price !== 'number' || typeof isStock !== 'boolean'){
        throw new Error("Invalid entries");
    }

    return{
        name,
        price,
        isStock
    }
}

const product = createProduct("mobile",12000,true)
console.log("product ",product)