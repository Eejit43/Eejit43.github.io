// Refer to https://en.wikipedia.org/wiki/List_of_tz_database_time_zones for time zone names
time();

function time() {
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    var currentTime = new Date();
    var day = days[currentTime.getDay()];
    var date = currentTime.getDate();
    var month = months[currentTime.getMonth()];
    var monthnumber = (currentTime.getMonth() + 1);
    var year = currentTime.getFullYear();
    var shortyear = year.toString().substr(-2);
    var fullhours = currentTime.getHours();
    var hours = ((fullhours + 11) % 12 + 1);
    var minutes = currentTime.getMinutes();
    var sec = currentTime.getSeconds();
    var msec = currentTime.getMilliseconds();
    var unixtime = currentTime.getTime();
    var timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    var timeoffset = (currentTime.getTimezoneOffset() / 60);
    var jptime = currentTime.toLocaleString('en-US', {
        timeZone: 'Japan'
    });
    var crtime = currentTime.toLocaleString('en-US', {
        timeZone: 'America/Costa_Rica'
    });
    var gbtime = currentTime.toLocaleString('en-US', {
        timeZone: 'Europe/London'
    });
    var utctime = currentTime.toLocaleString('en-US', {
        timeZone: 'Etc/UTC'
    });
    if (minutes < 10) {
        minutes = "0" + minutes
    }
    if (sec < 10) {
        sec = "0" + sec
    }

    var timesuffix = fullhours >= 12 ? "PM" : "AM";

    var finaltime = hours + ":" + minutes + ":" + sec + " " + timesuffix;
    var finaldate = day + ", " + month + " " + date + ", " + year + " (" + monthnumber + "/" + date + "/" + shortyear + ")";
    var finaltimezone = timezone + " (UTC-" + timeoffset + ")";

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