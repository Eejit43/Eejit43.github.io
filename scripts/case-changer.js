window.onload = function () {
  document.getElementById('toupper').addEventListener("click", toUpper);
  document.getElementById('tolower').addEventListener("click", toLower);
  document.getElementById('totitle').addEventListener("click", toTitle);
  document.getElementById('tosentence').addEventListener("click", toSentence);
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
  document.getElementById('copy-result').disabled = true;
  showAlert('Cleared!', '#009c3f')
  document.getElementById("clear").innerHTML = "Cleared!";
  setTimeout(function () {
    document.getElementById("clear").innerHTML = "Clear";
  }, 2000);
  document.getElementById("u-runSuccess").className = "";
  document.getElementById("u-runError").className = "";
  document.getElementById("l-runSuccess").className = "";
  document.getElementById("l-runError").className = "";
  document.getElementById("t-runSuccess").className = "";
  document.getElementById("t-runError").className = "";
  document.getElementById("s-runSuccess").className = "";
  document.getElementById("s-runError").className = "";
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

function toUpper() {
  let string = document.getElementById("stringToModify").value;
  let runError = document.getElementById("u-runError");
  let runSuccess = document.getElementById("u-runSuccess");
  if (string.length === 0) {
    showAlert('Empty input!', '#FF5555');
    runSuccess.className = "";
    runError.className = "fas fa-times";
    setTimeout(function () {
      runError.className = runError.className.replace("fas fa-times", "");
    }, 2000);
  } else {
    let result = string.toUpperCase();
    document.getElementById("result").value = result;
    runError.className = "";
    runSuccess.className = "fas fa-check";
    setTimeout(function () {
      runSuccess.className = runSuccess.className.replace("fas fa-check", "");
    }, 2000);
    document.getElementById('copy-result').disabled = false;
  }
}

function toLower() {
  let string = document.getElementById("stringToModify").value;
  let runError = document.getElementById("l-runError");
  let runSuccess = document.getElementById("l-runSuccess");
  if (string.length === 0) {
    showAlert('Empty input!', '#FF5555');
    runSuccess.className = "";
    runError.className = "fas fa-times";
    setTimeout(function () {
      runError.className = runError.className.replace("fas fa-times", "");
    }, 2000);
  } else {
    let result = string.toLowerCase();
    document.getElementById("result").value = result;
    runError.className = "";
    runSuccess.className = "fas fa-check";
    setTimeout(function () {
      runSuccess.className = runSuccess.className.replace("fas fa-check", "");
    }, 2000);
    document.getElementById('copy-result').disabled = false;
  }
}

function titleCase(str) {
  return str.toLowerCase().split(' ').map(function (word) {
    if (word != 'a' && word != 'an' && word != 'the' && word != 'and' && word != 'as' && word != 'at' && word != 'but' && word != 'by' && word != 'for' && word != 'from' && word != 'if' && word != 'in' && word != 'into' && word != 'like' && word != 'near' && word != 'nor' && word != 'of' && word != 'off' && word != 'on' && word != 'once' && word != 'onto' && word != 'or' && word != 'over' && word != 'past' && word != 'so' && word != 'than' && word != 'that' && word != 'till' && word != 'to' && word != 'up' && word != 'upon' && word != 'with' && word != 'when' && word != 'yet') {
      return word.replace(word[0], word[0].toUpperCase());
    } else {
      return word
    }
  }).join(' ').split('\n').map(function (word) {
    if (word != 'a' && word != 'an' && word != 'the' && word != 'and' && word != 'as' && word != 'at' && word != 'but' && word != 'by' && word != 'for' && word != 'from' && word != 'if' && word != 'in' && word != 'into' && word != 'like' && word != 'near' && word != 'nor' && word != 'of' && word != 'off' && word != 'on' && word != 'once' && word != 'onto' && word != 'or' && word != 'over' && word != 'past' && word != 'so' && word != 'than' && word != 'that' && word != 'till' && word != 'to' && word != 'up' && word != 'upon' && word != 'with' && word != 'when' && word != 'yet') {
      return word.replace(word[0], word[0].toUpperCase());
    } else {
      return word
    }
  }).join('\n')
}

function toTitle() {
  let string = document.getElementById("stringToModify").value;
  let runError = document.getElementById("t-runError");
  let runSuccess = document.getElementById("t-runSuccess");
  if (string.length === 0) {
    showAlert('Empty input!', '#FF5555');
    runSuccess.className = "";
    runError.className = "fas fa-times";
    setTimeout(function () {
      runError.className = runError.className.replace("fas fa-times", "");
    }, 2000);
  } else {
    let result = titleCase(string);
    document.getElementById("result").value = result;
    runError.className = "";
    runSuccess.className = "fas fa-check";
    setTimeout(function () {
      runSuccess.className = runSuccess.className.replace("fas fa-check", "");
    }, 2000);
    document.getElementById('copy-result').disabled = false;
  }
}

function toSentence() {
  let string = document.getElementById("stringToModify").value;
  let runError = document.getElementById("s-runError");
  let runSuccess = document.getElementById("s-runSuccess");
  if (string.length === 0) {
    showAlert('Empty input!', '#FF5555');
    runSuccess.className = "";
    runError.className = "fas fa-times";
    setTimeout(function () {
      runError.className = runError.className.replace("fas fa-times", "");
    }, 2000);
  } else {
    let result = string.toLowerCase().replace(/(^\s*\w|[\.\!\?]\s*\w)/gm, function (c) {
      return c.toUpperCase()
    });
    result = result.replace(/(\s)i(\.|\!|\?|\s|\n|$)/gmi, '$1I$2');
    result = result.replace(/(\s)i'm(\.|\!|\?|\s|\n|$)/gmi, '$1I\'m$2');
    result = result.replace(/(\s)i'd(\.|\!|\?|\s|\n|$)/gmi, '$1I\'d$2');
    result = result.replace(/(\s)i'll(\.|\!|\?|\s|\n|$)/gmi, '$1I\'ll$2');
    result = result.replace(/(\s)i've(\.|\!|\?|\s|\n|$)/gmi, '$1I\'ve$2');
    document.getElementById("result").value = result;
    runError.className = "";
    runSuccess.className = "fas fa-check";
    setTimeout(function () {
      runSuccess.className = runSuccess.className.replace("fas fa-check", "");
    }, 2000);
    document.getElementById('copy-result').disabled = false;
  }
}