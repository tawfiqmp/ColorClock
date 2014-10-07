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

    }

body.style['background-color'] =
	"rgb(" + convertRGB(newTime).join(',') + 
	")";

function 


    setInterval(app, 1000);
}
