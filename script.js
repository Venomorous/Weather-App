/* let weather = {
    apiKey: "0fa363bb3af8dd39a5e9e0e00d19e9e8",
    fetchWeather: function (city) {
        fetch(
            "https://api.openweathermap.org/data/2.5/weather?q=" +
                city +
                "&units=metric&appid=" +
                this.apiKey
        )
            .then((response) => response.json())
            .then((data) => this.displayWeather(data));
    },
    displayWeather: function (data) {
        const { name } = data;
        const { icon, description } = data.weather[0];
        const { temp, humidity } = data.main;
        const { speed } = data.wind;
        console.log(name, icon, description, temp, humidity, speed);
        document.querySelector(".city").innerText = "Weather in " + name;
        document.querySelector(".icon").src =
            "https://openweathermap.org/img/wn/" + icon + ".png";
        document.querySelector(".description").innerText = description;
        document.querySelector(".temp").innerText = temp + "°C";
        document.querySelector(".humidity").innerText =
            "Humidity: " + humidity + "%";
        document.querySelector(".wind").innerText =
            "Wind speed: " + speed + " km/h";
    },
    search: function () {
        // console.log(document.querySelector(".search-bar").value);
        this.fetchWeather(document.querySelector(".search-bar").value);
    },
};
document
    .querySelector(".search-bar")
    .addEventListener("keypress", function (event) {
        if (event.keyCode === 13) {
            weather.search();
        }
    });
document.querySelector(".search button").addEventListener("click", function () {
    weather.search();
});
 */
let weather = {
    apiKey: "0fa363bb3af8dd39a5e9e0e00d19e9e8",
    fetchWeather: function (city) {
        fetch(
            "https://api.openweathermap.org/data/2.5/weather?q=" +
                city +
                "&units=metric&lang=ua&appid=" +
                this.apiKey
        )
            .then((response) => response.json())
            .then((data) => this.displayWeather(data))
            .catch((error) => this.displayError(error));
    },
    displayWeather: function (data) {
        if (data.cod != "404") {
            document.querySelector(".error").style.display = "none";
            document.querySelector(".card").style.padding = "2em";
            const { name } = data;
            const { icon, description } = data.weather[0];
            const { temp, humidity } = data.main;
            const { speed } = data.wind;
            console.log(name, icon, description, temp, humidity, speed);
            document.querySelector(".city").innerText = "Погода в " + name;
            document.querySelector(".icon").src =
                "https://openweathermap.org/img/wn/" + icon + ".png";
            document.querySelector(".description").innerText = description;
            document.querySelector(".temp").innerText = temp + "°C";
            document.querySelector(".humidity").innerText =
                "Вологість повітря: " + humidity + "%";
            document.querySelector(".wind").innerText =
                "Швидкість вітру: " + speed + " км/год";
        } else {
            this.displayError("Місто не знайдено");
        }
    },
    displayError: function (errorMessage) {
        const errorElement = document.querySelector(".error-message");
        errorElement.innerText = errorMessage;
        document.querySelector(".error").style.display = "flex";
        document.querySelector(".card").style.padding = "2em 2em 1em 2em";
    },
    search: function () {
        // console.log(document.querySelector(".search-bar").value);
        if (document.querySelector(".search-bar").value != "") {
            this.fetchWeather(document.querySelector(".search-bar").value);
        } else {
            this.displayError("Введіть назву міста");
        }
    },
};
document
    .querySelector(".search-bar")
    .addEventListener("keypress", function (event) {
        if (event.keyCode === 13) {
            weather.search();
        }
    });
document.querySelector(".search button").addEventListener("click", function () {
    weather.search();
});
