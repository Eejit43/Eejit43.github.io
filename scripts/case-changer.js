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

let clearMessageTimeout;

function clearAll() {
  document.getElementById('stringToModify').value = "";
  document.getElementById('result').value = "";
  document.getElementById('copy-result').disabled = true;
  showAlert('Cleared!', 'success')
  document.getElementById('clear').innerHTML = 'Cleared!';
  clearTimeout(clearMessageTimeout);
  clearMessageTimeout = setTimeout(function () {
    document.getElementById('clear').innerHTML = 'Clear';
  }, 2000);
  resetResult('u');
  resetResult('l');
  resetResult('t');
  resetResult('s');
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

function toUpper() {
  let string = document.getElementById("stringToModify").value;
  if (string.length === 0) {
    showAlert('Empty input!', 'error');
    showResult('u', 'error');
  } else {
    let result = string.toUpperCase();
    document.getElementById("result").value = result;
    showResult('u', 'success');
    document.getElementById('copy-result').disabled = false;
  }
}

function toLower() {
  let string = document.getElementById("stringToModify").value;
  if (string.length === 0) {
    showAlert('Empty input!', 'error');
    showResult('l', 'error');
  } else {
    let result = string.toLowerCase();
    document.getElementById("result").value = result;
    showResult('l', 'success');
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
  if (string.length === 0) {
    showAlert('Empty input!', 'error');
    showResult('t', 'error');
  } else {
    let result = titleCase(string);
    document.getElementById("result").value = result;
    showResult('t', 'success');
    document.getElementById('copy-result').disabled = false;
  }
}

function toSentence() {
  let string = document.getElementById("stringToModify").value;
  if (string.length === 0) {
    showAlert('Empty input!', 'error');
    showResult('s', 'error');
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
    showResult('s', 'success');
    document.getElementById('copy-result').disabled = false;
  }
}