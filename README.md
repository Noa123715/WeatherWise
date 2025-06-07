# WeatherWise 🌤️

## 🌦️ Application Overview
**WeatherWise** is a simple weather app that displays the current weather in different cities around the world
Now, the cities displays is: Eilat, London, New York, and Alaska.

Each city is displayed in a card showing:
- The city name
- Weather description
- Current temperature in Celsius
- Feels-like temperature 
- Humidity percentage
- A visual emoji icon indicating the whether: cold (❄️), pleasant (🌤️), or hot (☀️)

### 🔧 Adding More Cities

To display more cities in the app, simply update the predefined array of city names in the constants file. Each city should also have a corresponding Hebrew translation for proper display.

This allows the application to scale easily by supporting additional weather cards with no need for structural changes to the code.

## ⚙️ Setup and Installation
To run the project locally, follow these steps:
- Open your Command Line.
 * for Windows: (1. Press `WinKey` + `R`, 2. Type `cmd`, 3. Press `Enter`)
 * for Mac: (1. Press `Command (⌘)` + `Space`, 2. Type `cmd`, 3. Press `Enter`)

- Open a new directory:

    ```bash
    mkdir WeatherWise
    ```

    ```bash
    cd WeatherWise
    ```

- Clone the repository from GitHub: 

    ```bash
    git clone https://github.com/Noa123715/WeatherWise.git
    ```

- Install dependencies for the app:

    ```bash
    cd weatherwise
    ```

    ```bash
    npm install
    ```

- Start the application:

    ```bash
    npm run dev
    ```

- To open your browser to view the application, navigate to `http://localhost:5173` .
## 🌐 API Endpoints
This app uses the [OpenWeatherMap](https://openweathermap.org/current) API to retrieve real-time weather data
- API endpoint used:
    ```bash
    GET https://api.openweathermap.org/data/2.5/weather?q=City&appid=API_KEY&units=metric&lang=he
    ```

* `q`: city name
* `appid`: your API key
* `units=metric`: returns temperature in Celsius
* `lang=he`: weather description in Hebrew

***📝 Note*** *: Free-tier API keys are limited in usage.*

## 🚧 Challenges
During development, several challenges were encountered:

- Using Vite: This was the first time working with the Vite build tool instead of Create React App (CRA). It was fast but required some adjustments.

- Hebrew text support: Ensuring correct alignment and font rendering for Hebrew descriptions and labels.

- External API integration: Learning how to fetch, parse, and display weather data in a clear way, while handling loading states and potential errors.

## 📸 Screenshots
<img src="https://github.com/noa123715/WeatherWise/raw/main/screenshots/weatherWiseApp.png">

**The application was developed by Noa Abecassis in June 2025.**
**This is the first version of this application.**
**I hope you enjoy using my application and that it proves to be helpful to many people.**

# Enjoyable Use 😊
