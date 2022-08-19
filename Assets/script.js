// Display Date Function
function displayDate() {
  $('#currentDay').text(moment().format("dddd, MMMM Do YYYY"));
  //return(moment().format("dddd, MMMM Do YYYY"));
}

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
    {display: "5PM", time:17}];

  var events = ["","","","","","","","",""]

// Display Time Blocks Function
function displayTimeBlocks() {
  
  for (var i=0; i<timeBlocksArray.length; i++) {
    var hourNow = parseInt(moment().format("HH"));
    var blockHour = timeBlocksArray[i].time;

    // Creating timeblocks
    var timeDisplay = timeBlocksArray[i].display;
    var eventText = events[i];

    var table = $('<div>').attr('class','row time-block').attr('id','row_' + blockHour);
    var timeCol = $('<div>').text(timeDisplay).attr('class', 'col-2 hour').attr('id','time_' + blockHour);
    var eventCol = $('<textarea>').text(eventText).attr('class','col-9 description').attr('id','text_' + blockHour);
    var buttonImg = $('<i class="far fa-save fa-lg"></i>');
    var saveButtonCol = $('<button>').attr('class','col-1 saveBtn').attr('id','btn_' + blockHour);

    // Assigns class based on what time it is
    if (hourNow > blockHour) {
      eventCol.attr('class','col-9 description past');
    } else if (hourNow === blockHour) {
      eventCol.attr('class','col-9 description present');
    } else {
      eventCol.attr('class','col-9 description future');
    };

    saveButtonCol.append(buttonImg);
    table.append(timeCol, eventCol, saveButtonCol);

    $('.container').append(table);
  }
}       

// Function to store events
function storeEvents() {
  localStorage.setItem("events", JSON.stringify(events))
}
// Function to load events
function loadEvents() {
  var savedEvents = JSON.parse(localStorage.getItem("events"));
  if (savedEvents !== null) {
      events = savedEvents;
  }
  displayTimeBlocks();
  
}

function init() {
  loadEvents();
  displayDate();
  $('.saveBtn').on('click', function(event) {
    event.preventDefault();
    var fullIndex = this.id;
    var numberIndex = fullIndex.replace('btn_','');
    var indexInt = parseInt(numberIndex);
    var textId = 'text_' + numberIndex;
    console.log(textId)
    var savedText = $(textId).val();
    console.log(savedText)
    events.splice(indexInt,1,savedText);
    console.log(events)
    storeEvents();
  })

  setInterval(displayDate,1000);
}

init()