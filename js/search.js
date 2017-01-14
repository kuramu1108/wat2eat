
var map;
var infowindow;
var totalResults;
var pyrmont;
var userlocation = 'img/map-marker-2-xxl.png';

var fastfood_list = ['Hungry Jack', 'KFC', 'McDonalds'];

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(radarSearch);
    } else {
        alert("Geolocation is not supported by this browser.");
    }
}

function radarSearch(position) {
    initMap();

    pyrmont = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
    };

    map = new google.maps.Map(document.getElementById('map'), {
        center: pyrmont,
        zoom: 15
    });

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
    } else if (status === google.maps.places.PlacesServiceStatus.ZERO_RESULTS) {
        zeroResultAlert();
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

        if ($('#filter-open').is(':checked')) {
            if (place.opening_hours) {
                if (!place.opening_hours.open_now) allGood = false;
            } else allGood = false; // if field not exist
        }

        if ($('#exclude-ff').is(':checked')) {
            alert(place.name);
        }

        // if all good, create marker
        allGood ? createMarker(place) : getRandomDetail();
    }
}

function createMarker(place) {
    var placeLoc = place.geometry.location;
    var marker = new google.maps.Marker({
        map: map,
        position: place.geometry.location,
        animation: google.maps.Animation.DROP
    });

    infowindow = new google.maps.InfoWindow({
        maxWidth: 400
    });

	var userMarker = new google.maps.Marker({
        position: pyrmont,
        map: map,
        icon: userlocation,
		animation: google.maps.Animation.DROP
    });

    google.maps.event.addListener(marker, 'click', function() {
        createInfoModal(place);

        // infowindow.setContent(generateInfoHTML(place));
        // infowindow.open(map, this);
    });

    changeButtonText('roll', 'ROLL AGAIN');
}

function createInfoModal(place) {
    // modal title
    $('#place-name').html(place.name);
    // modal table
    var html = "";
    html += "<tr><td><i class='fa fa-location-arrow info'></i></td><td>" + place.vicinity + "</td></tr>";
    if (place.formatted_phone_number)
        html += "<tr><td><i class='fa fa-phone info'></i></td><td>" + place.formatted_phone_number + "</td></tr>";
    if (place.rating)
        html += "<tr><td><i class='fa fa-star info'></i></td><td>" + place.rating + "</td></tr>";
    if (place.website)
        html += "<tr><td><i class='fa fa-globe info'></i></td><td><a href='" + place.website + "' target='_blank'>website</a></td></tr>";
    $('#place-info').html(html);
    // modal image
    if (place.photos) {
        var imgurl = place.photos[0].getUrl({
            maxWidth: 280
        });
        $('#place-image').html('<img src="' + imgurl + '">');
    } else $('#place-image').html("");
    // show modal
    $('#infoModal').modal("show");
}

// helping functions
function random (min, max) {
    return Math.floor((Math.random() * max) + min);
}

function initMap() {
    $('#map').css({
        height: "300px"
    });
}

function changeButtonText(id, text) {
    $('#' + id).text(text);
}

// bootstrap trigger functions
function zeroResultAlert() {
    $('#resultAlert').show()
}

function filterPopover(inputId, popId) {
    $('#'+ inputId).change(function(){
        if ($(this).prop('checked')) $('#' + popId).popover("show");
        else $('#' + popId).popover("hide");
    });
}

// jquery ondocument ready
$(function() {
    var toggles = ['filter-open', 'exclude-ff'];
    for (var i = 0; i < toggles.length; i++) {
        $('#'+toggles[i]).bootstrapToggle({
            onstyle: "danger"
        });
    }

    $('#test').click(nearbySearch);
    $('#random').click(radarSearchtest);
    $('#roll').click(getLocation);

    $('#resultAlert').hide();

    // $('#check').popover({
    //     placement: "top",
    //     title: "Wraning!",
    //     html: true,
    //     content: "Restaurants with no opening hour records would be dismissed",
    //     trigger: "manual"
    // });
    // filterPopover('filter-open', 'check');
})

// testing functions

function nearbySearch() {
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

// 191 results
function radarSearchtest() {
    initMap();

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
