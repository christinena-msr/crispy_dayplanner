// grabs p tag in header section & displays the current day (MM/DD)
var today = document.getElementById("currentDay");
var date = moment().format("dddd, MMMM Do")
today.textContent = date; // current date 
var currentHour = moment().format("hA");

// var currentHour = 12;
// update: july 2020 increase time from 9am - 5pm to 8am - 11pm
var startHour = 4;
var endHour = 23;

// grabs div tag for time block container
var display = document.querySelector(".container");
emptyCalendar(startHour); //fence post
for (let i=5; i<23; i++) {
    var intHour = i;
    emptyCalendar(i);
}
console.log(intHour);
emptyCalendar(endHour); // fence post

//creates new time block
function emptyCalendar (hr) {
    // creates initial time block row
    var timeBlock = document.createElement("div");
    timeBlock.setAttribute("class", "row time-block");

    // creates first column (size 2) which hosts the time (in hr)
    var timeHr = document.createElement("div");
    timeHr.setAttribute("class", "col-sm-2 hour");

    // create second column (size 8) which hosts user input block (textarea)
    var inputUnit = document.createElement("input");
    inputUnit.setAttribute("type", "text");

    // set different colors for past (white), present (red), and future (green)
    if (hr == currentHour) {
        inputUnit.setAttribute("class", "col-sm-8 present description textarea");
    } else if (hr < currentHour) {
        inputUnit.setAttribute("class", "col-sm-8 past description textarea");
    } else {
        inputUnit.setAttribute("class", "col-sm-8 future description textarea");
    }

    // sets text value of time in column 2
    if(hr === 12) {
        timeHr.textContent = hr + "PM";
    }
    else if (hr > 12) {
        timeHr.textContent = (hr - 12) + "PM";
    } else {
        timeHr.textContent = hr + "AM";
    }
    
    // create third column (size 2) that hosts save button
    var save = document.createElement("button");
    save.setAttribute("class", "col-sm-2 saveBtn");
    save.textContent = "save";

    // render DOM with newly created row element
    timeBlock.appendChild(timeHr);
    timeBlock.appendChild(inputUnit);
    timeBlock.appendChild(save);
    display.appendChild(timeBlock);
}

// grab all row elements by class name
var saveBtn = document.getElementsByClassName("saveBtn");
var userInput = document.getElementsByClassName("textarea");
var hourData = document.getElementsByClassName("hour");

var user = new Array(saveBtn.length);

// add event listener for each button
for (let i=0; i<saveBtn.length; i++) {
    saveBtn[i].addEventListener("click", function() {
        var saveData = {
            hour: hourData[i].textContent,
            todoItem: userInput[i].value
        };
        user[i] = (saveData);
    });    
}

// saves and retrieves user data from local storage
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


