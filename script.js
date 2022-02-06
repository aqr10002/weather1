let weather = {
    "apiKey": "e41cd9a9697f436008d69ef4d5ebd759",
    fetchWeather: function(city){
        fetch(
            "https://api.openweathermap.org/data/2.5/weather?q="
             + city 
             + "units=metric&appid=" 
             + this.apiKey
        )
            .then((response) => response.json())
            .then((data) => console.log(data))
    },
    displeyWeather: function(data){

    }
};