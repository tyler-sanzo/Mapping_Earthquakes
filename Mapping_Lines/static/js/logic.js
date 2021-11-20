// checking to see if code is working

console.log('working');

// Create the map object with a center and zoom level.


// changing setview to center over SFO
let map = L.map('mapid').setView([38.4449,-96.064453125],5);

//line variable comprised of coordinates:
let line = [
    [33.9416, -118.4085],
    [30.2027, -97.6664],
    [43.6777, -79.6248],
    [40.6416, -73.7788]
];


// Alternatively
/*
let map = L.map('mapid', {
    center: [40.7,-94.5],
    zoom: 4
    }
);
*/

// Create a polyline using the line coordinates and make the line yellow.
L.polyline(line, {
    color: 'blue',
    dashArray: '6',
    weight : 4,
    opacity: .5
}).addTo(map);


//Creating tile layer for the background of our map

let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});



//then add the tile to the map
streets.addTo(map);