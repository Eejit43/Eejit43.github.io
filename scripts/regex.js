/* Portions modified from https://skyblock-wiki.github.io/tools/head-render/js/index.js, https://www.w3schools.com/howto/howto_js_snackbar.asp */

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

// Duplicate Line Remover
function drlClear() {
  document.getElementById('drl-regexInput').value = "";
  document.getElementById('drl-result').value = "";
  document.getElementById('drl-copy-result').disabled = true;
  document.getElementById('drl-result-2').value = "";
  document.getElementById('drl-copy-result-2').disabled = true;
  showAlert("clearmsg");
  document.getElementById("drl-runSuccess").className = "";
  document.getElementById("drl-runError").className = "";
  document.getElementById("drl-clear").innerHTML = "Cleared!";
  setTimeout(function () {
    document.getElementById("drl-clear").innerHTML = "Clear";
  }, 2000);
};

function runDlrRegex() {
  let input = document.getElementById("drl-regexInput").value;
  let runError = document.getElementById("drl-runError");
  let runSuccess = document.getElementById("drl-runSuccess");
  if (input.length == 0) {
    showAlert("emptymsg");
    runSuccess.className = "";
    runError.className = "fas fa-times";
    setTimeout(function () {
      runError.className = runError.className.replace("fas fa-times", "");
    }, 2000);
  } else {
    let output = input.replace(/^(.*?)$\s+?^(?=.*^\1$)/gms, '');
    let output2 = input.replace(/^(?!\n)(.*?)$\s+?^(?=.*^\1$)/gms, '');
    runError.className = "";
    runSuccess.className = "fas fa-check";
    setTimeout(function () {
      runSuccess.className = runSuccess.className.replace("fas fa-check", "");
    }, 2000);
    document.getElementById('drl-result').value = output;
    document.getElementById('drl-copy-result').disabled = false;
    document.getElementById('drl-result-2').value = output2;
    document.getElementById('drl-copy-result-2').disabled = false;
  }
}

// Whitespace Remover
function wrClear() {
  document.getElementById('wr-regexInput').value = "";
  document.getElementById('wr-result').value = "";
  document.getElementById('wr-copy-result').disabled = true;
  document.getElementById('wr-result-2').value = "";
  document.getElementById('wr-copy-result-2').disabled = true;
  document.getElementById('wr-result-3').value = "";
  document.getElementById('wr-copy-result-3').disabled = true;
  showAlert("clearmsg");
  document.getElementById("wr-runSuccess").className = "";
  document.getElementById("wr-runError").className = "";
  document.getElementById("wr-clear").innerHTML = "Cleared!";
  setTimeout(function () {
    document.getElementById("wr-clear").innerHTML = "Clear";
  }, 2000);
};

function runWrRegex() {
  let input = document.getElementById("wr-regexInput").value;
  let runError = document.getElementById("wr-runError");
  let runSuccess = document.getElementById("wr-runSuccess");
  if (input.length == 0) {
    showAlert("emptymsg");
    runSuccess.className = "";
    runError.className = "fas fa-times";
    setTimeout(function () {
      runError.className = runError.className.replace("fas fa-times", "");
    }, 2000);
  } else {
    let output = input.replace(/^[ \t]+|[ \t]+$/gms, '');
    let output2 = input.replace(/^[ \t\r\n]+|[ \t]+$/gms, '');
    let output3 = input.replace(/^[ \t\r\n]+|[ \t\r\n]+$/gms, '');
    runError.className = "";
    runSuccess.className = "fas fa-check";
    setTimeout(function () {
      runSuccess.className = runSuccess.className.replace("fas fa-check", "");
    }, 2000);
    document.getElementById('wr-result').value = output;
    document.getElementById('wr-copy-result').disabled = false;
    document.getElementById('wr-result-2').value = output2;
    document.getElementById('wr-copy-result-2').disabled = false;
    document.getElementById('wr-result-3').value = output3;
    document.getElementById('wr-copy-result-3').disabled = false;
  }
}

// NEU Format Changer
function neuClear() {
  document.getElementById('neu-regexInput').value = "";
  document.getElementById('neu-result').value = "";
  document.getElementById('neu-copy-result').disabled = true;
  document.getElementById('neu-result-2').value = "";
  document.getElementById('neu-copy-result-2').disabled = true;
  showAlert("clearmsg");
  document.getElementById("neu-runSuccess").className = "";
  document.getElementById("neu-runError").className = "";
  document.getElementById("neu-clear").innerHTML = "Cleared!";
  setTimeout(function () {
    document.getElementById("neu-clear").innerHTML = "Clear";
  }, 2000);
};

