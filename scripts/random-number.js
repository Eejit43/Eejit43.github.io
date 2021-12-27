window.onload = function () {
  document.getElementById('generate-number').addEventListener("click", generateNumber);
  document.getElementById('reset').addEventListener("click", reset);
}

function showAlert(text, color) {
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

function reset() {
  document.getElementById('min-number').value = "1";
  document.getElementById('max-number').value = "10";
  document.getElementById('output-number').innerHTML = "";
  document.getElementById("clear").innerHTML = "Cleared!";
  setTimeout(function () {
    document.getElementById("clear").innerHTML = "Clear";
  }, 2000);
  showAlert('Cleared!', '#009c3f')
  document.getElementById("runError").className = "";
  document.getElementById("runSuccess").className = "";
}

function generateNumber() {
  let min = parseInt(document.getElementById("min-number").value);
  let max = parseInt(document.getElementById("max-number").value);
  let runError = document.getElementById("runError");
  let runSuccess = document.getElementById("runSuccess");
  if (min.length === 0 || max.length === 0) {
    showAlert('Empty input!', '#FF5555');
    runError.className = "fas fa-times";
    setTimeout(function () {
      runError.className = runError.className.replace("fas fa-times", "");
    }, 2000);
  } else if (min > max || min === max) {
    showAlert('The minimum must be less than the maximum!', '#FF5555');
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