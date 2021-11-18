time();
function time(){
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
    var crtime = currentTime.toLocaleString('en-US', { timeZone: 'America/Costa_Rica' });
    var ietime = currentTime.toLocaleString('en-US', { timeZone: 'Eire' });
    if (minutes < 10){
        minutes = "0" + minutes
    }
    if (sec < 10){
        sec = "0" + sec
    }

    var suffix = fullhours >= 12 ? "PM":"AM";

    var finaltime = "Current Time: " + hours + ":" + minutes + ":" + sec + " " + suffix + "<br>Current Date: " + day + ", " + month + " " + date + ", " + year + " (" + monthnumber + "/" + date + "/" + shortyear + ")" + "<br>Current UNIX Epoch Time: " + unixtime + "<br>Timezone: " + timezone + " (UTC-" + timeoffset + ")" + "<br><br>Time in Costa Rica: " + crtime + "<br>Time in London: " + ietime;

    document.getElementById('curtime').innerHTML = finaltime;
    setTimeout(time,100);
    }