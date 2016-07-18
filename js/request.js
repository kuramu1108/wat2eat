const key = 'AIzaSyDiamlgPmmtZfYLeByjTmJoktz-UIESpQE';

function search() {
    $.ajax({
        type: 'GET',
        dataType: "json",
        url: 'https://maps.googleapis.com/maps/api/place/nearbysearch/json',
        data: {  
            location: '-33.883576, 151.200505',
            radius: 300,
            types: 'restaurant',
            // maxprice: 3,
            // minprice: 0,
            key: 'AIzaSyDiamlgPmmtZfYLeByjTmJoktz-UIESpQE'
        },
        success: function(data) {
            var result = "";
            var results = data.results;
            for (var i = 0; i < results.length; i++) {
                result += results[i].name + "<br>";
            }
            $("#result").html(result);
        }
    });
}


function randomInt(min, max) {
    return Math.floor((Math.random() * max) + min);
}

function searchRandom() {
    $.ajax({
        type: 'GET',
        dataType: "json",
        url: 'https://maps.googleapis.com/maps/api/place/nearbysearch/json',
        data: {  
            location: '-33.883576, 151.200505',
            radius: 300,
            types: 'restaurant',
            // maxprice: 3,
            // minprice: 0,
            key: 'AIzaSyDiamlgPmmtZfYLeByjTmJoktz-UIESpQE'
        },
        success: function(data) {
            var result = "";
            var results = data.results;
            var element = results[randomInt(0, results.length-1)];
            result += element.name + "<br>";
            result += "place_id: " + element.place_id + "<br>";
            result += "lat: " + element.geometry.location.lat + "<br>";
            result += "lng: " + element.geometry.location.lng + "<br>";
            if (element.photos) {
                var photos = element.photos
                for (var i = 0; i < photos.length; i++) {
                    result += "photo_reference: " + photos[i].photo_reference + "<br>"; 
                }
                getPhoto(photos[0].photo_reference);
            }

            $("#result").html(result);
            // searchDetail(element.place_id);
        }
    });
}

function searchDetail(place_id) {
    $.ajax({
        type: 'GET',
        dataType: "json",
        url: 'https://maps.googleapis.com/maps/api/place/details/json',
        data: {  
            placeid: place_id,
            key: 'AIzaSyDiamlgPmmtZfYLeByjTmJoktz-UIESpQE'
        },
        success: function(data) {
            // $("#detail").html(JSON.stringify(data));
        }
    });
}

function getPhoto(photo_reference){
    var imageurl = 'https://maps.googleapis.com/maps/api/place/photo?';
    imageurl += 'key=' + key;
    imageurl += '&photoreference=' + photo_reference;
    imageurl += '&maxwidth=' + '400';
    $('#image').attr('src', imageurl).fadeIn();
}



$('#test').click(search);
$('#random').click(searchRandom);