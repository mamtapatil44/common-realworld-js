// Scenario: A food delivery app stores restaurant details in an array of objects. 
// You need to filter out restaurants that serve a specific cuisine (e.g., "Italian").

const restaurants = [
    { name: "Pasta Palace", cuisine: "Italian", rating: 4.5 },
    { name: "Sushi Spot", cuisine: "Japanese", rating: 4.7 },
    { name: "Taco Town", cuisine: "Mexican", rating: 4.2 },
    { name: "Pizza Place", cuisine: "Italian", rating: 4.8 },
    { name: "Burgers & Fries", cuisine: "American", rating: 4.1 }
];

function filterByCuisine(cuisineType){
let filteredResult = restaurants.filter((item)=> item.cuisine === cuisineType)
return filteredResult
}

console.log("filteration: ",filterByCuisine("Italian"))
console.log("filteration: ",filterByCuisine("Japanese"))
console.log("filteration: ",filterByCuisine("American"))

console.log("===================================================================")

// Restaurant Search by Rating
// Task: Write a function filterByRating(minRating) that filters out restaurants with 
// ratings lower than the given minRating.

function filterByRating(minRating){
    return restaurants.filter((item)=>item.rating >= minRating)
}
console.log("rating: ",filterByRating(4.5))
console.log("rating: ",filterByRating(4.7))

console.log("===================================================================")

// 2. Restaurant Search by Cuisine and Rating
// Task: Write a function filterByCuisineAndRating(cuisine, minRating) 
// that filters restaurants based on both cuisine and rating.

function filterByCuisineAndRating(cuisine,minRating){
    return restaurants.filter((restro)=>(restro.cuisine === cuisine && restro.rating >= minRating))

}

console.log("filterByCuisineAndRating: ",filterByCuisineAndRating("Italian",4.7))

console.log("===================================================================")