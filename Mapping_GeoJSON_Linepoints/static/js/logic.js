
//Creating tile layer for the background of our map
let light = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
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
    Dark : dark,
    Light : light
};

//create map object with center, zoom level and default layer
let map = L.map('mapid', {
    center: [44,-80],
    zoom: 2,
    layers: [dark]
});

//Pass map layers into layer control and add to map
L.control.layers(baseMaps).addTo(map);

//accessing toronto airline route geoJSON url
let torontoData = 'https://raw.githubusercontent.com/tyler-sanzo/Mapping_Earthquakes/main/torontoRoutes.json'


//creating a style variable for lines
let myStyle = {
    color: 'yellow',
    weight: 2
};

//Grabbing geoJSON data
d3.json(torontoData).then(function(data) {
    console.log(data);
    //adding geoJSON layer with received data and popups
    L.geoJSON(data, {
        style: myStyle,
        onEachFeature :function(feature, layer) {
            layer.bindPopup('<h3> Airline: ' + feature.properties.airline + '</h3> <hr> <h3> Destination: ' + feature.properties.dst + '</h3>')
        }
    }).addTo(map)
});

