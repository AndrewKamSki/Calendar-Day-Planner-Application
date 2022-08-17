$(document).ready(function() {

})
// DOM Elements
var timeDisplayEl = $('#currentDay');
var timeBlocksEl = $('#timeBlocks');

// Time Blocks Variables
var timeBlocksArray = [
    {display: "9AM", time:9, event:""},
    {display: "10AM", time:10, event:""},
    {display: "11AM", time:11, event:""},
    {display: "12AM", time:12, event:""},
    {display: "1PM", time:13, event:""},
    {display: "2PM", time:14, event:""},
    {display: "3PM", time:15, event:""},
    {display: "4PM", time:16, event:""},
    {display: "5PM", time:17, event:""}
];

// Display Date Function
function displayDate() {
    timeDisplayEl.text(moment().format('dddd, MMMM Do YYYY'));
}

// Display Time Blocks Function
function displayTimeBlocks() {
  for (var i=0; i<timeBlocksArray.length; i++) {
    var hourNow = parseInt(moment().format("HH"));
    var blockHour = timeBlocksArray[i].time;
    var timeClass = "";

    // Assigns class based on what time it is
    if(hourNow > blockHour) {
        timeClass = "past";
    } else if (hourNow === blockHour) {
        timeClass = "present";
    } else {
        timeClass = "future";
    };

  }
}       

// Function to Store Events

// Function to load Events

// Start Time on screen load
setInterval(displayDate,1000);