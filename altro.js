var rome = new google.maps.LatLng(41.9000, 12.5000);

function initialize() {
  var mapOptions = {
    zoom: 13,
    center: rome
  };

  var map = new google.maps.Map(document.getElementById('map-canvas'),
    mapOptions);

  var panoramioLayer = new google.maps.panoramio.PanoramioLayer();
  panoramioLayer.setMap(map);

  var tag = document.getElementById('tag');
  var button = document.getElementById('submit');

  google.maps.event.addDomListener(button, 'click', function() {
    panoramioLayer.setTag(tag.value);
  });

  map.controls[google.maps.ControlPosition.TOP_CENTER].push(
      document.getElementById('filter'));
}

google.maps.event.addDomListener(window, 'load', initialize);