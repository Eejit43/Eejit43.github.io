window.onload = function () {
  document.getElementById('alphabetize-normal').addEventListener("click", alphabetizeNormal);
  document.getElementById('numerize').addEventListener("click", numerize);
  document.getElementById('randomize').addEventListener("click", randomize);
  document.getElementById('reverse').addEventListener("click", reverse);
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
  document.getElementById('input').value = "";
  document.getElementById('result').value = "";
  document.getElementById('separator').value = "\\n";
  document.getElementById('copy-result').disabled = true;
  showAlert('Cleared!', 'success');
  document.getElementById('clear').innerHTML = 'Cleared!';
  clearTimeout(clearMessageTimeout);
  clearMessageTimeout = setTimeout(function () {
    document.getElementById('clear').innerHTML = 'Clear';
  }, 2000);
  resetResult('alphabetize');
  resetResult('numerize');
  resetResult('randomize');
  resetResult('reverse');
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

function alphabetizeNormal() {
  let string = document.getElementById("input").value;
  if (string.length === 0) {
    showAlert('Empty input!', 'error');
    showResult('alphabetize', 'error');
  } else {
    let separator = (document.getElementById("separator").value) ? document.getElementById("separator").value : '\n';
    separator = separator.replace('\\n', '\n');
    let result = string.split(separator);
    result = result.sort((a, b) => a.localeCompare(b)).join(separator);
    document.getElementById("result").value = result;
    showResult('alphabetize', 'success');
    document.getElementById('copy-result').disabled = false;
  }
}

function numerize() {
  let string = document.getElementById("input").value;
  if (string.length === 0) {
    showAlert('Empty input!', 'error');
    showResult('numerize', 'error');
  } else {
    let separator = (document.getElementById("separator").value) ? document.getElementById("separator").value : '\n';
    separator = separator.replace('\\n', '\n');
    let result = string.split(separator);
    result = result.map((x) => parseInt(x)).filter(x => x === 0 || Boolean(x)).sort((a, b) => a - b).join(separator);
    document.getElementById("result").value = result;
    showResult('numerize', 'success');
    document.getElementById('copy-result').disabled = false;
  }
}

function shuffleArray(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return (arr)
}

function randomize() {
  let string = document.getElementById("input").value;
  if (string.length === 0) {
    showAlert('Empty input!', 'error');
    showResult('randomize', 'error');
  } else {
    let separator = (document.getElementById("separator").value) ? document.getElementById("separator").value : '\n';
    separator = separator.replace('\\n', '\n');
    let result = string.split(separator);
    result = shuffleArray(result).join(separator);
    document.getElementById("result").value = result;
    showResult('randomize', 'success');
    document.getElementById('copy-result').disabled = false;
  }
}

function reverse() {
  let string = document.getElementById("input").value;
  if (string.length === 0) {
    showAlert('Empty input!', 'error');
    showResult('reverse', 'error');
  } else {
    let separator = (document.getElementById("separator").value) ? document.getElementById("separator").value : '\n';
    separator = separatowr.replace('\\n', '\n');
    let result = string.split(separator);
    result = result.reverse().join(separator);
    document.getElementById("result").value = result;
    showResult('reverse', 'success');
    document.getElementById('copy-result').disabled = false;
  }
}