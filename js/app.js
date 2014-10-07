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
        	var value = currentTime[timeFunction]();
        	return value < 10 ? "0" + value : value;
        });

        //Join the numbers together with :
        span.textContent = newTime.join(":");

   
// changing background color with converting time to RGB
document.body.style.backgroundColor =
	"rgb(" + 
	convertRGB(newTime).join(',') + 
	")";

	}	
function convertRGB(name) {

	var convert = [24, 60, 60],
	result = [];

	name.forEach(function(code, index) {
		answer[index] = ~~ (code / convert[index] * 255)
	});

	return answer;
}

    var page = document.querySelector('body');
    var span = document.querySelector('span');

    setInterval(app, 1000);
}
