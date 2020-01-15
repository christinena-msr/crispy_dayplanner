// grabs p tag in header section & displays the current day (MM/DD)
var today = document.getElementById("currentDay");
var date = moment().format("dddd, MMMM Do")
today.textContent = date; // current date 
console.log(date);
var currentHour = moment().format("hA");
console.log(currentHour);
var startHour = moment().hour()

// grabs div tag for time block container
var display = document.querySelector(".container");

//creates new time block
function emptyCalendar () {
    var timeBlock = document.createElement("div");
    timeBlock.setAttribute("class", "row block");
    var hour = document.createElement("div");
    hour.setAttribute("class", "col-sm-2 hour");
    hour.textContent = "new time block hour";
    timeBlock.appendChild(hour);
    display.appendChild(timeBlock);
}
emptyCalendar();