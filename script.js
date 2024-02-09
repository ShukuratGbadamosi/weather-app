// function but(){
//     const locationInput = document.getElementById("location");
//     const location = locationInput.value.trim();
    
//     if(!location){
//         plss.style.display = "block";
//         return;
    
//     }
//         const apikey = "62a88c5960ba9663ad4477e1bd5d894b";

//         fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apikey}&units=metric`)
//         .then(response => response.json())
//         .then(data => {
//             const temperature = data.main.temp;
//             const humidity = data.main.humidity;
//             const description = data.weather[0].description;
//             const windSpeed = data.wind.speed;

//         locationDetector.innerHTML = `${(data.name, data.sys.country)}`;
//         temp.innerHTML = `${(data.main.temp).toFixed(1)}°C`;
//         desc.innerHTML = `${(data.weather[0].description)}`;
//         humid.innerHTML = `${(data.main.humidity)}%`;
//         windspeed.innerHTML = `${(data.wind.speed)}m/s`;
//         })
//         .catch(error => {
//             console.error("Error feching data error", error);
        
//         });
    
// }


const getLocation = () => {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            position => {
            const latitude = position.coords.latitude;
            const longitude = position.coords.longitude;

            console.log("longitude:", longitude);
            console.log("latitude:", latitude);

            getWeatherByCoordinates(latitude, longitude);
        },
        error => {
            console.error("Error Code = " + error.code + " - " + error.message);
        });
           
    } else {
        console.log("Geolocation is not supported by this browser.");
    }
}
//     function getWeatherByCoordinates(latitude, longitude) {
// //         const apikey = "62a88c5960ba9663ad4477e1bd5d894b"
// //         fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apikey}&units=metric`)
// //         .then(response => response.json())
// //         .then(data => {
// //             const temperature = data.main.temp;
// //             const humidity = data.main.humidity;
// //             const description = data.weather[0].description;
// //             const windSpeed = data.wind.speed;

// //         temp.innerHTML = `${(data.main.temp).toFixed(1)}°C`;
// //         desc.innerHTML = `${(data.weather[0].description)}`;
// //         humid.innerHTML = `${(data.main.humidity)}%`;
// //         windspeed.innerHTML = `${(data.wind.speed)}m/s`;
// //         })
// //         .catch(error => {
// //             console.error("Error feching data error", error);
        
// //         });
//    }
    