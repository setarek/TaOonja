
function map(start, end) {
  let map = new google.maps.Map(document.getElementById("Map"), {
    center: new google.maps.LatLng(end.lat, end.lng),
    zoom: 14,
    disableDefaultUI: true,
    styles: [ { "featureType": "administrative", "elementType": "labels", "stylers": [ { "visibility": "on" } ] }, { "featureType": "administrative", "elementType": "labels.text.fill", "stylers": [ { "color": "#212121" } ] }, { "featureType": "administrative", "elementType": "labels.text.stroke", "stylers": [ { "color": "#f5f5f5" } ] }, { "featureType": "administrative", "elementType": "labels.icon", "stylers": [ { "visibility": "off" } ] }, { "featureType": "landscape", "elementType": "all", "stylers": [ { "color": "#f2f2f2" } ] }, { "featureType": "landscape.man_made", "elementType": "geometry", "stylers": [ { "visibility": "on" }, { "color": "#e0e0e0" } ] }, { "featureType": "landscape.man_made", "elementType": "labels", "stylers": [ { "visibility": "off" } ] }, { "featureType": "landscape.natural", "elementType": "geometry", "stylers": [ { "visibility": "on" }, { "color": "#eeeeee" } ] }, { "featureType": "landscape.natural", "elementType": "labels", "stylers": [ { "visibility": "off" } ] }, { "featureType": "landscape.natural.landcover", "elementType": "geometry", "stylers": [ { "color": "#ff0000" } ] }, { "featureType": "poi", "elementType": "all", "stylers": [ { "visibility": "off" } ] }, { "featureType": "poi.attraction", "elementType": "geometry", "stylers": [ { "color": "#bdbdbd" }, { "visibility": "on" } ] }, { "featureType": "poi.attraction", "elementType": "labels", "stylers": [ { "visibility": "off" } ] }, { "featureType": "poi.business", "elementType": "all", "stylers": [ { "visibility": "on" }, { "color": "#bdbdbd" } ] }, { "featureType": "poi.business", "elementType": "labels", "stylers": [ { "visibility": "off" } ] }, { "featureType": "poi.government", "elementType": "geometry", "stylers": [ { "color": "#bdbdbd" }, { "visibility": "on" } ] }, { "featureType": "poi.government", "elementType": "labels", "stylers": [ { "visibility": "off" } ] }, { "featureType": "poi.medical", "elementType": "geometry", "stylers": [ { "color": "#bdbdbd" }, { "visibility": "on" } ] }, { "featureType": "poi.medical", "elementType": "labels", "stylers": [ { "visibility": "off" } ] }, { "featureType": "poi.park", "elementType": "geometry", "stylers": [ { "visibility": "on" }, { "color": "#81c781" } ] }, { "featureType": "poi.park", "elementType": "labels", "stylers": [ { "visibility": "off" } ] }, { "featureType": "poi.place_of_worship", "elementType": "geometry", "stylers": [ { "color": "#bdbdbd" }, { "visibility": "on" } ] }, { "featureType": "poi.place_of_worship", "elementType": "labels", "stylers": [ { "visibility": "off" } ] }, { "featureType": "poi.school", "elementType": "geometry", "stylers": [ { "visibility": "on" }, { "color": "#bdbdbd" } ] }, { "featureType": "poi.school", "elementType": "labels", "stylers": [ { "visibility": "off" } ] }, { "featureType": "poi.sports_complex", "elementType": "geometry", "stylers": [ { "color": "#bdbdbd" } ] }, { "featureType": "poi.sports_complex", "elementType": "labels", "stylers": [ { "visibility": "off" } ] }, { "featureType": "road", "elementType": "all", "stylers": [ { "saturation": -100 }, { "lightness": 45 } ] }, { "featureType": "road", "elementType": "geometry", "stylers": [ { "visibility": "on" }, { "color": "#f5f5f5" } ] }, { "featureType": "road", "elementType": "labels", "stylers": [ { "visibility": "on" } ] }, { "featureType": "road", "elementType": "labels.text.fill", "stylers": [ { "color": "#212121" } ] }, { "featureType": "road", "elementType": "labels.text.stroke", "stylers": [ { "color": "#f5f5f5" } ] }, { "featureType": "road", "elementType": "labels.icon", "stylers": [ { "visibility": "off" } ] }, { "featureType": "road.highway", "elementType": "all", "stylers": [ { "visibility": "simplified" } ] }, { "featureType": "road.arterial", "elementType": "labels.icon", "stylers": [ { "visibility": "off" } ] }, { "featureType": "transit", "elementType": "all", "stylers": [ { "visibility": "off" } ] }, { "featureType": "water", "elementType": "all", "stylers": [ { "color": "#46bcec" }, { "visibility": "on" } ] }, { "featureType": "water", "elementType": "geometry", "stylers": [ { "visibility": "on" }, { "color": "#00bcd4" } ] } ]
  });

  let mapMarker = new google.maps.Marker({
      position: new google.maps.LatLng(end.lat, end.lng),
      map: map
    });

  let directionsService = new google.maps.DirectionsService;
  directionsService.route({
    origin: start.lat + ',' + start.lng,
    destination: end.lat + ',' + end.lng,
    travelMode: 'WALKING',
    language: 'fa-IR'
  }, function(response, status) {
    if (status === 'OK') {
      $('.description-title strong').text(response.routes[0].legs[0].distance.text)
      $('.description-title small').text(response.routes[0].legs[0].duration.text)
    } else {
      console.log('Directions request failed due to ' + status);
      $('.description-title p').hide()
    }
  });

}

$(function() {

  map(
    {
      // start
      lat: 35.746368,
      lng: 51.380923
    },
    {
      // end
      lat: 35.7442482,
      lng: 51.3757476
    }
  );

  $('.owl-carousel').owlCarousel({
    rtl: true,
    loop: true,
    margin: 12,
    items: 2,
    center: true
  })

  $('a.image-bg').featherlight({
    targetAttr: 'data-featherlight',
    closeIcon: '&#xe14c;',
    closeOnClick: 'anywhere'
  });

  var is_open = false;
  $('.description-detail-more').on('click', function() {
    if (is_open) {
      $(this).siblings('.description-detail-inner').addClass('mini').css({
        'height': ''
      })
      $(this).children().html('نمایش بیشتر')
      $('html, body').animate({
        scrollTop: $('.description-title').offset().top - 62
      }, 200);
      is_open = false
    } else {
      $(this).siblings('.description-detail-inner').removeClass('mini').css({
        'height': $(this).siblings('.description-detail-inner').find('.description-detail-inner-wrapper').outerHeight()
      })
      $(this).children().text('نمایش کمتر')
      is_open = true
    }
  })
});
