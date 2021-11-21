
//Creating tile layer for the background of our map
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

//Adding second map
let satelliteStreets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/satelliteStreets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

//base layer to hold both maps
let baseMaps = {
    'Streets' : streets,
    'Satellite Streets' : satelliteStreets
};

//create map object with center, zoom level and default layer
let map = L.map('mapid', {
    center: [39.5,-98.5],
    zoom: 3,
    layers: [streets]
});

//Pass map layers into layer control and add to map
L.control.layers(baseMaps).addTo(map);

//accessing toronto airline route geoJSON url
let earthquakeData = 'https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson'


//Grabbing geoJSON data
d3.json(earthquakeData).then(function(data) {
    console.log(data);
    //adding geoJSON layer with received data and popups
    L.geoJSON(data).addTo(map)
});

