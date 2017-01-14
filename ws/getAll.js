
var map;
var infowindow;
var totalResults;
// 169 items
var data = '{"ids":["ChIJJ-h1AiSuEmsRe18XgZ3vyQs","ChIJRdMrpiauEmsR4PYxSBkHGKk","ChIJvaY2QyiuEmsR59abxml9Ti8","ChIJW3I0jSauEmsRAdvGF2Pl_nI","ChIJIVOs8yauEmsRHWPDfwWymTI","ChIJaS9_eyiuEmsR9Ym77IgbM1I","ChIJW3I0jSauEmsReSCbXHl2jG0","ChIJcboUpiauEmsRrCrOUdOOHbI","ChIJIVOs8yauEmsRrW-L14wDDcQ","ChIJAScF6iauEmsR6Y0Z5DY0fvs","ChIJpy1cFCSuEmsRc6ApHMJ6VNc","ChIJ5whbbCSuEmsRXbivSWLDvi8","ChIJQxrd3CauEmsRREm8PeXbZMo","ChIJveV_HtixEmsRm_u0yOwfZA4","ChIJ97nEmyWuEmsRpvadTOSHWyM","ChIJjyFXfyiuEmsRmbWhO-Dv7WY","ChIJQ3cfsyKuEmsRqoHjfHgl8GM","ChIJeb4OgieuEmsRl4SNpdNwkjQ","ChIJ8WORwSauEmsR55zbU_LW9ZU","ChIJ60-zQiOuEmsRXJKXMSRDH9E","ChIJ43QQxDWuEmsRUP2j2wZhOXQ","ChIJvXskZiiuEmsRBOa3jUjK1Qc","ChIJp6VT8yOuEmsRAzmQsaMhLck","ChIJ5whbbCSuEmsRkBiV5uXTxqs","ChIJT43yhieuEmsRYdqAjD2LUu0","ChIJ7WdhetixEmsRzIf7Q-q6ocY","ChIJqfdEQiSuEmsRNoKKvG75VC0","ChIJ2Y3eJCSuEmsRvxpdlm69fkY","ChIJBepo2G6wEmsRiznxMm7SgL0","ChIJXSj_rSauEmsRbCEQbapWiww","ChIJtQu09yauEmsRzIQjZjhO9rg","ChIJ9SHspiauEmsRxxLfoPvt8LQ","ChIJ2W2CWiiuEmsRgAPfZkaasa4","ChIJv1xHZiiuEmsRpHuOPkc4iv8","ChIJPaOtGSSuEmsRVABKOr3uDJA","ChIJfxtNbySuEmsRTIf7N3a8ZrY","ChIJ77KNYiWuEmsRLPvbpZfGasc","ChIJPbBC6kKuEmsRIyt8pdfHSCs","ChIJfaZj-CauEmsRlBPQJOdMvng","ChIJS2WO-iauEmsR9GnMpb3IwnE","ChIJNWZwlSWuEmsR-_fKaJ1llBU","ChIJKz5SySauEmsR6Xmmrh10nkA","ChIJlzACmCauEmsR9XqgQ6BxcsY","ChIJ9SHspiauEmsREv7orwlkA_I","ChIJu7mdUCiuEmsRSS8zPDiZkvk","ChIJ5e699SOuEmsRDVaeGkF3D_0","ChIJGyAnaCSuEmsRFS7lnL_Es2E","ChIJbUdcyiWuEmsRQsIgU9955so","ChIJ9wTcqSauEmsRJ5c1L_KHT4A","ChIJJb7msyauEmsRG318IfuRAe0","ChIJfS10WiiuEmsRESn8cCBFtbk","ChIJ59ZcFCSuEmsR38KCMIefgnk","ChIJg8-GWiiuEmsR3XYJKKUjYM8","ChIJz-VMBiSuEmsRYhfzVc9h1wI","ChIJweaDWiiuEmsR47jstPTDcvU","ChIJ-YyZHiSuEmsR_sgb9JTGehM","ChIJFfYHmiWuEmsRsTNsPJeOQWc","ChIJ0bdPUiiuEmsRYlCjSVEeWCM","ChIJnQehkyauEmsRwEcsQ4LhpbA","ChIJKyuyVCiuEmsRtp1hJZx8wKk","ChIJaxHsEieuEmsRgNG4_RN-Mpk","ChIJe3vrG9ixEmsRVGwNX7l6oI4","ChIJlyLcMyiuEmsRsY6Lqu-JJB0","ChIJKQ0RASmuEmsRrRc3DQ_NbPc","ChIJm4sdfySuEmsRQcqTJPkKs58","ChIJBZXOZSiuEmsRrAhKA5uD1yE","ChIJT14wtimuEmsRPG_aFDDKgTQ","ChIJDXDBaCSuEmsR8823rvBwaWo","ChIJHwUE5iWuEmsR-MTq3oWwGyI","ChIJd278BCSuEmsRHqSepDlFM4w","ChIJ5whbbCSuEmsRJaDCt4EqTGg","ChIJ8zsmyyeuEmsRhpZljfCxA9M","ChIJB8zpVSauEmsRi7gf5nFU_qk","ChIJYxXpZyiuEmsRyCojC9CZXKM","ChIJgXVd-CauEmsRrZkodgvvUkc","ChIJB8AhACeuEmsR6HRfZtjHyxs","ChIJVZzz_iauEmsRw0qcdrC8sP0","ChIJJwvPASeuEmsRBH1EY8vUglQ","ChIJP6b7ASeuEmsRMG-XkRfOmMY","ChIJ4-kv-T6uEmsRjMAFFG1jYG4","ChIJPy68ASeuEmsR4w_LuGgeZRA","ChIJAb6IASeuEmsRSCEvBeu2NIo","ChIJNQKxjSmuEmsR9VkMQk9O7UQ","ChIJhfcGASeuEmsRmj19JwYiqUo","ChIJrapiASeuEmsRBKBmU31b7RI","ChIJscS25iauEmsROfEiupl2a1U","ChIJHz1g7CauEmsRLAjkUvJXE9Y","ChIJJxIjlSauEmsRsWQwUFhc97M","ChIJH0C-eyiuEmsRycEU0ZfbZNo","ChIJMWdcBCeuEmsRpr9CDsS4-nc","ChIJmXcRBieuEmsR3XTkdjjHw-8","ChIJz1chZSiuEmsR0eNJYTY7yJw","ChIJifq1CCeuEmsRVhCaNIYyvi4","ChIJxfNDNl-LtAER_mZ_TLx4CiM","ChIJ22hwlSWuEmsRsc8NDTU9_wI","ChIJJRKKLySuEmsRzs5Y18ym-xc","ChIJHRg4uSauEmsRbwpju5zwjoc","ChIJF5ugZSiuEmsRmvbWwBA7x58","ChIJGT7spiauEmsR-ZfG41h3oyE","ChIJFau_M_u7EmsR1-HgPM7652o","ChIJDaChoCauEmsRpSFtj4P3A58","ChIJVVUVzCauEmsRDnKbkaqrNEU","ChIJr7dyaCiuEmsR6tIl2GWBjvQ","ChIJRdMrpiauEmsROm3ptqQV5fQ","ChIJW3I0jSauEmsRtf8cwdbt7PA","ChIJr7dyaCiuEmsR7-Ix9TKPsC8","ChIJ9YfMrSiuEmsRzUImKuu4uFs","ChIJ7VHyUSiuEmsReGzGEbXfCrA","ChIJ73GCWiiuEmsRCTQRw6BsEUU","ChIJj6RIXSiuEmsRX7QwyxqgiOE","ChIJlUdJX9ivEmsRuIsviI4s5Pg","ChIJEYKH4SeuEmsRYCeisN5zG9M","ChIJ7eJEPySuEmsREEx0d2fodp4","ChIJuTiDFSSuEmsRL4KKRJhH9ac","ChIJuTiDFSSuEmsRK9etq0PFPA0","ChIJN-RDQyiuEmsRQp8LWu8uSoE","ChIJewA1XyiuEmsRPlZ8ULZmdA4","ChIJyc73ASSuEmsREqHhSaeSMtQ","ChIJg8-GWiiuEmsRd9QQ2KRu1LM","ChIJw0onlSWuEmsRQSIaAZBf3JU","ChIJmU_tL4CeEmsRDP_yhzCsv20","ChIJjQeFbCSuEmsR9yUKPtbHizE","ChIJnbmZtiauEmsRexDdwv_Icco","ChIJ5whbbCSuEmsRdVA_jM-CaHs","ChIJC-KuFCSuEmsR4sjpFRbeoEI","ChIJ-WaAWiiuEmsRPf6ilHeI9vE","ChIJUYmgCSSuEmsREh0wG5hVCQk","ChIJd2m5CySuEmsRY-LSe07nc0w","ChIJ2_5eCiSuEmsRM-dZUBONV1I","ChIJHQ7-ZSSuEmsRnXkjMsHtwfc","ChIJX_5ZfCSuEmsRONEh8s_D0Rw","ChIJIx7xZSSuEmsRQUGAqgXJEtI","ChIJ7_blOtaxEmsRRsnI1v-puto","ChIJHQ7-ZSSuEmsRU-6RvOTVKAE","ChIJUSv2cNixEmsR08ghuSn7ONk","ChIJ2d9_TCiuEmsRSiFIv8R2j2Q","ChIJjX9sTSiuEmsRcX_ka6zuY1Y","ChIJ8daVSyiuEmsRaZLXT3K2se0","ChIJj7c5YC-uEmsRG4lKtzVcc-w","ChIJj7c5YC-uEmsRQ-9UGsOoR0E","ChIJn9XDfySuEmsRMNi9BnOGPgo","ChIJKyuyVCiuEmsRAOAgBx85qlU","ChIJKyuyVCiuEmsR7IfbhIa5q0A","ChIJKyuyVCiuEmsRFEvdttOIlAw","ChIJQ9gLiyOuEmsRHbirv2OTvxI","ChIJUWHKXS-uEmsRt0HsGzN6A40","ChIJ2W7siSOuEmsRlh803BUA_WA","ChIJfZRLUyiuEmsR24bsdUBvrrE","ChIJLzbvjCOuEmsRH8u--6dcMms","ChIJ75gLeSSuEmsRyLeINwmW1O8","ChIJ75gLeSSuEmsR7RNUhMLKlKw","ChIJiSmGSyiuEmsRttWVwJK831I","ChIJiwQUjCOuEmsRBJ03VCG-tRk","ChIJWyT0_SiuEmsRPVscbNWYyyM","ChIJ7ROBeiSuEmsRbRMSuILAajo","ChIJg8PnHdixEmsRoIXI6jntqXg","ChIJq4xbjCOuEmsRCBcaqUUwGrk","ChIJOzMcfCSuEmsRtIy0Qn0BSUU","ChIJCc2aZy-uEmsRZWce_FCmftk","ChIJ86hQ9CSuEmsRjMmPxbeF120","ChIJTR5OgSOuEmsRluKj_CelKvY","ChIJj5oijiOuEmsRLp4yU0i4iF4","ChIJGfy4iSSuEmsRGGcm1-ijQ90","ChIJI2458iSuEmsR7kpNUbFDXjg","ChIJO5Y78iSuEmsRfrv7SGTPYKM","ChIJP5t3-iSuEmsRPLqot2cxtQo","ChIJC6ROiSSuEmsRVACqn_-CPWU","ChIJC6ROiSSuEmsRa8-AmzyaCRg","ChIJI4BSvCauEmsRzvmhXTco_1g"   ]}';
var json_d = JSON.parse(data);

