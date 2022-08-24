// Add console.log to check to see if our code is working.
console.log("working");

// Create the map object with a center (the united states) and zoom level.
let map = L.map("mapid", {
    center: [
      34.0522, -118.2437
    ],
    zoom: 4
  });
  
 //  Add a a 'circle' marker to the map for Los Angeles, California.
// An array containing each city's location, state, and population.
let cityData = cities;

// Loop through the cities array and create one marker for each city.
cityData.forEach(function(city) {
  console.log(city)
  L.circleMarker(city.location, {
    radius: city.population/200000,
    lineweight: 4,
    color: "orange",
    fillColor: '#ffffa1'
  })
  .bindPopup("<h2>" + city.city + ", " + city.state + "</h2> <hr> <h3>Population " + city.population.toLocaleString() + "</h3>")
  .addTo(map);

});

// We create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

// Then we add our 'streets' tile layer to the map.
streets.addTo(map);