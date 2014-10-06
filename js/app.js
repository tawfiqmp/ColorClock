window.onload = app;

function app () {
	"use strict";

	 function refreshClock () {
		"use strict";
	  var currentTime = new Date ();

	  var time = [getHours, getMinutes, getSeconds]

	  var time2 = parts.map();

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

}