function processResults(results, status) {
    if (status === google.maps.places.PlacesServiceStatus.OK) {
        alert("start");
        for (var i = 0; i < results.length; i++) {
            add(results[i]);
            // getDetail(results[i]);
            // sleep(1000);

            // if (i % 10 == 0)
            //     sleep(60000);
            
        }
    } else if (status === google.maps.places.PlacesServiceStatus.ZERO_RESULTS) {
        zeroResultAlert();
    }
}

function getDetail(place) {
    var request = {
        placeId: place
    }
    var service = new google.maps.places.PlacesService(map);
    service.getDetails(request, add);
}

function initMap() {
    $('#map').css({
        height: "300px"
    });
}

function add(place) {
    var sql = "insert into w.restaurant (restaurantname, address, website, lat, lng)<br> values ("; 
    sql += "'" + place.name + "',";
    sql += "'" + place.vicinity + "',";
    sql += "'" + place.website + "',";
    var _locStr = place.geometry.location;
    _locStr = _locStr.toString(); 
    var locStr = _locStr.slice(1, _locStr.length - 1);
    var loc = locStr.split(","); 
    sql += loc[0] + ",";
    sql += loc[1] + ");";
    var str = "<p>" + sql + "</p>";
    $('#result').append(str);
}

function partialDetail() {
    for (var i = 160; i < 170; i++) {
        getDetail(json_d.ids[i]);
    }
}

// jquery ondocument ready
$(function() {
    $('#test').click(radarSearchtest);    
})
// 191 results
function radarSearchtest() {
    initMap();
    
    var pyrmont = {lat: -33.883576, lng: 151.200505};

    map = new google.maps.Map(document.getElementById('map'), {
    center: pyrmont,
    zoom: 15
    });

    // infowindow = new google.maps.InfoWindow();
    // var service = new google.maps.places.PlacesService(map);
    // service.radarSearch({
    // location: pyrmont,
    // radius: 500,
    // type: ['restaurant']
    // }, processResults);
    partialDetail();
}

// SLEEEEPPPPP
function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds){
      break;
    }
  }
}