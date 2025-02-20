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



// 2. Employee Record System
// Scenario:
// You are developing an employee management system where each employee has a 
// name, age, designation, and salary. Ensure type safety while creating an employee record.


function createEmployee(name,age,designation,salary){
    if(typeof name !== "string" || typeof age !== "number" || typeof designation !== "string" || typeof salary !== "number"){
     throw new Error("Invalid entries......")
    }


    return{
        name,
        age,
        designation,
        salary
    }
}

const employee1 = createEmployee("mamta",30,"software engineer",8000000);
console .log("emp1 ",employee1)
// const employee = createEmployee("mamta","30","software engineer",8000000);
// console .log("emp ",employee) // errors bacz of age type




// 2. Movie Database
// Scenario:
// A movie streaming platform needs a system to store movie details, 
// including the title, release year, genre, and IMDB rating


function createMovie(title,reYear,genre,rating){

    if(typeof title !== "string"|| typeof reYear !== "number" || typeof genre !== "string" || typeof rating !== "number"){
      throw new Error("Wrong data.......");
      
    }


    return {
        title,
        reYear,
        genre,
        rating

    }

}


const movie = createMovie("ved",2022,"lovestory",5)
console.log("movie=== ",movie)