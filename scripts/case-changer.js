window.onload=function () {
document.getElementById('toupper').addEventListener("click", toUpper);
document.getElementById('tolower').addEventListener("click", toLower);
document.getElementById('totitle').addEventListener("click", toTitle);
document.getElementById('tosentence').addEventListener("click", toSentence);
document.getElementById('clear').addEventListener("click", clearAll);
document.getElementById('copy-result').addEventListener("click", function () {copyText('result', 'copy-result')});
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
  document.getElementById('copy-result').disabled = true;
  showAlert("clearmsg");
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
  showAlert("copymsg");
}

function toUpper() {
  let string = document.getElementById("stringToModify").value;
  let runError = document.getElementById("u-runError");
  let runSuccess = document.getElementById("u-runSuccess");
  if (string.length === 0) {
    showAlert("emptymsg");
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
    showAlert("emptymsg");
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
  return str.toLowerCase().split(' ').map(function(word) {
  if (word != 'a' && word != 'an' && word != 'the' && word != 'and' && word != 'as' && word != 'at' && word != 'but' && word != 'by' && word != 'for' && word != 'from' && word != 'if' && word != 'in' && word != 'into' && word != 'like' && word != 'near' && word != 'nor' && word != 'of' && word != 'off' && word != 'on' && word != 'once' && word != 'onto' && word != 'or' && word != 'over' && word != 'past' && word != 'so' && word != 'than' && word != 'that' && word != 'till' && word != 'to' && word != 'up' && word != 'upon' && word != 'with' && word != 'when' && word != 'yet') {
    return word.replace(word[0], word[0].toUpperCase());
  } else {
  return word
  }
  }).join(' ');
}

function toTitle() {
  let string = document.getElementById("stringToModify").value;
  let runError = document.getElementById("t-runError");
  let runSuccess = document.getElementById("t-runSuccess");
  if (string.length === 0) {
    showAlert("emptymsg");
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

function sentenceCase(str) {
  return str.toLowerCase().split(' ').map(function(word) {
  if (word != 'a' && word != 'an' && word != 'the' && word != 'and' && word != 'as' && word != 'at' && word != 'but' && word != 'by' && word != 'for' && word != 'from' && word != 'if' && word != 'in' && word != 'into' && word != 'like' && word != 'near' && word != 'nor' && word != 'of' && word != 'off' && word != 'on' && word != 'once' && word != 'onto' && word != 'or' && word != 'over' && word != 'past' && word != 'so' && word != 'than' && word != 'that' && word != 'till' && word != 'to' && word != 'up' && word != 'upon' && word != 'with' && word != 'when' && word != 'yet') {
    return word.replace(word[0], word[0].toUpperCase());
  } else {
  return word
  }
  }).join(' ');
}

function toSentence() {
  let string = document.getElementById("stringToModify").value;
  let runError = document.getElementById("s-runError");
  let runSuccess = document.getElementById("s-runSuccess");
  if (string.length === 0) {
    showAlert("emptymsg");
    runSuccess.className = "";
    runError.className = "fas fa-times";
    setTimeout(function () {
      runError.className = runError.className.replace("fas fa-times", "");
    }, 2000);
  } else {
    let result = string.toLowerCase().replace(/(^\s*\w|[\.\!\?]\s*\w)/g, function(c){return c.toUpperCase()});
    result = result.replace(/ i(\.|\!|\?| |\n|$)/gmi, ' I$1');
    result = result.replace(/ i'm(\.|\!|\?| |\n|$)/gmi, ' I\'m$1');
    result = result.replace(/ i'd(\.|\!|\?| |\n|$)/gmi, ' I\'d$1');
    result = result.replace(/ i'll(\.|\!|\?| |\n|$)/gmi, ' I\'ll$1');
    result = result.replace(/ i've(\.|\!|\?| |\n|$)/gmi, ' I\'ve$1');
      document.getElementById("result").value = result;
      runError.className = "";
      runSuccess.className = "fas fa-check";
      setTimeout(function () {
        runSuccess.className = runSuccess.className.replace("fas fa-check", "");
      }, 2000);
      document.getElementById('copy-result').disabled = false;
  }
}