timer();
function timer(){
    var currentTime = new Date()
    var fullhours = currentTime.getHours()
    var hours = ((fullhours + 11) % 12 + 1)
    var minutes = currentTime.getMinutes()
    var sec = currentTime.getSeconds()
    if (minutes < 10){
        minutes = "0" + minutes
    }
    if (sec < 10){
        sec = "0" + sec
    }

    var suffix = fullhours >= 12 ? "PM":"AM";

    var finaltime = hours + ":" + minutes + ":" + sec + " " + suffix;

    document.getElementById('curtime').innerHTML = finaltime;
    setTimeout(timer,1000);
    }