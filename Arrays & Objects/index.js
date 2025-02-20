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

// 3. Sorting Restaurants by Rating
// Task: Implement a function sortByRating() that sorts the 
// restaurants array in descending order based on the rating.
// higher to lower
function sortByRating(){
    return restaurants.sort((a,b)=> b.rating - a.rating)
}

console.log("sortByRating: ",sortByRating())

console.log("===================================================================")

// 4. Grouping Restaurants by Cuisine
// Task: Write a function groupByCuisine() that groups restaurants based on their cuisine type.

function groupByCuisine(){
    return restaurants.reduce((acc,restro)=>{
        if(!acc[restro.cuisine]){
            acc[restro.cuisine] =[]
        }
        acc[restro.cuisine].push(restro)
       return acc;
    },{})
}

console.log("groupByCuisine: ",groupByCuisine())

console.log("===================================================================")



// 5. Count Restaurants by Cuisine
// Task: Implement a function countRestaurantsByCuisine() that returns an object with cuisine types as keys and 
// the counts of restaurants as values.


function countRestaurantsByCuisine(){

    return restaurants.reduce((acc,restro)=>{
        acc[restro.cuisine] = (acc[restro.cuisine] || 0) + 1 

        return acc;
    },{})

}

console.log("countRestaurantsByCuisine: ",countRestaurantsByCuisine())

console.log("===================================================================")


// 6. Average Rating of Restaurants by Cuisine
// Task: Write a function averageRatingByCuisine(cuisineType) that calculates the average rating of restaurants serving the specified cuisine.

function averageRatingByCuisine(cuisineType){
    const filteredRestro = restaurants.filter((restro)=>restro.cuisine === cuisineType);
    if (filteredRestro.length === 0) return 0;
    let totalRating = filteredRestro.reduce((sum,restro)=>sum = sum + restro.rating,0
    )
    let avgRating = totalRating /filteredRestro.length;
    return avgRating;
}
console.log("avg rating",averageRatingByCuisine("Italian"));