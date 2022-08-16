// DOM Elements
var timeDisplayEl = $('#currentDay');

// Display Date Function
function displayDate() {
    var today = moment().format('dddd, MMMM Do YYYY');
    timeDisplayEl.text(today);
}

// Start Time on screen load
setInterval(displayDate,1000);