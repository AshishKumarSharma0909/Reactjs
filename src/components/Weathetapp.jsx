// import React, { useState } from "react";

// const Weatheapp = () => {
//   const API_KEY = "950ec24ceba2b403d5a457170c244667";

//   const [city, setCity] = useState("");

//   const getWeather = async () => {
//     if (!city.trim()) {
//       console.log("Please enter a city name");
//       return;
//     }

//     try {
//       const response = await fetch(
//         `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
//       );

//       const data = await response.json();

//       if (data.cod === 200) {
//         console.log("Weather Data:", data);
//         console.log("City:", data.name);
//         console.log("Temperature:", data.main.temp, "°C");
//         console.log("Feels Like:", data.main.feels_like, "°C");
//         console.log("Humidity:", data.main.humidity, "%");
//         console.log("Weather:", data.weather[0].main);
//         console.log("Description:", data.weather[0].description);
//         console.log("Wind Speed:", data.wind.speed, "m/s");
//       } else {
//         console.log("Error:", data.message);
//       }
//     } catch (error) {
//       console.log("Something went wrong:", error);
//     }
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     getWeather();
//   };

//   return (
//     <div>
//       <h3>Weather</h3>

//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           placeholder="Enter city"
//           value={city}
//           onChange={(e) => setCity(e.target.value)}
//         />

//         <button type="submit">Search</button>
//       </form>
//     </div>
//   );
// };

// export default Weatheapp;
import React, { useEffect, useState } from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCol,
  MDBContainer,
  MDBIcon,
  MDBRow,
  MDBTypography,
} from "mdb-react-ui-kit";
import axios from "axios"
 
 
export default function Weatherapp() {
 
  const [input, setInput] = useState("");
  const [weather, setWeather] = useState(null);
 
  const API_KEY = "950ec24ceba2b403d5a457170c244667";
 
  //  Weather images
 const weatherImages = {
  Clear: "/claer.jpg",
  Clouds: "/clouds.jpg",
  Rain: "/rain.jpbg",
  Snow: "/chetna.png",
  Thunderstorm: "/gargee.png",
};
 
 
 
const getWeatherImage = () => {
  if (!weather) return weatherImages["Clear"];

  return (
    weatherImages[weather.weather[0].main] ||
    weatherImages["Rain"]
  );
};
 
  //  Fetch Weather
  const fetchWeather = async (cityName) => {
    try {
      const res = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}&units=metric`);
     console.log(res.data.weather[0].main);
      setWeather(res.data);
 
    }
    catch (error) {
      alert("City not found ");
    }
  };
 
 
  //  Load default city
  useEffect(() => {
    fetchWeather("Delhi");
  }, []);
 
 
  const handleSearch = () => {
    if (input.trim() !== "") {
      fetchWeather(input);
      setInput("");
    }
  };
 
  return (
    <div id="weatherapp">
      <section className="vh-100" style={{ backgroundColor: "#f5f6f7" }}>
        <MDBContainer className="h-100">
          <MDBRow className="justify-content-center align-items-center h-100">
            <MDBCol md="10" lg="8" xl="6">
 
              <div className="mb-3 d-flex">
                <input
                  id="searchbar"
                  type="text"
                  className="form-control"
                  placeholder="Enter your city..."
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") handleSearch();
                  }}
                />
                <button onClick={handleSearch} id="searchbutton">
                 <i className="bi bi-cloud-fog2-fill"></i>
                </button>
              </div>
 
              <MDBCard
                className="bg-dark text-white"
                style={{ borderRadius: "40px" }}
              >
                <div className="bg-image">
                  <MDBCardImage
                    src={getWeatherImage()}
                    className="card-img"
                    alt="weather"
                    style={{ height: "400px", objectFit: "cover" }}
                  />
                  <div
                    className="mask"
                    style={{ backgroundColor: "rgba(190, 216, 232, .5)" }}
                  ></div>
                </div>
               <MDBTypography tag="h4" className="mb-0">
  {weather?.name}, {weather?.sys?.country}
</MDBTypography>
 
                <p className="display-2 my-3">
                 {weather && Math.round(weather.main.temp)}°C
                  <h5 className="mydata">
                    City Temp : {weather?.main?.temp}°C
                  </h5>
                </p>
 
                <p className="mb-2">
                  Feels Like:{" "}
                 <strong>
  {weather && Math.round(weather.main.feels_like)} °C
</strong>
                </p>
 
                <MDBTypography tag="h5">
                {weather?.weather?.[0]?.main}
                </MDBTypography>
 
 
              </MDBCard>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>
    </div>
 
 
  );
}
 

// | Image        | Condition       | City try karo |
// | ------------ | --------------- | ------------- |
// | `ashu01.png` | ☀️ Clear        | **Dubai**     |
// | `bhanu.png`  | ☁️ Clouds       | **London**    |
// | `sir.png`    | 🌧️ Rain        | **Moscow**    |
 

 