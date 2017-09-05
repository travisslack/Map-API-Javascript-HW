var initialize = function() {
  var center = {lat: 51.507351, lng: -0.127758}; 
  var mapDiv = document.getElementById('main-map');
  var mainMap = new MapWrapper(mapDiv, center, 10);
  var codeclanCoords = {lat: 55.946962, lng: -3.201958};
  var contentString = '<div id="content">'+
        '<div id="siteNotice">'+
        '</div>'+
        '<h1 id="firstHeading" class="firstHeading">Codeclan</h1>'+
        '<div id="bodyContent">'+
        '<p><b>Codeclan</b>, also referred to as <b>Codebase little brother</b>, is a large ' +
        'sandstone rock formation in the southern part of the '+
        'Northern Territory, central Australia. It lies 335&#160;km (208&#160;mi) '+
        'south west of the nearest large town, Alice Springs; 450&#160;km '+
        '(280&#160;mi) by road. Kata Tjuta and Codeclan are the two major '+
        'features of the Codeclan - Kata Tjuta National Park. Codeclan is '+
        'sacred to the Pitjantjatjara and Yankunytjatjara, the '+
        'Aboriginal people of the area. It has many springs, waterholes, '+
        'rock caves and ancient paintings. Codeclan is listed as a World '+
        'Heritage Site.</p>'+
        '<p>Attribution: Codeclan, <a href="https://en.wikipedia.org/w/index.php?title=Codeclan&oldid=297882194">'+
        'https://en.wikipedia.org/w/index.php?title=Codeclan</a> '+
        '(last visited June 22, 2009).</p>'+
        '</div>'+
        '</div>';

  mainMap.addMarker(center);
  mainMap.addMarker(codeclanCoords, "Codeclan", contentString);
  mainMap.addClickEvent(); 
  
  var bounceButton = document.querySelector('#button-bounce-markers');
  bounceButton.addEventListener('click', mainMap.bounceMarker.bind(mainMap));

  var canadaButton = document.querySelector('#canada');
  canadaButton.addEventListener('click', mainMap.goToCanada.bind(mainMap));

}
  
        



window.addEventListener('load', initialize);