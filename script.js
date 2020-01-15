// grabs p tag in header section & displays the current day (MM/DD)
var today = document.getElementById("currentDay");
var date = moment().format("dddd, MMMM Do")
today.textContent = date; // current date 
console.log(date);
var currentHour = moment().format("hA");
// var currentHour = 12;
console.log(currentHour);
var startHour = 9;
console.log(startHour);
var endHour = 17;
console.log(endHour);

// grabs div tag for time block container
var display = document.querySelector(".container");
emptyCalendar(startHour); //fence post
for (let i=10; i<17; i++) {
    var intHour = i;
    emptyCalendar(i);
}
console.log(intHour);
emptyCalendar(endHour); // fence post
//creates new time block
function emptyCalendar (hr) {
    var timeBlock = document.createElement("div");
    timeBlock.setAttribute("class", "row time-block");
    var timeHr = document.createElement("div");
    timeHr.setAttribute("class", "col-sm-2 hour");
    var inputUnit = document.createElement("input");
    inputUnit.setAttribute("type", "text");
    if (hr == currentHour) {
        inputUnit.setAttribute("class", "col-sm-8 present description textarea");
        console.log("true");
        console.log(hr);
        console.log(currentHour);
    } else if (hr < currentHour) {
        console.log("false");
        inputUnit.setAttribute("class", "col-sm-8 past description textarea");
    } else {
        inputUnit.setAttribute("class", "col-sm-8 future description textarea");
    }
    if (hr > 12) {
        timeHr.textContent = (hr - 12) + "PM" 
    } else {
        timeHr.textContent = hr + "AM";
    }
    
    var save = document.createElement("button");
    save.setAttribute("class", "col-sm-2 saveBtn");
    save.textContent = "save";
    timeBlock.appendChild(timeHr);
    timeBlock.appendChild(inputUnit);
    timeBlock.appendChild(save);
    display.appendChild(timeBlock);
}

var saveBtn = document.getElementsByClassName("saveBtn");
var userInput = document.getElementsByClassName("textarea");
var hourData = document.getElementsByClassName("hour");
var user = new Array(saveBtn.length);
for (let i=0; i<saveBtn.length; i++) {
    saveBtn[i].addEventListener("click", function() {
        console.log(this);
        var saveData = {
            hour: hourData[i].textContent,
            todoItem: userInput[i].value
        };
        user[i] = (saveData);
        console.log(saveData);
        console.log(user);
    });    
}
localStorage.setItem("user", JSON.stringify(user));
var previousData = JSON.parse(localStorage.getItem("user"));
console.log(previousData);
for (let i=0; i<saveBtn.length; i++) {
    if(user[i] != null) {
        hourData[i].textContent = user[i].saveData.hour;
        userInput[i].value = user[i].saveData.todoItem;
    }
    break;
}


