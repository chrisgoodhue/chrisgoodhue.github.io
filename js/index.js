/* Does your browser support geolocation? */
if ("geolocation" in navigator) {
  $('.weather').show(); 
} else {
  $('.weather').hide();
}

/* Where in the world are you? */
$(document).ready(function() {
  navigator.geolocation.getCurrentPosition(function(position) {
    loadWeather(position.coords.latitude+','+position.coords.longitude); //load weather using your lat/lng coordinates
  });
});


function loadWeather(location, woeid) {
  $.simpleWeather({
    location: location,
    woeid: woeid,
    unit: 'f',
    success: function(weather) {
      html = '<h3><i class="icon-'+weather.code+'"></i></h3>';
      html += '<h3>'+weather.currently+'</h3>';
      html += '<h3>'+weather.temp+'&deg;'+weather.units.temp+'</h3>';
      
      $(".weather").html(html);
    },
    error: function(error) {
      $(".weather").html('<p>'+error+'</p>');
    }
  });
}

/* Remove Default Text */
var el = $('input[type=text], textarea');
    el.focus(function(e) {
        if (e.target.value == e.target.defaultValue)
            e.target.value = '';
    });
    el.blur(function(e) {
        if (e.target.value == '')
            e.target.value = e.target.defaultValue;
    });