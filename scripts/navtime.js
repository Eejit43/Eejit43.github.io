navtime();
function navtime(){
    var currentTime = new Date();
    var fullhours = currentTime.getHours();
    var hours = ((fullhours + 11) % 12 + 1);
    var minutes = currentTime.getMinutes();
    var sec = currentTime.getSeconds();
    if (minutes < 10){
        minutes = "0" + minutes
    }
    if (sec < 10){
        sec = "0" + sec
    }

    var timesuffix = fullhours >= 12 ? "PM":"AM";

    var timeemoji = fullhours >= 7 && fullhours < 18 ? '<img draggable="false" class="emoji" alt="☀️" src="https://twemoji.maxcdn.com/v/13.1.0/svg/2600.svg">':'<img draggable="false" class="emoji" alt="🌒" src="https://twemoji.maxcdn.com/v/13.1.0/svg/1f312.svg">';

    var finaltime = hours + ":" + minutes + ":" + sec + " " + timesuffix + " " + timeemoji;

    document.getElementById('navtime').innerHTML = finaltime;
    setTimeout(navtime,100);
    }