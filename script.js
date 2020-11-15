// Gets and displays today's date :
moment(Date);
$("#currentDay").text(moment().format('dddd, MMMM Do'));
// Starts the day at 9Am :
var currentTime = moment();
currentTime = currentTime.startOf("hour");
// Adding 9 to actual start of day to get start at 9am : 
var beforeTime = moment().startOf('day').add(9, "hours");

// Checking time to determine present, past or future to set the bacground color :
function dayTime(){
// 9AM :    
var hour1 = moment().startOf("day").add(9, "hours");
currentTime = currentTime.startOf("hour");
if (currentTime.isAfter(hour1)) {
    $(".form9").addClass("past");
}else if (currentTime.isBefore(hour1)) {
    $(".form9").addClass("future");
}else if (currentTime.isSame(hour1)) {
    $(".form9").addClass("present");
};
// 10AM :
var hour2 = moment().startOf("day").add(10, "hours");
currentTime = currentTime.startOf("hour");
if (currentTime.isAfter(hour2)) {
    $(".form10").addClass("past");
}else if (currentTime.isBefore(hour2)) {
    $(".form10").addClass("future");
}else if (currentTime.isSame(hour2)) {
    $(".form10").addClass("present");
};
// 11AM :
var hour3 = moment().startOf("day").add(11, "hours");
currentTime = currentTime.startOf("hour");
if (currentTime.isAfter(hour3)) {
    $(".form11").addClass("past");
}else if (currentTime.isBefore(hour3)) {
    $(".form11").addClass("future");
}else if (currentTime.isSame(hour3)) {
    $(".form11").addClass("present");
};
// 12PM :
var hour4 = moment().startOf("day").add(12, "hours");
currentTime = currentTime.startOf("hour");
if (currentTime.isAfter(hour4)) {
    $(".form12").addClass("past");
}else if (currentTime.isBefore(hour4)) {
    $(".form12").addClass("future");
}else if (currentTime.isSame(hour4)) {
    $(".form12").addClass("present");
};
// 01PM :
var hour5 = moment().startOf("day").add(13, "hours");
currentTime = currentTime.startOf("hour");
if (currentTime.isAfter(hour5)) {
    $(".form13").addClass("past");
}else if (currentTime.isBefore(hour5)) {
    $(".form13").addClass("future");
}else if (currentTime.isSame(hour5)) {
    $(".form13").addClass("present");
};
// 02PM :
var hour6= moment().startOf("day").add(14, "hours");
currentTime = currentTime.startOf("hour");
if (currentTime.isAfter(hour6)) {
    $(".form14").addClass("past");
}else if (currentTime.isBefore(hour6)) {
    $(".form14").addClass("future");
}else if (currentTime.isSame(hour6)) {
    $(".form14").addClass("present");
};
// 03PM :
var hour7 = moment().startOf("day").add(15, "hours");
currentTime = currentTime.startOf("hour");
if (currentTime.isAfter(hour7)) {
    $(".form15").addClass("past");
}else if (currentTime.isBefore(hour7)) {
    $(".form15").addClass("future");
}else if (currentTime.isSame(hour7)) {
    $(".form15").addClass("present");
};
// 04PM :
var hour8 = moment().startOf("day").add(16, "hours");
currentTime = currentTime.startOf("hour");
if (currentTime.isAfter(hour8)) {
    $(".form16").addClass("past");
}else if (currentTime.isBefore(hour8)) {
    $(".form16").addClass("future");
}else if (currentTime.isSame(hour8)) {
    $(".form16").addClass("present");
};
// 05PM :
var hour9 = moment().startOf("day").add(17, "hours");
currentTime = currentTime.startOf("hour");
if (currentTime.isAfter(hour9)) {
    $(".form17").addClass("past");
}else if (currentTime.isBefore(hour9)) {
    $(".form17").addClass("future");
}else if (currentTime.isSame(hour9)) {
    $(".form17").addClass("present");
};
};
// Function call:
dayTime();

// Event listener that saves input to local storage :
$(".saveBtn").click(function (e){
    e.preventDefault();
    var fValue = $(this).siblings(".form-control").val();
    var listI = $(this).parent().data("hour");

    localStorage.setItem(listI, fValue);
});

// For loop to get the data from local storage:
var hours = [9, 10, 11, 12, 13, 14, 15, 16, 17];
for(i = 0; i < hours.length; i++){
    var data = localStorage.getItem(hours[i]);
    $(".form" + hours[i]).val(data); 
};