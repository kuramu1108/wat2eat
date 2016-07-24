
var map;
var infowindow;
var totalResults;

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(radarSearch);
    } else {
        alert("Geolocation is not supported by this browser.");
    }
}

function initMap() {
    var pyrmont = {lat: -33.883576, lng: 151.200505};

    map = new google.maps.Map(document.getElementById('map'), {
    center: pyrmont,
    zoom: 15
    });

    infowindow = new google.maps.InfoWindow();
    var service = new google.maps.places.PlacesService(map);
    service.nearbySearch({
    location: pyrmont,
    radius: 500,
    type: ['restaurant']
    }, callback);
}

function callback(results, status) {
    if (status === google.maps.places.PlacesServiceStatus.OK) {
    for (var i = 0; i < results.length; i++) {
        createMarker(results[i]);
    }
    // alert(JSON.stringify(results));
    }
}

function createMarker(place) {
    var placeLoc = place.geometry.location;
    var marker = new google.maps.Marker({
    map: map,
    position: place.geometry.location
    });

    google.maps.event.addListener(marker, 'click', function() {
    infowindow.setContent(place.name);
    infowindow.open(map, this);
    });
}
// 191 results
function radarSearchtest() {
    var pyrmont = {lat: -33.883576, lng: 151.200505};

    map = new google.maps.Map(document.getElementById('map'), {
    center: pyrmont,
    zoom: 15
    });

    infowindow = new google.maps.InfoWindow();
    var service = new google.maps.places.PlacesService(map);
    service.radarSearch({
    location: pyrmont,
    radius: 500,
    type: ['restaurant']
    }, processResults);
}

function radarSearch(position) {
    var pyrmont = {
        lat: position.coords.latitude, 
        lng: position.coords.longitude
    };

    map = new google.maps.Map(document.getElementById('map'), {
        center: pyrmont,
        zoom: 15
    });

    infowindow = new google.maps.InfoWindow();
    var service = new google.maps.places.PlacesService(map);
    service.radarSearch({
    location: pyrmont,
    radius: 500,
    type: ['restaurant']
    }, processResults);
}

function processResults(results, status) {
    if (status === google.maps.places.PlacesServiceStatus.OK) {
        totalResults = results;
        getRandomDetail();
    }
}

function getRandomDetail() {
    var randomPick = random(0, totalResults.length - 1);
    var place = totalResults[randomPick];
    
    var request = {
        placeId: place.place_id
    }
    // alert('try');
    var service = new google.maps.places.PlacesService(map);
    service.getDetails(request, filterDetail);
}

function filterDetail (place, status){
    if (status === google.maps.places.PlacesServiceStatus.OK) {
        var allGood = true;
        // check opening hour detail exist
        // if (place.opening_hours) {
        //     // if not open now
        //     alert(place.opening_hours.open_now);
        //     if (!place.opening_hours.open_now) {
        //         allGood = false;
        //     }
        // } else allGood = false;


        // if all good, create marker
        allGood ? createMarker(place) : getRandomDetail();
    }
}

function random (min, max) {
    return Math.floor((Math.random() * max) + min);
}

$('#test').click(initMap);
$('#random').click(radarSearchtest);
$('#current').click(getLocation);

// jquery ondocument ready
// $(function() {
    
// });