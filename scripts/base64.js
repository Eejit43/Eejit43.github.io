window.onload = function () {
  document.getElementById('encode').addEventListener("click", encode);
  document.getElementById('decode').addEventListener("click", decode);
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
  resetResult('e');
  resetResult('d');
}

let copyMessageTimeout;

function copyText(toCopy, button) {
  const element = document.getElementById(toCopy);
  navigator.clipboard.writeText(element.value);
  document.getElementById(button).innerHTML = "Copied!";
  clearTimeout(copyMessageTimeout);
  copyMessageTimeout = setTimeout(function () {
    document.getElementById(button).innerHTML = "Copy";
  }, 2000);
  showAlert('Copied!', 'success')
}

function encode() {
  let stringToEncode = document.getElementById("stringToModify").value;
  if (stringToEncode.length === 0) {
    showAlert('Empty input!', 'error');
    showResult('e', 'error');
  } else {
    try {
      let decodedString = btoa(stringToEncode);
      document.getElementById("result").value = decodedString;
      showResult('e', 'success');
      document.getElementById('copy-result').disabled = false;
    } catch (err) {
      showAlert('Malformed input!', 'error');
      showResult('e', 'error');
    }
  }
}

function decode() {
  let stringToDecode = document.getElementById("stringToModify").value;
  if (stringToDecode.length === 0) {
    showAlert('Empty input!', 'error');
    showResult('d', 'error');
  } else {
    try {
      let encodedString = atob(stringToDecode);
      document.getElementById("result").value = encodedString;
      showResult('d', 'success');
      document.getElementById('copy-result').disabled = false;
    } catch (err) {
      showAlert("errormsg");
      showResult('d', 'error');
    }
  }
}