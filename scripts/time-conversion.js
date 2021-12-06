function copyText(toCopy, button) {
    const element = document.getElementById(toCopy);
    element.select();
    document.execCommand("copy");
    element.blur();
    document.getSelection().removeAllRanges();
    document.getElementById(button).innerHTML = "Copied!";
    setTimeout(function () {
        document.getElementById(button).innerHTML = "Copy";
    }, 2000);
    showAlert("copymsg");
}

function showAlert(id) {
    var element = document.getElementById(id);
    element.className = "alert show";
    setTimeout(function () {
        element.className = element.className.replace("alert show", "alert");
    }, 2000);
}

updateStandardTime();

function updateStandardTime() {
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let currentTime = new Date();
    let date = currentTime.getDate();
    let month = months[currentTime.getMonth()];
    let year = currentTime.getFullYear();
    let fullhours = currentTime.getHours();
    let hours = ((fullhours + 11) % 12 + 1);
    let minutes = currentTime.getMinutes();
    let sec = currentTime.getSeconds();

    if (minutes < 10) {
        minutes = "0" + minutes
    };
    if (sec < 10) {
        sec = "0" + sec
    };

    let timesuffix = fullhours >= 12 ? "PM" : "AM";

    let output = month + " " + date + ", " + year + " " + hours + ":" + minutes + ":" + sec + " " + timesuffix;

    document.getElementById('standard-input').value = output;

    updateUnixOutput();
}

updateUnixOutput();

function updateUnixOutput() {
    let standardtime = document.getElementById('standard-input').value;
    let valid = (new Date(standardtime)).getTime() > 0;
    if (standardtime.length === 0) {
        document.getElementById("standard-runstatus").style.color = "dimgray";
        document.getElementById("standard-runstatus").className = "fas fa-arrow-down";
        document.getElementById('unix-output').value = "";
        document.getElementById('unix-output-copy').disabled = true;
    } else if (valid === false) {
        document.getElementById("standard-runstatus").style.color = "#bf4042";
        document.getElementById("standard-runstatus").className = "fas fa-times";
        document.getElementById('unix-output').value = "";
        document.getElementById('unix-output-copy').disabled = true;
    } else {
        document.getElementById("standard-runstatus").style.color = "#009c3f";
        document.getElementById("standard-runstatus").className = "fas fa-arrow-down";
        let unixtime = new Date(standardtime).getTime() / 1000;
        document.getElementById('unix-output').value = unixtime;
        document.getElementById('unix-output-copy').disabled = false;
    }
}

updateUnixTime();

function updateUnixTime() {
    let output = new Date().getTime();
    output = output.toString().slice(0, -3);

    document.getElementById('unix-input').value = output;

    updateStandardOutput();
}

updateStandardOutput();

function updateStandardOutput() {
    let standardtime = parseInt(document.getElementById('unix-input').value, 10) * 1000;
    let valid = (new Date(standardtime)).getTime() > 0;
    if ((document.getElementById('unix-input').value).length === 0) {
        document.getElementById("unix-runstatus").style.color = "dimgray";
        document.getElementById("unix-runstatus").className = "fas fa-arrow-down";
        document.getElementById('standard-output').value = "";
        document.getElementById('standard-output-copy').disabled = true;
    } else if (valid === false) {
        document.getElementById("unix-runstatus").style.color = "#bf4042";
        document.getElementById("unix-runstatus").className = "fas fa-times";
        document.getElementById('standard-output').value = "";
        document.getElementById('standard-output-copy').disabled = true;
    } else {
        document.getElementById("unix-runstatus").style.color = "#009c3f";
        document.getElementById("unix-runstatus").className = "fas fa-arrow-down";
        const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        let time = new Date(parseInt(standardtime));
        let date = time.getDate();
        let month = months[time.getMonth()];
        let year = time.getFullYear();
        let fullhours = time.getHours();
        let hours = ((fullhours + 11) % 12 + 1);
        let minutes = time.getMinutes();
        let sec = time.getSeconds();

        if (minutes < 10) {
            minutes = "0" + minutes
        };
        if (sec < 10) {
            sec = "0" + sec
        };

        let timesuffix = fullhours >= 12 ? "PM" : "AM";

        let output = month + " " + date + ", " + year + " " + hours + ":" + minutes + ":" + sec + " " + timesuffix;
        document.getElementById('standard-output').value = output;
        document.getElementById('standard-output-copy').disabled = false;
    }
}