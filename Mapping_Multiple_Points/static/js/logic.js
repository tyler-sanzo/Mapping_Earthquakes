// checking to see if code is working

console.log('working');

// Create the map object with a center and zoom level.
let map = L.map('mapid').setView([40.7,-94.5],4);

// Alternatively
/*
let map = L.map('mapid', {
    center: [40.7,-94.5],
    zoom: 4
    }
);
*/


/*
//13.4.1

//Add a marker to the map for Los Angeles, California.
let marker = L.marker([34.0522, -118.2437]).addTo(map);
*/

/*
//Add circle to map
L.circleMarker([34.0522, -118.2437], {
    radius: 300,
    color : 'black',
    fillColor: '#ffffa1'
}).addTo(map);
*/

//13.4.2 adding multiple markers

//get data from cities.js
let cityData = cities;


//Iterating through each city from cities.js to add each location to marker function
cities.forEach(city => {
    console.log(city),
    L.circleMarker(city.location, {
        radius: city.population/200000,
        color: 'orange',
        weight: 4,
    })
    .bindPopup('<h2>' + city.city + ', ' + city.state + '</h2> <hr>  <h3>Population: ' + city.population.toLocaleString() + '</h3>') // adding popup to display each cities info,
    // to locale string method changes number to include thousands separator
    .addTo(map);
});

//Creating tile layer for the background of our map

let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});



//then add the tile to the map
streets.addTo(map);