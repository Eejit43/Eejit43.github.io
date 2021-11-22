var valentines = setInterval(function () {

  var countdownDate = new Date("February 14, 2022 00:00:00").getTime();

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

  if (hours == 0 && minutes == 0 && seconds == 0) {
    var daysfinalsuffix = "";
  } else {
    var daysfinalsuffix = ", ";
  }

  if (days == 1) {
    var daysfinal = days + " day" + daysfinalsuffix;

  } else if (days == 0) {
    var daysfinal = "";
  } else {
    var daysfinal = days + " days" + daysfinalsuffix;
  }

  if (minutes == 0 && seconds == 0) {
    var hoursfinalsuffix = "";
  } else {
    var hoursfinalsuffix = ", ";
  }

  if (hours == 1) {
    var hoursfinal = hours + " hour" + hoursfinalsuffix;

  } else if (hours == 0) {
    var hoursfinal = "";
  } else {
    var hoursfinal = hours + " hours" + hoursfinalsuffix;
  }

  if (seconds == 0) {
    var minutesfinalsuffix = "";
  } else {
    var minutesfinalsuffix = ", ";
  }

  if (minutes == 1) {
    var minutesfinal = minutes + " minute" + minutesfinalsuffix;

  } else if (minutes == 0) {
    var minutesfinal = "";
  } else {
    var minutesfinal = minutes + " minutes" + minutesfinalsuffix;
  }

  if (seconds == 1) {
    var secondsfinal = seconds + " second";

  } else if (seconds == 0) {
    var secondsfinal = "";
  } else {
    var secondsfinal = seconds + " seconds";
  }

  document.getElementById("valentines").innerHTML = daysfinal + hoursfinal +
    minutesfinal + secondsfinal;


  if (distance < 0) {
    clearInterval(valentines);
    document.getElementById("valentines").innerHTML = "<span style='color:#FF5555;'>This event has already happened!</span>";
  }
}, 100);


var patricks = setInterval(function () {

  var countdownDate = new Date("March 17, 2022 00:00:00").getTime();

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

  if (hours == 0 && minutes == 0 && seconds == 0) {
    var daysfinalsuffix = "";
  } else {
    var daysfinalsuffix = ", ";
  }

  if (days == 1) {
    var daysfinal = days + " day" + daysfinalsuffix;

  } else if (days == 0) {
    var daysfinal = "";
  } else {
    var daysfinal = days + " days" + daysfinalsuffix;
  }

  if (minutes == 0 && seconds == 0) {
    var hoursfinalsuffix = "";
  } else {
    var hoursfinalsuffix = ", ";
  }

  if (hours == 1) {
    var hoursfinal = hours + " hour" + hoursfinalsuffix;

  } else if (hours == 0) {
    var hoursfinal = "";
  } else {
    var hoursfinal = hours + " hours" + hoursfinalsuffix;
  }

  if (seconds == 0) {
    var minutesfinalsuffix = "";
  } else {
    var minutesfinalsuffix = ", ";
  }

  if (minutes == 1) {
    var minutesfinal = minutes + " minute" + minutesfinalsuffix;

  } else if (minutes == 0) {
    var minutesfinal = "";
  } else {
    var minutesfinal = minutes + " minutes" + minutesfinalsuffix;
  }

  if (seconds == 1) {
    var secondsfinal = seconds + " second";

  } else if (seconds == 0) {
    var secondsfinal = "";
  } else {
    var secondsfinal = seconds + " seconds";
  }

  document.getElementById("patricks").innerHTML = daysfinal + hoursfinal +
    minutesfinal + secondsfinal;


  if (distance < 0) {
    clearInterval(patricks);
    document.getElementById("patricks").innerHTML = "<span style='color:#FF5555;'>This event has already happened!</span>";
  }
}, 100);


var easter = setInterval(function () {

  var countdownDate = new Date("April 17, 2022 00:00:00").getTime();

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

  if (hours == 0 && minutes == 0 && seconds == 0) {
    var daysfinalsuffix = "";
  } else {
    var daysfinalsuffix = ", ";
  }

  if (days == 1) {
    var daysfinal = days + " day" + daysfinalsuffix;

  } else if (days == 0) {
    var daysfinal = "";
  } else {
    var daysfinal = days + " days" + daysfinalsuffix;
  }

  if (minutes == 0 && seconds == 0) {
    var hoursfinalsuffix = "";
  } else {
    var hoursfinalsuffix = ", ";
  }

  if (hours == 1) {
    var hoursfinal = hours + " hour" + hoursfinalsuffix;

  } else if (hours == 0) {
    var hoursfinal = "";
  } else {
    var hoursfinal = hours + " hours" + hoursfinalsuffix;
  }

  if (seconds == 0) {
    var minutesfinalsuffix = "";
  } else {
    var minutesfinalsuffix = ", ";
  }

  if (minutes == 1) {
    var minutesfinal = minutes + " minute" + minutesfinalsuffix;

  } else if (minutes == 0) {
    var minutesfinal = "";
  } else {
    var minutesfinal = minutes + " minutes" + minutesfinalsuffix;
  }

  if (seconds == 1) {
    var secondsfinal = seconds + " second";

  } else if (seconds == 0) {
    var secondsfinal = "";
  } else {
    var secondsfinal = seconds + " seconds";
  }

  document.getElementById("easter").innerHTML = daysfinal + hoursfinal +
    minutesfinal + secondsfinal;


  if (distance < 0) {
    clearInterval(easter);
    document.getElementById("easter").innerHTML = "<span style='color:#FF5555;'>This event has already happened!</span>";
  }
}, 100);


