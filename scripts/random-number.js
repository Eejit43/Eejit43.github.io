window.onload = function () {
  document.getElementById('generate-number').addEventListener("click", generateNumber);
  document.getElementById('clear').addEventListener("click", clearAll);
}

function showAlert(id) {
  let element = document.getElementById(id);
  element.className = "alert show";
  setTimeout(function () {
    element.className = element.className.replace("alert show", "alert");
  }, 2000);
}

function clearAll() {
  document.getElementById('min-number').value = "1";
  document.getElementById('max-number').value = "10";
  document.getElementById('output-number').innerHTML = "";
  document.getElementById("clear").innerHTML = "Cleared!";
  setTimeout(function () {
    document.getElementById("clear").innerHTML = "Clear";
  }, 2000);
  showAlert("clearmsg");
  document.getElementById("runError").className = "";
  document.getElementById("runSuccess").className = "";
}

function generateNumber() {
  let min = parseInt(document.getElementById("min-number").value);
  let max = parseInt(document.getElementById("max-number").value);
  let runError = document.getElementById("runError");
  let runSuccess = document.getElementById("runSuccess");
  if (min.length === 0 || max.length === 0) {
    showAlert("emptymsg");
    runError.className = "fas fa-times";
    setTimeout(function () {
      runError.className = runError.className.replace("fas fa-times", "");
    }, 2000);
  } else if (min > max || min === max) {
    showAlert("notvalid");
    runError.className = "fas fa-times";
    setTimeout(function () {
      runError.className = runError.className.replace("fas fa-times", "");
    }, 2000);
  } else {
    let output = (Math.floor(Math.random() * (max - min + 1) + min)).toLocaleString();
    document.getElementById("output-number").innerHTML = output;
    runSuccess.className = "fas fa-check";
    setTimeout(function () {
      runSuccess.className = runError.className.replace("fas fa-check", "");
    }, 2000);
  }
}