window.onload = app;

function app() {
    "use strict";

    function refreshClock() {

        var currentTime = new Date();
        // getting the time from date function
        var time = ['getHours', 'getMinutes', 'getSeconds'];
        // making it so that the zeros show up in front
        var newTime = time.map(function(timeFunction) {
            var value = currentTime[timeFunction]();
            return value < 10 ? "0" + value : value;
        });

        //Join the numbers together with :
        span.textContent = newTime.join(":");


        // changing background color with converting time to RGB
        body.style['background-color'] =
            "rgb(" +
            convertRGB(newTime).join(',') +
            ")";

    }

    // the actual conversion of time to RGB     
    function convertRGB(name) {

        var convert = [24, 60, 60],
            answer = [];

        name.forEach(function(code, index) {
            answer[index] = ~~ (code / convert[index] * 255);
        });

        return answer;

    }

    // defining the variables for which I told javascript to edit an attribute such as style 
    var body = document.querySelector('body');
    var span = document.querySelector('span');

    // to run the code, setting interval to 1000ms
    setInterval(refreshClock, 1000);
}
