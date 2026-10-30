const API_KEY = "07b9ae522eed1dfcad92e69a79360063"


async function getWeather(){

    const city = document.getElementById("city").value.trim()
    const result = document.getElementById("result")

    if(city === ""){
        result.innerHTML = "Please enter a city name"
        return
    }
    result.innerHTML = "Loading..."

    try{
    
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`

        const response = await fetch(url)

        const data = await response.json()

        console.log(data)

        if(!response.ok){
            throw new Error(data.message || "Unable to get weather data")
        }

        result.innerHTML = `
        <h2>Weather in ${data.name}</h2>
        <p>Temperature: ${Math.round(data.main.temp)} °C</p>
        <p>Weather: ${data.weather[0].description}</p>
        <p>Humidity: ${data.main.humidity}%</p>
        <p>Wind Speed: ${data.wind.speed} m/s</p>
        `

    }catch(error){
        result.textContent = error.message 
    }






}