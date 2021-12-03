function showAlert(id) {
  var element = document.getElementById(id);
  element.className = "alert show";
  setTimeout(function () {
    element.className = element.className.replace("alert show", "alert");
  }, 2000);
}

function toDog() {
  let humanAge = document.getElementById('humanAge').value;
  let runError = document.getElementById("td-runError");
  let runSuccess = document.getElementById("td-runSuccess");
  let thrunError = document.getElementById("th-runError");
  let thrunSuccess = document.getElementById("th-runSuccess");
  if (humanAge.length === 0) {
    showAlert("noinput");
    runSuccess.className = "";
    thrunSuccess.className = "";
    thrunError.className = "";
    runError.className = "fas fa-times";
    setTimeout(function () {
      runError.className = runError.className.replace("fas fa-times", "");
    }, 2000);
  } else if (humanAge >= 1) {
    let dogAge = Math.round(Math.exp((humanAge - 31) / 16));
    let output = `<hr>${humanAge} human years is about ${dogAge} years in dog years.`;

    document.getElementById('result').innerHTML = output;
    document.getElementById('dogAge').value = '';
    runError.className = "";
    runSuccess.className = "fas fa-check";
    setTimeout(function () {
      runSuccess.className = runSuccess.className.replace("fas fa-check", "");
    }, 2000);
  } else {
    showAlert("invalidinput");
    runSuccess.className = "";
    thrunSuccess.className = "";
    thrunError.className = "";
    runError.className = "fas fa-times";
    setTimeout(function () {
      runError.className = runError.className.replace("fas fa-times", "");
    }, 2000);
  }
}

function toHuman() {
  let dogAge = document.getElementById('dogAge').value;
  let runError = document.getElementById("th-runError");
  let runSuccess = document.getElementById("th-runSuccess");
  let tdrunError = document.getElementById("td-runError");
  let tdrunSuccess = document.getElementById("td-runSuccess");
  if (dogAge.length === 0) {
    showAlert("noinput");
    runSuccess.className = "";
    tdrunSuccess.className = "";
    tdrunError.className = "";
    runError.className = "fas fa-times";
    setTimeout(function () {
      runError.className = runError.className.replace("fas fa-times", "");
    }, 2000);
  } else if (dogAge >= 1) {
    let humanAge = Math.round(16 * Math.log(dogAge) + 31);
    let output = `<hr>${dogAge} dog years is about ${humanAge} years in human years.`;

    document.getElementById('result').innerHTML = output;
    document.getElementById('humanAge').value = '';
    runError.className = "";
    runSuccess.className = "fas fa-check";
    setTimeout(function () {
      runSuccess.className = runSuccess.className.replace("fas fa-check", "");
    }, 2000);
  } else {
    showAlert("invalidinput");
    runSuccess.className = "";
    tdrunSuccess.className = "";
    tdrunError.className = "";
    runError.className = "fas fa-times";
    setTimeout(function () {
      runError.className = runError.className.replace("fas fa-times", "");
    }, 2000);
  }