
function getData() {

    let city = document.getElementById("city").value

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=56e1f416b2f4a81d2839535a134a3c9e`

        fetch(url) 
    .then(function(res) {
        return res.json()
    })
    .then(function(res) {
        append(res);
        console.log(res)
    })
    .catch(function(err) {
    console.log(err)
    })
}

function getDataLocation(lat, lon) {
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=56e1f416b2f4a81d2839535a134a3c9e`

    fetch(url) 
    .then(function(res) {
        return res.json()
    })
    .then(function(res) {
        append(res);
        console.log(res)
    })
    .catch(function(err) {
    console.log(err)
    })
}

// function getWeather7Day(lat, lon) {
//     const url_new = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude={part}&appid=56e1f416b2f4a81d2839535a134a3c9e`

//         fetch(url_new) 
//         .then(function(res) {
//             return res.json()
//         })
//         .then(function(res) {
//             append(res);
//             console.log(res)
//         })
//         .catch(function(err) {
//         console.log(err)
//         })
// }

// function append7Day(data) {
//     let main = document.querySelector("#sevenData");
    
//     data.map(function(ele) {
        
//             let box = document.createElement("div")

//             let temp = document.createElement("p")
//             temp.innerText = `Temperature : ${Math.round(ele.temp.day -273)} °C`

//             box.append(temp)

//             main.append(box)
//     })
// }



function append(data) {
    let weather = document.getElementById("weather")
    let map = document.getElementById("gmap_canvas")

    weather.innerHTML = null;

    let city = document.createElement("h1")
    city.innerText = `${data.name}`

    let min = document.createElement("p")
    min.innerText = `Minimum Temperature :   ${Math.round(data.main.temp_min -273)} °C`;

    let max = document.createElement("p")
    max.innerText = `Maximum Temperature :   ${Math.round(data.main.temp_max -273)} °C`

    let current = document.createElement("p")
    current.innerText = `Current Temperature :   ${Math.round(data.main.temp -273)} °C`

    let humidity = document.createElement("p")
    humidity .innerText = `Humidity :   ${Math.round(data.main.humidity)}`

    weather.append(city, min, max, current, humidity)
    map.src = `https://maps.google.com/maps?q=${data.name}&t=&z=13&ie=UTF8&iwloc=&output=embed`
}

function geolocation() {
    navigator.geolocation.getCurrentPosition(success);

    function success(position) {
        var crd = position.coords;

        console.log(`Your current position is:`);
        console.log(`Latitude: ${crd.latitude}`);
        console.log(`Longitude: ${crd.longitude}`);
        console.log(`More or less ${crd.accuracy} meters.`);

        getDataLocation(crd.latitude, crd.longitude)

        getWeather7Day(crd.latitude, crd.longitude)
    }
}

