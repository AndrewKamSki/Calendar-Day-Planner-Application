// DOM Elements
var timeDisplayEl = $('#currentDay');
var timeBlocksEl = $('#timeBlocks');

// Time Blocks Variables
var timeBlocksArray = [
    {display: "9AM", time:9},
    {display: "10AM", time:10},
    {display: "11AM", time:11},
    {display: "12AM", time:12},
    {display: "1PM", time:13},
    {display: "2PM", time:14},
    {display: "3PM", time:15},
    {display: "4PM", time:16},
    {display: "5PM", time:17}
];
var events = ["","","","","","","","",""];

// Display Date Function
function displayDate() {
    var today = moment().format('dddd, MMMM Do YYYY');
    timeDisplayEl.text(today);
}

// Display Time Blocks Function

// Function to Store Events

// Function to load Events

// Start Time on screen load
setInterval(displayDate,1000);