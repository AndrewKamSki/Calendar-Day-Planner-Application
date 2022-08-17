$(document).ready(function() {
  displayDate();
});

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
  $('#currentDay').text(moment().format('dddd, MMMM Do YYYY'));
}

// Display Time Blocks Function
function displayTimeBlocks() {
  for (var i=0; i<timeBlocksArray.length; i++) {
    var hourNow = parseInt(moment().format("HH"));
    var blockHour = timeBlocksArray[i].time;

    // Creating timeblocks
    var timeDisplay = timeBlocksArray[i].display;
    var eventText = timeBlocksArray[i].event;

    var table = $('<div>').attr('class','row');
    var timeCol = $('<div>').text(timeDisplay).attr('class', 'col-md-2');
    var eventCol = $('<textarea>').text(eventText).attr('class','col-md-9');
    var buttonImg = $('<i class="far fa-save fa-lg"></i>');
    var saveButtonCol = $('<button>').attr('class','col-md-1');

    // Assigns class based on what time it is
    if (hourNow > blockHour) {
      eventCol.attr('class','past');
    } else if (hourNow === blockHour) {
      eventCol.attr('class','present');
    } else {
      eventCol.attr('class','future');
    };

    saveButtonCol.append(buttonImg);
    table.append(timeCol, eventCol, saveButtonCol);

    $(".container").append(table);
  }
}       

// Function to Store Events

// Function to load Events

// Start Time on screen load
setInterval(displayDate,1000);

displayTimeBlocks();