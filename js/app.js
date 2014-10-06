function refreshClock ()
{
  var currentTime = new Date ( );

//
  var currentHours = currentTime.getHours ( );
  var currentMinutes = currentTime.getMinutes ( );
  var currentSeconds = currentTime.getSeconds ( );

// padding seconds & minutes with zeros in the front
  currentMinutes = ( currentMinutes < 10 ? "0" : "" ) + currentMinutes;
  currentSeconds = ( currentSeconds < 10 ? "0" : "" ) + currentSeconds;

// string for the display
  var currentTimeString = currentHours + ":" + currentMinutes + ":" + currentSeconds;

  // display the updated time
  document.getElementById("clock").firstChild.nodeValue = currentTimeString;


}
