window.onload = function () {
  document.getElementById('run-dlr').addEventListener("click", runDlrRegex);
  document.getElementById('drl-clear').addEventListener("click", drlClear);
  document.getElementById('drl-copy-result').addEventListener("click", function () {
    copyText('drl-result', 'drl-copy-result')
  });
  document.getElementById('drl-copy-result-2').addEventListener("click", function () {
    copyText('drl-result-2', 'drl-copy-result-2')
  });
  document.getElementById('run-wr').addEventListener("click", runWrRegex);
  document.getElementById('wr-clear').addEventListener("click", wrClear);
  document.getElementById('wr-copy-result').addEventListener("click", function () {
    copyText('wr-result', 'wr-copy-result')
  });
  document.getElementById('wr-copy-result-2').addEventListener("click", function () {
    copyText('wr-result-2', 'wr-copy-result-2')
  });
  document.getElementById('wr-copy-result-3').addEventListener("click", function () {
    copyText('wr-result-3', 'wr-copy-result-3')
  });
  document.getElementById('run-neu').addEventListener("click", runNeuRegex);
  document.getElementById('neu-clear').addEventListener("click", neuClear);
  document.getElementById('neu-copy-result').addEventListener("click", function () {
    copyText('neu-result', 'neu-copy-result')
  });
  document.getElementById('neu-copy-result-2').addEventListener("click", function () {
    copyText('neu-result-2', 'neu-copy-result-2')
  });
  document.getElementById('run-rm').addEventListener("click", runRmRegex);
  document.getElementById('rm-clear').addEventListener("click", rmClearInput);
  document.getElementById('rm-clear-2').addEventListener("click", rmClearAll);
  document.getElementById('rm-switch').addEventListener("click", rmSwitch);
  document.getElementById('rm-copy-result').addEventListener("click", function () {
    copyText('rm-result', 'rm-copy-result')
  });
}

function copyText(toCopy, button) {
    let oldElement = document.getElementById(button);
    let newElement = oldElement.cloneNode(true);
    oldElement.parentNode.replaceChild(newElement, oldElement);
    const element = document.getElementById(toCopy);
    navigator.clipboard.writeText(element.value);
    newElement.innerHTML = "Copied!";
    setTimeout(function () {
        newElement.innerHTML = "Copy";
    }, 2000);
    showAlert('Copied!', 'success');

    newElement.addEventListener("click", function () {
        copyText(toCopy, button)
    });
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

// Duplicate Line Remover
function drlClear() {
  document.getElementById('drl-regexInput').value = "";
  document.getElementById('drl-result').value = "";
  document.getElementById('drl-copy-result').disabled = true;
  document.getElementById('drl-result-2').value = "";
  document.getElementById('drl-copy-result-2').disabled = true;
  showAlert('Cleared!', 'success')
  resetResult('drl');
  document.getElementById("drl-clear").innerHTML = "Cleared!";
  setTimeout(function () {
    document.getElementById("drl-clear").innerHTML = "Clear";
  }, 2000);
};

function runDlrRegex() {
  let input = document.getElementById("drl-regexInput").value;
  if (input.length == 0) {
    showAlert('Empty input!', 'error');
    showResult('drl', 'error');
  } else {
    let output = input.replace(/^(.*?)$\s+?^(?=.*^\1$)/gms, '');
    let output2 = input.replace(/^(?!\n)(.*?)$\s+?^(?=.*^\1$)/gms, '');
    showResult('drl', 'success');
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
  showAlert('Cleared!', 'success')
  resetResult('wr');
  document.getElementById("wr-clear").innerHTML = "Cleared!";
  setTimeout(function () {
    document.getElementById("wr-clear").innerHTML = "Clear";
  }, 2000);
};

function runWrRegex() {
  let input = document.getElementById("wr-regexInput").value;
  if (input.length == 0) {
    showAlert('Empty input!', 'error');
    showResult('wr', 'error');
  } else {
    let output = input.replace(/^[ \t]+|[ \t]+$/gms, '');
    let output2 = input.replace(/^[ \t\r\n]+|[ \t]+$/gms, '');
    let output3 = input.replace(/^[ \t\r\n]+|[ \t\r\n]+$/gms, '');
    showResult('wr', 'success');
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
  showAlert('Cleared!', 'success')
  resetResult('neu');
  document.getElementById("neu-clear").innerHTML = "Cleared!";
  setTimeout(function () {
    document.getElementById("neu-clear").innerHTML = "Clear";
  }, 2000);
};

function runNeuRegex() {
  let input = document.getElementById("neu-regexInput").value;
  if (input.length == 0) {
    showAlert('Empty input!', 'error');
    showResult('neu', 'error');
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
    showResult('neu', 'success');
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
  showAlert('Cleared!', 'success')
  resetResult('rm');
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
  showAlert('Cleared!', 'success')
  resetResult('rm');
  document.getElementById("rm-clear-2").innerHTML = "Cleared!";
  setTimeout(function () {
    document.getElementById("rm-clear-2").innerHTML = "Clear All";
  }, 2000);
};

function rmSwitch() {
  let output = document.getElementById("rm-result").value;
  if (output.length == 0) {
    showAlert('Nothing to move!', 'error');
    showResult('switch', 'error');
  } else {
    document.getElementById('rm-regexInput').value = output;
    document.getElementById('rm-result').value = "";
    document.getElementById('rm-copy-result').disabled = true;
    showAlert('Moved to input!', '#1c62d4');
    showResult('switch', 'custom', '#1c62d4', 'arrows-alt-v');
  }
};

function runRmRegex() {
  let input = document.getElementById("rm-regexInput").value;
  let regex = document.getElementById("rm-regex").value;
  let flags = document.getElementById("rm-flags").value;
  let isValid = true;
  try {
    new RegExp(regex, flags);
  } catch (e) {
    isValid = false;
  }
  if (input.length == 0 || regex.length == 0) {
    showAlert('Empty values(s)!', 'error');
    showResult('rm', 'error');
  } else if (isValid) {
    let finalregex = new RegExp(regex, flags);
    let replace = document.getElementById("rm-replace").value;
    replace = replace.replace(/\\a/g, '\a');
    replace = replace.replace(/\\b/g, '\b');
    replace = replace.replace(/\\c/g, '\c');
    replace = replace.replace(/\\e/g, '\e');
    replace = replace.replace(/\\f/g, '\f');
    replace = replace.replace(/\\n/g, '\n');
    replace = replace.replace(/\\o/g, '\o');
    replace = replace.replace(/\\r/g, '\r');
    replace = replace.replace(/\\t/g, '\t');
    replace = replace.replace(/\$(\d)/g, '$$$1');
    let output = input.replace(finalregex, replace);
    showResult('rm', 'success');
    document.getElementById('rm-result').value = output;
    document.getElementById('rm-copy-result').disabled = false;
  } else if (isValid === false) {
    showAlert('Invalid regex!', 'error');
    showResult('rm', 'error');
  }
}