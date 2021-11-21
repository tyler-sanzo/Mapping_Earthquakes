// checking to see if code is working

console.log('working');


// Create the map object with center at the San Francisco airport.
let map = L.map('mapid').setView([37.633, -122.2998], 12);

// Add GeoJSON data.
let sanFranAirport =
{"type":"FeatureCollection","features":[{
    "type":"Feature",
    "properties":{
        "id":"3469",
        "name":"San Francisco International Airport",
        "city":"San Francisco",
        "country":"United States",
        "faa":"SFO",
        "icao":"KSFO",
        "alt":"13",
        "tz-offset":"-8",
        "dst":"A",
        "tz":"America/Los_Angeles"},
        "geometry":{
            "type":"Point",
            "coordinates":[-122.375,37.61899948120117]}}
]};


// Grabbing our GeoJSON data.

L.geoJSON(sanFranAirport, {
    //turning each feature into a marker on map
    pointToLayer: function(feature, latlng) {
        console.log(feature);
        return L.marker(latlng)
        .bindPopup("<h2> Airport Code: " + feature.properties.faa + "</h2> <hr> <h3> Airport Name: " + feature.properties.name + '</h3>');

    }
}).addTo(map);

//onEachFeature method
/*
L.geoJSON(sanFranAirport, {
    onEachFeature: function(feature, layer) {
        console.log(layer);
        layer.bindPopup();
    }
}).addTo(map);
*/

//Creating tile layer for the background of our map

let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/outdoors-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});



//then add the tile to the map
streets.addTo(map);