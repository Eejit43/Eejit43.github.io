window.onload=function () {
document.getElementById('standard-input').addEventListener("input", updateUnixOutput);
document.getElementById('standard-input-reset').addEventListener("click", updateStandardTime);
document.getElementById('unix-input').addEventListener("input", updateStandardOutput);
document.getElementById('unix-input-reset').addEventListener("click", updateUnixTime);
document.getElementById('unix-input-switch').addEventListener("click", switchUnixInput);
document.getElementById('unix-output-copy').addEventListener("click", function () {copyText('unix-output', 'unix-output-copy')});
document.getElementById('unix-output-switch').addEventListener("click", switchUnixOutput);
document.getElementById('standard-output-copy').addEventListener("click", function () {copyText('standard-output', 'standard-output-copy')});
}

let unixInputState = 1; // 1 = seconds, 2 = milliseconds
let unixOutputState = 1; // 1 = seconds, 2 = milliseconds

function copyText(toCopy, button) {
    const element = document.getElementById(toCopy);
    navigator.clipboard.writeText(element.value);
    document.getElementById(button).innerHTML = "Copied!";
    setTimeout(function () {
        document.getElementById(button).innerHTML = "Copy";
    }, 2000);
    showAlert("copymsg");
}

function showAlert(id) {
    let element = document.getElementById(id);
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
        document.getElementById('unix-output-switch').disabled = true;
    } else if (valid === false) {
        document.getElementById("standard-runstatus").style.color = "#bf4042";
        document.getElementById("standard-runstatus").className = "fas fa-times";
        document.getElementById('unix-output').value = "";
        document.getElementById('unix-output-copy').disabled = true;
        document.getElementById('unix-output-switch').disabled = true;
    } else {
        document.getElementById("standard-runstatus").style.color = "#009c3f";
        document.getElementById("standard-runstatus").className = "fas fa-arrow-down";
        let unixtime = new Date(standardtime).getTime();
        if (unixOutputState === 1) {
            unixtime = unixtime.toString().slice(0, -3);
        }
        document.getElementById('unix-output').value = unixtime;
        document.getElementById('unix-output-copy').disabled = false;
        document.getElementById('unix-output-switch').disabled = false;
    }
}

updateUnixTime();

function updateUnixTime() {
    let output = new Date().getTime();
    if (unixInputState === 1) {
        output = output.toString().slice(0, -3);
    }

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
        let time2 = new Date(parseInt(standardtime.toString().slice(0, -3)));
        if (unixInputState === 2) {
            time = new Date(parseInt(standardtime.toString().slice(0, -3)));
        }
        let date = time.getDate();
        let month = months[time.getMonth()];
        let year = time.getFullYear();
        let fullhours = time.getHours();
        let hours = ((fullhours + 11) % 12 + 1);
        let minutes = time.getMinutes();
        let sec = time.getSeconds();
        let msec = time2.getMilliseconds();

        if (minutes < 10) {
            minutes = "0" + minutes
        };
        if (sec < 10) {
            sec = "0" + sec
        };

        let timesuffix = fullhours >= 12 ? "PM" : "AM";

        let output = undefined;
        if (unixInputState === 2) {
            output = month + " " + date + ", " + year + " " + hours + ":" + minutes + ":" + sec + "." + msec + " " + timesuffix;
        } else {
            output = month + " " + date + ", " + year + " " + hours + ":" + minutes + ":" + sec + " " + timesuffix;
        }
        document.getElementById('standard-output').value = output;
        document.getElementById('standard-output-copy').disabled = false;
    }
}


function switchUnixInput() {
    let title = document.getElementById('unix-input-title');
    let button = document.getElementById('unix-input-switch');
    if (unixInputState === 1) {
        unixInputState = 2;
        title.innerHTML = 'UNIX Time (milliseconds):';
        button.innerHTML = 'Switch to seconds';
    } else if (unixInputState === 2) {
        unixInputState = 1;
        title.innerHTML = 'UNIX Time (seconds):';
        button.innerHTML = 'Switch to milliseconds';
    }
    updateStandardOutput();
}

function switchUnixOutput() {
    let title = document.getElementById('unix-output-title');
    let button = document.getElementById('unix-output-switch');
    if (unixOutputState === 1) {
        unixOutputState = 2;
        title.innerHTML = 'UNIX Time (milliseconds):';
        button.innerHTML = 'Switch to seconds';
    } else if (unixOutputState === 2) {
        unixOutputState = 1;
        title.innerHTML = 'UNIX Time (seconds):';
        button.innerHTML = 'Switch to milliseconds';
    }
    updateUnixOutput();
}