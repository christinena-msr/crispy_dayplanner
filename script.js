// grabs p tag in header section & displays the current day (MM/DD)
var today = document.getElementById("currentDay");
var date = moment().format("dddd, MMMM Do")
today.textContent = date; // current date 
console.log(date);
var currentHour = moment().format("hA");
console.log(currentHour);
var startHour = moment.min("9AM");
console.log(startHour);
var endHour = moment.max("5PM");
console.log(endHour);

// grabs div tag for time block container
var display = document.querySelector(".container");
emptyCalendar(startHour);

emptyCalendar(endHour);
//creates new time block
function emptyCalendar (hour) {
    var timeBlock = document.createElement("div");
    timeBlock.setAttribute("class", "row block");
    var timeHr = document.createElement("div");
    timeHr.setAttribute("class", "col-sm-2 hour");
    timeHr.textContent = hour;
    timeBlock.appendChild(timeHr);
    display.appendChild(timeBlock);
}
// emptyCalendar();