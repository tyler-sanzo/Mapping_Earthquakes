// checking to see if code is working

console.log('working');

// Create the map object with a center and zoom level.
let map = L.map('mapid').setView([40.7,-94.5],4);

// Alternatively

// let map = L.map('mapid', {
//    center: [40.7,-94.5],
//    zoom: 4
//  });


//Creating tile layer for the background of our map

let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

//then add the tile to the map
streets.addTo(map);