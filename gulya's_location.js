// Initialize and add the map
function initMap() {
    // The location of Gulya's Gym Empire
    var gymLocation = { lat: 40.7128, lng: -74.0060 };

    // The map, centered at the gym location
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 17, // Adjust the zoom level as needed
        center: gymLocation
    });

    // The marker, positioned at the gym location
    var marker = new google.maps.Marker({
        position: gymLocation,
        map: map,
        title: "Gulya's Gym Empire" 
    });
}

