function countdown(date, elementID) {

  var countdownDate = new Date(`${date} 00:00:00`).getTime();

  var daysfinal = null;
  var hoursfinal = null;
  var minutesfinal = null;
  var secondsfinal = null;

  var daysfinalsuffix = null;
  var hoursfinalsuffix = null;
  var minutesfinalsuffix = null;

  var curtime = new Date().getTime();

  var distance = countdownDate - curtime;

  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  if (hours === 0 && minutes === 0 && seconds === 0) {
    var daysfinalsuffix = "";
  } else {
    var daysfinalsuffix = ", ";
  }

  if (days === 1) {
    var daysfinal = days + " day" + daysfinalsuffix;

  } else if (days === 0) {
    var daysfinal = "";
  } else {
    var daysfinal = days + " days" + daysfinalsuffix;
  }

  if (minutes === 0 && seconds === 0) {
    var hoursfinalsuffix = "";
  } else {
    var hoursfinalsuffix = ", ";
  }

  if (hours === 1) {
    var hoursfinal = hours + " hour" + hoursfinalsuffix;

  } else if (hours === 0) {
    var hoursfinal = "";
  } else {
    var hoursfinal = hours + " hours" + hoursfinalsuffix;
  }

  if (seconds === 0) {
    var minutesfinalsuffix = "";
  } else {
    var minutesfinalsuffix = ", ";
  }

  if (minutes === 1) {
    var minutesfinal = minutes + " minute" + minutesfinalsuffix;

  } else if (minutes === 0) {
    var minutesfinal = "";
  } else {
    var minutesfinal = minutes + " minutes" + minutesfinalsuffix;
  }

  if (seconds === 1) {
    var secondsfinal = seconds + " second";

  } else if (seconds === 0) {
    var secondsfinal = "";
  } else {
    var secondsfinal = seconds + " seconds";
  }
  
  distance <= 0 ? document.getElementById(elementID).innerHTML = '<span style="color:#FF5555;">This event has already occurred!</span>' : document.getElementById(elementID).innerHTML = daysfinal + hoursfinal + minutesfinal + secondsfinal;
}

/*var vanlentines = setInterval(countdown, 100, 'February 14, 2022', 'valentines');

var patricks = setInterval(countdown, 100, 'March 17, 2022', 'patricks');

var easter = setInterval(countdown, 100, 'April 17, 2022', 'easter');

var independence = setInterval(countdown, 100, 'July 4, 2022', 'independence');

var halloween = setInterval(countdown, 100, 'October 31, 2022', 'halloween');

var thanksgiving = setInterval(countdown, 100, 'November 24, 2022', 'thanksgiving');

*/var christmas = setInterval(countdown, 100, 'December 25, 2021', 'christmas');

var newyears = setInterval(countdown, 100, 'January 1, 2022', 'newyears');