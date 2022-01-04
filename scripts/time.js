// Refer to https://en.wikipedia.org/wiki/List_of_tz_database_time_zones for time zone names
time();

function time() {
  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  let currentTime = new Date();
  let day = days[currentTime.getDay()];
  let date = currentTime.getDate();
  let month = months[currentTime.getMonth()];
  let monthnumber = (currentTime.getMonth() + 1);
  let year = currentTime.getFullYear();
  let shortyear = year.toString().substr(-2);
  let fullhours = currentTime.getHours();
  let hours = ((fullhours + 11) % 12 + 1);
  let minutes = currentTime.getMinutes();
  let sec = currentTime.getSeconds();
  let msec = currentTime.getMilliseconds();
  let unixtime = currentTime.getTime();
  let timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  let toffset = new Date().getTimezoneOffset();
  let offsetsign = toffset < 0 ? '+' : '-';
  let timeoffset = offsetsign + (toffset / 60 | 0);
  let jptime = currentTime.toLocaleString('en-US', {
    timeZone: 'Japan'
  });
  let crtime = currentTime.toLocaleString('en-US', {
    timeZone: 'America/Costa_Rica'
  });
  let gbtime = currentTime.toLocaleString('en-US', {
    timeZone: 'Europe/London'
  });
  let utctime = currentTime.toLocaleString('en-US', {
    timeZone: 'Etc/UTC'
  });
  if (minutes < 10) {
    minutes = "0" + minutes
  }
  if (sec < 10) {
    sec = "0" + sec
  }

  // If DST code modified from https://stackoverflow.com/questions/11887934/how-to-check-if-dst-daylight-saving-time-is-in-effect-and-if-so-the-offset
  Date.prototype.stdTimezoneOffset = function () {
    let jan = new Date(this.getFullYear(), 0, 1);
    let jul = new Date(this.getFullYear(), 6, 1);
    return Math.max(jan.getTimezoneOffset(), jul.getTimezoneOffset());
  }

  Date.prototype.isDstObserved = function () {
    return this.getTimezoneOffset() < this.stdTimezoneOffset();
  }

  let today = new Date();
  if (today.isDstObserved()) {
    document.getElementById('dst').innerHTML = "In";
  } else {
    document.getElementById('dst').innerHTML = "Not";
  }

  let timesuffix = fullhours >= 12 ? "PM" : "AM";

  let finaltime = hours + ":" + minutes + ":" + sec + " " + timesuffix;
  let finaldate = day + ", " + month + " " + date + ", " + year + " (" + monthnumber + "/" + date + "/" + shortyear + ")";
  let finaltimezone = timezone + " (UTC" + timeoffset + ")";

  document.getElementById('time').innerHTML = finaltime;
  document.getElementById('date').innerHTML = finaldate;
  document.getElementById('unix').innerHTML = unixtime;
  document.getElementById('timezone').innerHTML = finaltimezone;
  document.getElementById('jptime').innerHTML = jptime;
  document.getElementById('crtime').innerHTML = crtime;
  document.getElementById('gbtime').innerHTML = gbtime;
  document.getElementById('utctime').innerHTML = utctime;
  setTimeout(time, 100);
}