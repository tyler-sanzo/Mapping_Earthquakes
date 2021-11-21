
//Creating tile layer for the background of our map
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

//Adding second map
let dark = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

//base layer to hold both maps
baseMaps = {
    Street : streets,
    Dark : dark
};

//create map object with center, zoom level and default layer
let map = L.map('mapid', {
    center: [30,30],
    zoom: 2,
    layers: [streets]
});

//Pass map layers into layer control and add to map
L.control.layers(baseMaps).addTo(map);

//accessing airport geoJSON url
let airportData = 'https://raw.githubusercontent.com/tyler-sanzo/Mapping_Earthquakes/main/majorAirports.json'

//Grabbing geoJSON data
d3.json(airportData).then(function(data) {
    console.log(data);
    //adding geoJSON layer with received data and popups
    L.geoJSON(data, {
        pointToLayer: function(feature, latlng) {
            console.log(feature);
            return L.marker(latlng)
            .bindPopup("<h2> Airport Code: " + feature.properties.faa + "</h2> <hr> <h3> Airport Name: " + feature.properties.name + '</h3>');
        }
    }).addTo(map)
});

