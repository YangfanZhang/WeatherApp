const express = require("express");
const https = require("https");
const app = express();

app.get("/", function(req, res) {
    const url = "https://api.openweathermap.org/data/2.5/weather?q=Brisbane&appid=cb4ad0a186e8912d5bbbf8bcfd299e1a";
    https.get(url, function(response){
    console.log(response.statusCode);

    response.on("data", function(data){
        const weatherData =JSON.parse(data);
        const temp = weatherData.main.temp;
        const weatherDescription = weatherData.weather[0].description;
        res.send("<h1>The temperature in Brisbane is" + temp + "</h1>");
    })
    })
})

app.listen(3000, function() {
    console.log("3000");
})