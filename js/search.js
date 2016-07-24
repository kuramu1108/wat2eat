
var map;
var infowindow;

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
function radarSearch() {
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
    }, getDetail);
}

function getDetail(results, status) {
    if (status === google.maps.places.PlacesServiceStatus.OK) {
        for (var i = 40; i < results.length; i++) {
            var request = {
                placeId: results[i].place_id
            };
            var service = new google.maps.places.PlacesService(map);
            service.getDetails(request, callbackDetail);
        }
    }
}

function callbackDetail(place, status){
    if (status === google.maps.places.PlacesServiceStatus.OK) {
        createMarker(place);
    }
}
$('#test').click(initMap);
$('#random').click(radarSearch);