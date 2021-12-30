document.getElementById('pause-resume-timer').disabled = true;

window.onload = function () {
  document.getElementById('start-timer').addEventListener("click", startTimer);
  document.getElementById('pause-resume-timer').addEventListener("click", pauseResume);
  document.getElementById('reset').addEventListener("click", reset);
  document.getElementById('hours').addEventListener("input", function () {
    let input = document.getElementById('hours');
    input.value = input.value.replace(/((?![0-9]).)/g, '');
  });
  document.getElementById('hours').addEventListener("input", function () {
    checkInput(this);
  });
  document.getElementById('minutes').addEventListener("input", function () {
    let input = document.getElementById('minutes');
    input.value = input.value.replace(/((?![0-9]).)/g, '');
  });
  document.getElementById('minutes').addEventListener("input", function () {
    checkInput(this);
  });
  document.getElementById('seconds').addEventListener("input", function () {
    let input = document.getElementById('seconds');
    input.value = input.value.replace(/((?![0-9]).)/g, '');
  });
  document.getElementById('seconds').addEventListener("input", function () {
    checkInput(this);
  });
}

function checkInput(element) {
  if (element.value.length > element.maxLength) element.value = element.value.slice(0, element.maxLength);
  if (element.value > element.max || element.value < 1) element.value = element.value.slice(0, 1);
}

function showAlert(text, color) {
  if (color === 'success') {
    color = '#009c3f'
  } else if (color === 'error') {
    color = '#FF5555'
  }
  Toastify({
    text: text,
    duration: 2000,
    position: "center",
    style: {
      background: "#333",
      boxShadow: "none",
      minWidth: "150px",
      textAlign: "center",
      fontFamily: "'Montserrat', sans-serif",
      fontWeight: "bold",
      fontSize: "17px",
      color: color,
      padding: "16px 30px",
    },
  }).showToast();
}

function showResult(id, type, color = undefined, icon = undefined) {
  let oldElement = document.getElementById(id + '-runResult');
  // Reset any timeout
  let element = oldElement.cloneNode(true);
  oldElement.parentNode.replaceChild(element, oldElement);
  if (type === 'success') {
    color = '#009c3f'
    icon = 'check'
  } else if (type === 'error') {
    color = '#FF5555'
    icon = 'times'
  }
  element.style.color = color;
  element.className = 'fas fa-' + icon;
  setTimeout(function () {
    element.style.color = '';
    element.className = '';
  }, 2000);
}

function resetResult(id) {
  let element = document.getElementById(id + '-runResult');
  element.style.color = '';
  element.className = '';
}

let audio = new Audio('./timer-alarm.mp3');

function reset() {
  clearInterval(runTimer);
  audio.pause();
  audio.currentTime = 0;
  timerState = 1;
  document.getElementById('pause-resume-timer').innerHTML = "Pause";
  document.getElementById('timer-time').innerHTML = "";
  document.getElementById('start-timer').disabled = false;
  document.getElementById('pause-resume-timer').disabled = true;
  document.getElementById('hours').value = "0";
  document.getElementById('minutes').value = "1";
  document.getElementById('seconds').value = "0";
  document.getElementById("timer").innerHTML = "0h 0m 0s";
  showAlert('Reset!', 'success');
  resetResult('timer');
}

let targettime, runTimer;

function startTimer() {
  audio.pause();
  audio.currentTime = 0;
  timerState = 1;
  let hours = parseInt(document.getElementById("hours").value);
  let minutes = parseInt(document.getElementById("minutes").value);
  let seconds = parseInt(document.getElementById("seconds").value);
  if (isNaN(hours) || isNaN(minutes) || isNaN(seconds)) {
    showAlert('Empty input!', 'error');
    showResult('timer', 'error');
  } else if (hours <= 0 && minutes <= 0 && seconds <= 0) {
    showAlert('Invalid input!', 'error');
    showResult('timer', 'error');
  } else {
    document.getElementById('start-timer').disabled = true;
    document.getElementById('pause-resume-timer').disabled = false;
    let timeuntil = ((hours * 3600) + (minutes * 60) + seconds) * 1000;

    let curtime = new Date().getTime();

    targettime = parseInt(String(curtime + timeuntil).slice(0, -3));

    let distance = targettime - curtime;
    runTimer = setInterval(timer, 500);
  }
}

let hoursuntil, minutesuntil, secondsuntil, targettimestring;

function timer() {
  let curtime = parseInt(String(new Date().getTime()).slice(0, -3));

  let distance = targettime - curtime;

  hoursuntil = Math.floor(distance / 3600);
  minutesuntil = Math.floor((distance - (hoursuntil * 3600)) / 60);
  secondsuntil = Math.floor(distance - (hoursuntil * 3600) - (minutesuntil * 60));

  document.getElementById("timer").innerHTML = `${hoursuntil}h ${minutesuntil}m ${secondsuntil}s`;

  if (distance <= 0) {
    document.getElementById("timer").innerHTML = "Ended!";
    audio.play();
    audio.loop = true;
    clearInterval(runTimer);
  }

  let targettime2 = new Date(targettime * 1000);

  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  let date = targettime2.getDate();
  let month = months[targettime2.getMonth()];
  let year = targettime2.getFullYear();
  let fullhours = targettime2.getHours();
  let hours = ((fullhours + 11) % 12 + 1);
  let minutes = targettime2.getMinutes();
  let sec = targettime2.getSeconds();

  if (minutes < 10) {
    minutes = "0" + minutes
  };
  if (sec < 10) {
    sec = "0" + sec
  };

  let timesuffix = fullhours >= 12 ? "PM" : "AM";

  document.getElementById('timer-time').innerHTML = month + " " + date + ", " + year + " " + hours + ":" + minutes + ":" + sec + " " + timesuffix;
}

let timerState = 1; // 1 = running, 2 = paused

function pauseResume() {
  if (timerState === 1) {
    timerState = 2;
    document.getElementById('pause-resume-timer').innerHTML = "Resume";
    clearInterval(runTimer);
  } else {
    timerState = 1;
    document.getElementById('pause-resume-timer').innerHTML = "Pause";

    let hours2 = parseInt(hoursuntil);
    let minutes2 = parseInt(minutesuntil);
    let seconds2 = parseInt(secondsuntil);

    let curtime = new Date().getTime();

    let timeuntil = ((hours2 * 3600) + (minutes2 * 60) + seconds2) * 1000;
    targettime = parseInt(String(curtime + timeuntil).slice(0, -3));
    runTimer = setInterval(timer, 500);
  }
}