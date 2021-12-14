window.onload = function () {
  document.getElementById('alphabetize-normal').addEventListener("click", alphabetizeNormal);
  document.getElementById('alphabetize-reverse').addEventListener("click", alphabetizeReverse);
  document.getElementById('randomize').addEventListener("click", randomize);
  document.getElementById('clear').addEventListener("click", clearAll);
  document.getElementById('copy-result').addEventListener("click", function () {
    copyText('result', 'copy-result')
  });
}

function showAlert(id) {
  let element = document.getElementById(id);
  element.className = "alert show";
  setTimeout(function () {
    element.className = element.className.replace("alert show", "alert");
  }, 2000);
}

function clearAll() {
  document.getElementById('stringToModify').value = "";
  document.getElementById('result').value = "";
  document.getElementById('separator').value = "\\n";
  document.getElementById('copy-result').disabled = true;
  showAlert("clearmsg");
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
  showAlert("copymsg");
}

function alphabetizeNormal() {
  let string = document.getElementById("stringToModify").value;
  let runError = document.getElementById("n-runError");
  let runSuccess = document.getElementById("n-runSuccess");
  if (string.length === 0) {
    showAlert("emptymsg");
    runSuccess.className = "";
    runError.className = "fas fa-times";
    setTimeout(function () {
      runError.className = runError.className.replace("fas fa-times", "");
    }, 2000);
  } else {
    let separator = document.getElementById("separator").value;
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
    showAlert("emptymsg");
    runSuccess.className = "";
    runError.className = "fas fa-times";
    setTimeout(function () {
      runError.className = runError.className.replace("fas fa-times", "");
    }, 2000);
  } else {
    let separator = document.getElementById("separator").value;
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
    showAlert("emptymsg");
    runSuccess.className = "";
    runError.className = "fas fa-times";
    setTimeout(function () {
      runError.className = runError.className.replace("fas fa-times", "");
    }, 2000);
  } else {
    let separator = document.getElementById("separator").value;
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