function runNeuRegex() {
  let input = document.getElementById("neu-regexInput").value;
  let runError = document.getElementById("neu-runError");
  let runSuccess = document.getElementById("neu-runSuccess");
  if (input.length == 0) {
    showAlert("emptymsg");
    runSuccess.className = "";
    runError.className = "fas fa-times";
    setTimeout(function () {
      runError.className = runError.className.replace("fas fa-times", "");
    }, 2000);
  } else {
    let output = input.replace(/\\"/gmi, 'Ɣ'); //filler character
    output = output.replace(/\\u0027/gmi, '\'');
    output = output.replace(/    "|",?/gmi, '');
    output = output.replace(/Ɣ/gmi, '"');
    output = output.replace(/§/gmi, '&');
    output = output.replace(/(&[ol].*?)(&[a-f1-9]|\n)/gmis, '$1&r$2');
    output = output.replace(/\n&r/gmi, '&r\n');
    output = output.replace(/&[a-f1-9]&([a-f1-9])/gmi, '&$1');
    output = output.replace(/\n &8\[/gmi, '\n &8['); //em space
    let output2 = output.replace(/\//gmi, '\\\\/');
    output2 = output2.replace(/\\(?!\/|\\\/)/gmi, '\\\\\\\\');
    output2 = output2.replace(/\n/gmi, '/');
    output2 = output2.replace(/"/gmi, '\\"');
    output2 = output2.replace(/\'/gmi, '\\\'');
    runError.className = "";
    runSuccess.className = "fas fa-check";
    setTimeout(function () {
      runSuccess.className = runSuccess.className.replace("fas fa-check", "");
    }, 2000);
    document.getElementById('neu-result').value = output;
    document.getElementById('neu-copy-result').disabled = false;
    document.getElementById('neu-result-2').value = output2;
    document.getElementById('neu-copy-result-2').disabled = false;
  }
}

// Regex Maker
function rmClearInput() {
  document.getElementById('rm-regexInput').value = "";
  document.getElementById('rm-result').value = "";
  document.getElementById('rm-copy-result').disabled = true;
  showAlert("clearmsg");
  document.getElementById("rm-runSuccess").className = "";
  document.getElementById("rm-runError").className = "";
  document.getElementById("rm-clear").innerHTML = "Cleared!";
  setTimeout(function () {
    document.getElementById("rm-clear").innerHTML = "Clear Input";
  }, 2000);
};

function rmClearAll() {
  document.getElementById('rm-regexInput').value = "";
  document.getElementById('rm-result').value = "";
  document.getElementById('rm-copy-result').disabled = true;
  document.getElementById('rm-regex').value = "";
  document.getElementById('rm-flags').value = "g";
  document.getElementById('rm-replace').value = "";
  showAlert("clearmsg");
  document.getElementById("rm-runSuccess").className = "";
  document.getElementById("rm-runError").className = "";
  document.getElementById("rm-clear-2").innerHTML = "Cleared!";
  setTimeout(function () {
    document.getElementById("rm-clear-2").innerHTML = "Clear All";
  }, 2000);
};

function rmSwitch() {
  let output = document.getElementById("rm-result").value;
  if (output.length == 0) {
    document.getElementById("rm-switch").innerHTML = "Move output to input <i class='' style='color:#FF5555;' id='rm-moveError'></i>";
    showAlert("nooutputmsg");
    let moveError = document.getElementById("rm-moveError");
    moveError.className = "fas fa-times";
    setTimeout(function () {
      moveError.className = moveError.className.replace("fas fa-times", "");
    }, 2000);
  } else {
    document.getElementById('rm-regexInput').value = output;
    document.getElementById('rm-result').value = "";
    document.getElementById('rm-copy-result').disabled = true;
    showAlert("switchmsg");
    document.getElementById("rm-switch").innerHTML = "Moved! <i class='fas fa-arrows-alt-v' style='color:#1c62d4;' id='rm-switchOutput'></i>";
    setTimeout(function () {
      document.getElementById("rm-switch").innerHTML = "Move output to input <i class='' style='color:#FF5555;' id='rm-moveError'></i>";
    }, 2000);
  }
};

function runRmRegex() {
  let input = document.getElementById("rm-regexInput").value;
  let runError = document.getElementById("rm-runError");
  let runSuccess = document.getElementById("rm-runSuccess");
  let regex = document.getElementById("rm-regex").value;
  let flags = document.getElementById("rm-flags").value;
  let isValid = true;
  try {
    new RegExp(regex, flags);
  } catch (e) {
    isValid = false;
  }
  if (input.length == 0 || regex.length == 0) {
    showAlert("emptymsg-2");
    runSuccess.className = "";
    runError.className = "fas fa-times";
    setTimeout(function () {
      runError.className = runError.className.replace("fas fa-times", "");
    }, 2000);
  } else if (isValid) {
    let finalregex = new RegExp(regex, flags);
    let replace = document.getElementById("rm-replace").value;
    let output = input.replace(finalregex, replace);
    runError.className = "";
    runSuccess.className = "fas fa-check";
    setTimeout(function () {
      runSuccess.className = runSuccess.className.replace("fas fa-check", "");
    }, 2000);
    document.getElementById('rm-result').value = output;
    document.getElementById('rm-copy-result').disabled = false;
  } else if (isValid === false) {
    showAlert("notvalidregex");
    runSuccess.className = "";
    runError.className = "fas fa-times";
    setTimeout(function () {
      runError.className = runError.className.replace("fas fa-times", "");
    }, 2000);
  }
}