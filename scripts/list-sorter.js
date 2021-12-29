window.onload = function () {
  document.getElementById('alphabetize-normal').addEventListener("click", alphabetizeNormal);
  document.getElementById('alphabetize-reverse').addEventListener("click", alphabetizeReverse);
  document.getElementById('numerize').addEventListener("click", numerize);
  document.getElementById('randomize').addEventListener("click", randomize);
  document.getElementById('reverse').addEventListener("click", reverse);
  document.getElementById('clear').addEventListener("click", clearAll);
  document.getElementById('copy-result').addEventListener("click", function () {
    copyText('result', 'copy-result')
  });
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

function clearAll() {
  document.getElementById('stringToModify').value = "";
  document.getElementById('result').value = "";
  document.getElementById('separator').value = "\\n";
  document.getElementById('copy-result').disabled = true;
  showAlert('Cleared!', '#009c3f')
  document.getElementById("clear").innerHTML = "Cleared!";
  setTimeout(function () {
    document.getElementById("clear").innerHTML = "Clear";
  }, 2000);
  document.getElementById("n-runSuccess").className = "";
  document.getElementById("n-runError").className = "";
  document.getElementById("r-runSuccess").className = "";
  document.getElementById("r-runError").className = "";
  document.getElementById("rm-runSuccess").className = "";
  document.getElementById("rm-runError").className = "";
}

function copyText(toCopy, button) {
  const element = document.getElementById(toCopy);
  navigator.clipboard.writeText(element.value);
  document.getElementById(button).innerHTML = "Copied!";
  setTimeout(function () {
    document.getElementById(button).innerHTML = "Copy";
  }, 2000);
  showAlert('Copied!', '#009c3f')
}

function alphabetizeNormal() {
  let string = document.getElementById("stringToModify").value;
  let runError = document.getElementById("n-runError");
  let runSuccess = document.getElementById("n-runSuccess");
  if (string.length === 0) {
    showAlert('Empty input!', '#FF5555');
    runSuccess.className = "";
    runError.className = "fas fa-times";
    setTimeout(function () {
      runError.className = runError.className.replace("fas fa-times", "");
    }, 2000);
  } else {
    let separator = (document.getElementById("separator").value) ? document.getElementById("separator").value : '\n';
    separator = separator.replace('\\n', '\n');
    let result = string.split(separator);
    result = result.sort((a, b) => a.localeCompare(b)).join(separator);
    document.getElementById("result").value = result;
      runError.className = "";
      runSuccess.className = "fas fa-check";
      setTimeout(function () {
        runSuccess.className = runSuccess.className.replace("fas fa-check", "");
      }, 2000);
      document.getElementById('copy-result').disabled = false;
  }
}

function alphabetizeReverse() {
  let string = document.getElementById("stringToModify").value;
  let runError = document.getElementById("r-runError");
  let runSuccess = document.getElementById("r-runSuccess");
  if (string.length === 0) {
    showAlert('Empty input!', '#FF5555');
    runSuccess.className = "";
    runError.className = "fas fa-times";
    setTimeout(function () {
      runError.className = runError.className.replace("fas fa-times", "");
    }, 2000);
  } else {
    let separator = (document.getElementById("separator").value) ? document.getElementById("separator").value : '\n';
    separator = separator.replace('\\n', '\n');
    let result = string.split(separator);
    result = result.sort((a, b) => a.localeCompare(b)).reverse().join(separator);
    document.getElementById("result").value = result;
      runError.className = "";
      runSuccess.className = "fas fa-check";
      setTimeout(function () {
        runSuccess.className = runSuccess.className.replace("fas fa-check", "");
      }, 2000);
      document.getElementById('copy-result').disabled = false;
  }
}

function numerize() {
  let string = document.getElementById("stringToModify").value;
  let runError = document.getElementById("nm-runError");
  let runSuccess = document.getElementById("nm-runSuccess");
  if (string.length === 0) {
    showAlert('Empty input!', '#FF5555');
    runSuccess.className = "";
    runError.className = "fas fa-times";
    setTimeout(function () {
      runError.className = runError.className.replace("fas fa-times", "");
    }, 2000);
  } else {
    let separator = (document.getElementById("separator").value) ? document.getElementById("separator").value : '\n';
    separator = separator.replace('\\n', '\n');
    let result = string.split(separator);
    result = result.map((x) =>parseInt(x)).filter(Boolean).sort((a, b) => a - b).join(separator);
    document.getElementById("result").value = result;
      runError.className = "";
      runSuccess.className = "fas fa-check";
      setTimeout(function () {
        runSuccess.className = runSuccess.className.replace("fas fa-check", "");
      }, 2000);
      document.getElementById('copy-result').disabled = false;
  }
}

function shuffleArray(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
return(arr)
}

function randomize() {
  let string = document.getElementById("stringToModify").value;
  let runError = document.getElementById("rm-runError");
  let runSuccess = document.getElementById("rm-runSuccess");
  if (string.length === 0) {
    showAlert('Empty input!', '#FF5555');
    runSuccess.className = "";
    runError.className = "fas fa-times";
    setTimeout(function () {
      runError.className = runError.className.replace("fas fa-times", "");
    }, 2000);
  } else {
    let separator = (document.getElementById("separator").value) ? document.getElementById("separator").value : '\n';
    separator = separator.replace('\\n', '\n');
    let result = string.split(separator);
    result = shuffleArray(result).join(separator);
    document.getElementById("result").value = result;
      runError.className = "";
      runSuccess.className = "fas fa-check";
      setTimeout(function () {
        runSuccess.className = runSuccess.className.replace("fas fa-check", "");
      }, 2000);
      document.getElementById('copy-result').disabled = false;
  }
}

function reverse() {
  let string = document.getElementById("stringToModify").value;
  let runError = document.getElementById("rv-runError");
  let runSuccess = document.getElementById("rv-runSuccess");
  if (string.length === 0) {
    showAlert('Empty input!', '#FF5555');
    runSuccess.className = "";
    runError.className = "fas fa-times";
    setTimeout(function () {
      runError.className = runError.className.replace("fas fa-times", "");
    }, 2000);
  } else {
    let separator = (document.getElementById("separator").value) ? document.getElementById("separator").value : '\n';
    separator = separator.replace('\\n', '\n');
    let result = string.split(separator);
    result = result.reverse().join(separator);
    document.getElementById("result").value = result;
      runError.className = "";
      runSuccess.className = "fas fa-check";
      setTimeout(function () {
        runSuccess.className = runSuccess.className.replace("fas fa-check", "");
      }, 2000);
      document.getElementById('copy-result').disabled = false;
  }
}