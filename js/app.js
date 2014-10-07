window.onload = app;

function app() {
    "use strict";


    function refreshClock() {
        "use strict";
        var currentTime = new Date();
        // getting the time from date function
        var time = ['getHours', 'getMinutes', 'getSeconds'];
        // making it so that the zeroes show up in front
        var newTime = parts.map(function(timeFunction) {
        	var value = currentTime.[timeFunction]();
        	return value < 10 ? "0" + value + value;
        });

        //Join the numbers together with :
        p.textContent = newTime.join(":");


        // padding seconds & minutes with zeros in the front
        currentMinutes = (currentMinutes < 10 ? "0" : "") + currentMinutes;
        currentSeconds = (currentSeconds < 10 ? "0" : "") + currentSeconds;

        // string for the display
        var currentTimeString = currentHours + ":" + currentMinutes + ":" + currentSeconds;

        // display the updated time
        document.getElementById("clock").firstChild.nodeValue = currentTimeString;

    }

}