var independence = setInterval(function () {

  var countdownDate = new Date("July 4, 2022 00:00:00").getTime();

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

  if (hours == 0 && minutes == 0 && seconds == 0) {
    var daysfinalsuffix = "";
  } else {
    var daysfinalsuffix = ", ";
  }

  if (days == 1) {
    var daysfinal = days + " day" + daysfinalsuffix;

  } else if (days == 0) {
    var daysfinal = "";
  } else {
    var daysfinal = days + " days" + daysfinalsuffix;
  }

  if (minutes == 0 && seconds == 0) {
    var hoursfinalsuffix = "";
  } else {
    var hoursfinalsuffix = ", ";
  }

  if (hours == 1) {
    var hoursfinal = hours + " hour" + hoursfinalsuffix;

  } else if (hours == 0) {
    var hoursfinal = "";
  } else {
    var hoursfinal = hours + " hours" + hoursfinalsuffix;
  }

  if (seconds == 0) {
    var minutesfinalsuffix = "";
  } else {
    var minutesfinalsuffix = ", ";
  }

  if (minutes == 1) {
    var minutesfinal = minutes + " minute" + minutesfinalsuffix;

  } else if (minutes == 0) {
    var minutesfinal = "";
  } else {
    var minutesfinal = minutes + " minutes" + minutesfinalsuffix;
  }

  if (seconds == 1) {
    var secondsfinal = seconds + " second";

  } else if (seconds == 0) {
    var secondsfinal = "";
  } else {
    var secondsfinal = seconds + " seconds";
  }

  document.getElementById("independence").innerHTML = daysfinal + hoursfinal +
    minutesfinal + secondsfinal;


  if (distance < 0) {
    clearInterval(independence);
    document.getElementById("independence").innerHTML = "<span style='color:#FF5555;'>This event has already happened!</span>";
  }
}, 100);


var halloween = setInterval(function () {

  var countdownDate = new Date("October 31, 2022 00:00:00").getTime();

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

  if (hours == 0 && minutes == 0 && seconds == 0) {
    var daysfinalsuffix = "";
  } else {
    var daysfinalsuffix = ", ";
  }

  if (days == 1) {
    var daysfinal = days + " day" + daysfinalsuffix;

  } else if (days == 0) {
    var daysfinal = "";
  } else {
    var daysfinal = days + " days" + daysfinalsuffix;
  }

  if (minutes == 0 && seconds == 0) {
    var hoursfinalsuffix = "";
  } else {
    var hoursfinalsuffix = ", ";
  }

  if (hours == 1) {
    var hoursfinal = hours + " hour" + hoursfinalsuffix;

  } else if (hours == 0) {
    var hoursfinal = "";
  } else {
    var hoursfinal = hours + " hours" + hoursfinalsuffix;
  }

  if (seconds == 0) {
    var minutesfinalsuffix = "";
  } else {
    var minutesfinalsuffix = ", ";
  }

  if (minutes == 1) {
    var minutesfinal = minutes + " minute" + minutesfinalsuffix;

  } else if (minutes == 0) {
    var minutesfinal = "";
  } else {
    var minutesfinal = minutes + " minutes" + minutesfinalsuffix;
  }

  if (seconds == 1) {
    var secondsfinal = seconds + " second";

  } else if (seconds == 0) {
    var secondsfinal = "";
  } else {
    var secondsfinal = seconds + " seconds";
  }

  document.getElementById("halloween").innerHTML = daysfinal + hoursfinal +
    minutesfinal + secondsfinal;


  if (distance < 0) {
    clearInterval(halloween);
    document.getElementById("halloween").innerHTML = "<span style='color:#FF5555;'>This event has already happened!</span>";
  }
}, 100);


