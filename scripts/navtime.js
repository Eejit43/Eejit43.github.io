function navtime() {
    let currentTime = new Date();
    let fullhours = currentTime.getHours();
    let hours = ((fullhours + 11) % 12 + 1);
    let minutes = currentTime.getMinutes();
    let sec = currentTime.getSeconds();
    if (minutes < 10) {
        minutes = '0' + minutes
    }
    if (sec < 10) {
        sec = '0' + sec
    }

    let timesuffix = fullhours >= 12 ? 'PM' : 'AM';

    let timeemoji = fullhours >= 7 && fullhours < 17 ? '<img draggable="false" class="emoji" alt="☀️" src="https://twemoji.maxcdn.com/v/13.1.0/svg/2600.svg">' : '<img draggable="false" class="emoji" alt="🌒" src="https://twemoji.maxcdn.com/v/13.1.0/svg/1f312.svg">';

    let finaltime = hours + ':' + minutes + ':' + sec + ' ' + timesuffix + ' ' + timeemoji;

    document.getElementById('navtime').innerHTML = finaltime;
    setTimeout(navtime, 100);
}

navtime();