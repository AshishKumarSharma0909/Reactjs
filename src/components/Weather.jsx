import React, { useState } from 'react'

const Weather = () => {

  const [city, setCity] = useState("")
  const [weather, setWeather] = useState(null)

  const getWeather = async () => {

    if (city.trim() === "") {
      alert("Please enter city name")
      return
    }

    try {

      // Step 1: City name se latitude and longitude
      const locationResponse = await fetch(
        `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(city)}&count=1&language=en&format=json`
      )

      const locationData = await locationResponse.json()

      console.log("Location Data:", locationData)

      if (!locationData.results || locationData.results.length === 0) {
        alert("City not found")
        return
      }

      const latitude = locationData.results[0].latitude
      const longitude = locationData.results[0].longitude

      // Step 2: Latitude and longitude se weather
      const weatherResponse = await fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,relative_humidity_2m,wind_speed_10m,weather_code`
      )

      const weatherData = await weatherResponse.json()

      console.log("Weather Data:", weatherData)

      // Step 3: Weather ko state mein save karo
      setWeather(weatherData.current)

    } catch (error) {

      console.log("Error:", error)
      alert("Something went wrong. Check the console.")

    }
  }

  return (
    <div>

      <h1>Weather App</h1>

      <input
        type="text"
        placeholder="Enter city name"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />

      <button onClick={getWeather}>
        Search Weather
      </button>

      {weather && (
        <div>

          <h2>Weather Details</h2>

          <p>
            Temperature: {weather.temperature_2m} °C
          </p>

          <p>
            Humidity: {weather.relative_humidity_2m} %
          </p>

          <p>
            Wind Speed: {weather.wind_speed_10m} km/h
          </p>

          <p>
            Weather Code: {weather.weather_code}
          </p>

        </div>
      )}

    </div>
  )
}

export default Weather