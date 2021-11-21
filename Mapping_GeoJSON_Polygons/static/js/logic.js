
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
baseMaps = {
    'Streets' : streets,
    'Satellite Streets' : satelliteStreets
};

//create map object with center, zoom level and default layer
let map = L.map('mapid', {
    center: [43.7,-79.3],
    zoom: 11,
    layers: [streets]
});

//Pass map layers into layer control and add to map
L.control.layers(baseMaps).addTo(map);

//accessing toronto airline route geoJSON url
let torontoHoods = 'https://raw.githubusercontent.com/tyler-sanzo/Mapping_Earthquakes/main/torontoNeighborhoods.json'


//creating a style variable for lines
let myStyle = {
    color: 'blue',
    weight: 1,
    fillColor: 'yellow'
};

//Grabbing geoJSON data
d3.json(torontoHoods).then(function(data) {
    console.log(data);
    //adding geoJSON layer with received data and popups
    L.geoJSON(data, {
        style: myStyle,
        onEachFeature :function(feature, layer) {
            layer.bindPopup('<h3> Neighborhood: ' + feature.properties.AREA_NAME + '</h3>')
        }
    }).addTo(map)
});

