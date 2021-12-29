window.onload = function () {
  document.getElementById('generate-number').addEventListener("click", generateNumber);
  document.getElementById('reset').addEventListener("click", reset);
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

function reset() {
  document.getElementById('min-number').value = "1";
  document.getElementById('max-number').value = "10";
  document.getElementById('output-number').innerHTML = "";
  clearTimeout(clearMessageTimeout);
  clearMessageTimeout = setTimeout(function () {
    document.getElementById('clear').innerHTML = 'Clear';
  }, 2000);
  showAlert('Cleared!', 'success')
  resetResult('generate');
}

function generateNumber() {
  let min = parseInt(document.getElementById("min-number").value);
  let max = parseInt(document.getElementById("max-number").value);
  if (min.length === 0 || max.length === 0) {
    showAlert('Empty input!', 'error');
    showResult('generate', 'error');
  } else if (min > max || min === max) {
    showAlert('The minimum must be less than the maximum!', 'error');
    showResult('generate', 'error');
  } else {
    let output = (Math.floor(Math.random() * (max - min + 1) + min)).toLocaleString();
    document.getElementById("output-number").innerHTML = output;
    showResult('generate', 'success');
  }
}