var thanksgiving = setInterval(function () {

  var countdownDate = new Date("November 25, 2021 00:00:00").getTime();

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

  if (hours == 0 && minutes == 0 && seconds == 0) {
    var daysfinalsuffix = "";
  } else {
    var daysfinalsuffix = ", ";
  }

  if (days == 1) {
    var daysfinal = days + " day" + daysfinalsuffix;

  } else if (days == 0) {
    var daysfinal = "";
  } else {
    var daysfinal = days + " days" + daysfinalsuffix;
  }

  if (minutes == 0 && seconds == 0) {
    var hoursfinalsuffix = "";
  } else {
    var hoursfinalsuffix = ", ";
  }

  if (hours == 1) {
    var hoursfinal = hours + " hour" + hoursfinalsuffix;

  } else if (hours == 0) {
    var hoursfinal = "";
  } else {
    var hoursfinal = hours + " hours" + hoursfinalsuffix;
  }

  if (seconds == 0) {
    var minutesfinalsuffix = "";
  } else {
    var minutesfinalsuffix = ", ";
  }

  if (minutes == 1) {
    var minutesfinal = minutes + " minute" + minutesfinalsuffix;

  } else if (minutes == 0) {
    var minutesfinal = "";
  } else {
    var minutesfinal = minutes + " minutes" + minutesfinalsuffix;
  }

  if (seconds == 1) {
    var secondsfinal = seconds + " second";

  } else if (seconds == 0) {
    var secondsfinal = "";
  } else {
    var secondsfinal = seconds + " seconds";
  }

  document.getElementById("thanksgiving").innerHTML = daysfinal + hoursfinal +
    minutesfinal + secondsfinal;


  if (distance < 0) {
    clearInterval(thanksgiving);
    document.getElementById("thanksgiving").innerHTML = "<span style='color:#FF5555;'>This event has already happened!</span>";
  }
}, 100);


var xmas = setInterval(function () {

  var countdownDate = new Date("December 25, 2021 00:00:00").getTime();

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

  if (hours == 0 && minutes == 0 && seconds == 0) {
    var daysfinalsuffix = "";
  } else {
    var daysfinalsuffix = ", ";
  }

  if (days == 1) {
    var daysfinal = days + " day" + daysfinalsuffix;

  } else if (days == 0) {
    var daysfinal = "";
  } else {
    var daysfinal = days + " days" + daysfinalsuffix;
  }

  if (minutes == 0 && seconds == 0) {
    var hoursfinalsuffix = "";
  } else {
    var hoursfinalsuffix = ", ";
  }

  if (hours == 1) {
    var hoursfinal = hours + " hour" + hoursfinalsuffix;

  } else if (hours == 0) {
    var hoursfinal = "";
  } else {
    var hoursfinal = hours + " hours" + hoursfinalsuffix;
  }

  if (seconds == 0) {
    var minutesfinalsuffix = "";
  } else {
    var minutesfinalsuffix = ", ";
  }

  if (minutes == 1) {
    var minutesfinal = minutes + " minute" + minutesfinalsuffix;

  } else if (minutes == 0) {
    var minutesfinal = "";
  } else {
    var minutesfinal = minutes + " minutes" + minutesfinalsuffix;
  }

  if (seconds == 1) {
    var secondsfinal = seconds + " second";

  } else if (seconds == 0) {
    var secondsfinal = "";
  } else {
    var secondsfinal = seconds + " seconds";
  }

  document.getElementById("xmas").innerHTML = daysfinal + hoursfinal +
    minutesfinal + secondsfinal;


  if (distance < 0) {
    clearInterval(xmas);
    document.getElementById("xmas").innerHTML = "<span style='color:#FF5555;'>This event has already happened!</span>";
  }
}, 100);


var newyears = setInterval(function () {

  var countdownDate = new Date("January 1, 2022 00:00:00").getTime();

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

  if (hours == 0 && minutes == 0 && seconds == 0) {
    var daysfinalsuffix = "";
  } else {
    var daysfinalsuffix = ", ";
  }

  if (days == 1) {
    var daysfinal = days + " day" + daysfinalsuffix;

  } else if (days == 0) {
    var daysfinal = "";
  } else {
    var daysfinal = days + " days" + daysfinalsuffix;
  }

  if (minutes == 0 && seconds == 0) {
    var hoursfinalsuffix = "";
  } else {
    var hoursfinalsuffix = ", ";
  }

  if (hours == 1) {
    var hoursfinal = hours + " hour" + hoursfinalsuffix;

  } else if (hours == 0) {
    var hoursfinal = "";
  } else {
    var hoursfinal = hours + " hours" + hoursfinalsuffix;
  }

  if (seconds == 0) {
    var minutesfinalsuffix = "";
  } else {
    var minutesfinalsuffix = ", ";
  }

  if (minutes == 1) {
    var minutesfinal = minutes + " minute" + minutesfinalsuffix;

  } else if (minutes == 0) {
    var minutesfinal = "";
  } else {
    var minutesfinal = minutes + " minutes" + minutesfinalsuffix;
  }

  if (seconds == 1) {
    var secondsfinal = seconds + " second";

  } else if (seconds == 0) {
    var secondsfinal = "";
  } else {
    var secondsfinal = seconds + " seconds";
  }

  document.getElementById("newyears").innerHTML = daysfinal + hoursfinal +
    minutesfinal + secondsfinal;


  if (distance < 0) {
    clearInterval(newyears);
    document.getElementById("newyears").innerHTML = "<span style='color:#FF5555;'>This event has already happened!</span>";
  }
}, 100);