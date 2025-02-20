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