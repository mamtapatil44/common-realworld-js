// 5. Promises & Async/Await
// Scenario: You are building a weather app that fetches real-time weather data from an API. The data must be displayed after fetching.

// Task: Implement an async function fetchWeather(city) that retrieves weather data from an API and logs the response. Use fetch().


async function fetchWeather(city) {
    try {
        const apiKey = 'API_KEY'; 
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
        const data = await  fetch(url)
        const res = await data.json();
        console.log("wether data" ,JSON.stringify(res))
        
    } catch (error) {
        console.log("Error in fetching wether data")
    }
}

// fetchWeather("Atlanta")



// User Authentication System
// Scenario: You are working on a login system where users enter their username and password. 
// The system sends an API request to verify the credentials and returns a response.

async function loginUser(email,password) {
    try {
        const res = await fetch('https://dummyjson.com/auth/login',{
            method:"POST",
            headers:{"Content-Type": "application/json"},
            body: JSON.stringify({email,password})

        });
        if(!res.ok) throw new Error("Error in saving user");
        const data = await res.json()
        console.log("Login Successful:", data);
        return data;
       
        
    } catch (error) {
        console.error("Login failed:", error.message);
    }
    
}

loginUser("mnp@gmail.com","12345")