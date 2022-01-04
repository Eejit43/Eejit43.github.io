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