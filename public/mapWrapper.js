var MapWrapper = function(container, coords, zoom) { 
  var container = document.getElementById('main-map'); 
  this.googleMap = new google.maps.Map(container, {
    center: coords, 
    zoom: zoom
  });
  this.markers = [];
  }


  MapWrapper.prototype.addMarker = function(codeclanCoords, title, contentString) {
      var infoWindow = new google.maps.InfoWindow({
        content: contentString
      });
      var marker = new google.maps.Marker({
        position: codeclanCoords,
        map: this.googleMap,
        title: title
      });
      this.markers.push(marker); 

      marker.addListener('click', function() {
        infoWindow.open(this.googleMap,marker)
      })
  },

  MapWrapper.prototype.addClickEvent = function(){
      google.maps.event.addListener(this.googleMap, 'click', function(event){
        var position = { lat: event.latLng.lat(), lng: event.latLng.lng() }  
        this.addMarker(position);
      }.bind(this));
    },

  MapWrapper.prototype.bounceMarker = function(){
      this.markers.forEach(function(marker) {
        marker.setAnimation(google.maps.Animation.BOUNCE)
      })
    }




