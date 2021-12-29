document.getElementById('toDog').addEventListener("click", toDog);
document.getElementById('toHuman').addEventListener("click", toHuman);

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

function toDog() {
  let humanAge = document.getElementById('humanAge').value;
  if (humanAge.length === 0) {
    showAlert('No input given!', '#FF5555');
    showResult('td', 'error');
  } else if (humanAge >= 1) {
    let dogAge = Math.round(Math.exp((humanAge - 31) / 16));
    let output = `<hr>${humanAge} human years is about ${dogAge} years in dog years.`;
    document.getElementById('result').innerHTML = output;
    document.getElementById('dogAge').value = '';
    showResult('td', 'success');
  } else {
    showAlert('Input must be 1 or greater!', '#FF5555');
    showResult('td', 'error');
  }
}

function toHuman() {
  let dogAge = document.getElementById('dogAge').value;
  if (dogAge.length === 0) {
    showAlert('No input given!', '#FF5555');
    showResult('th', 'error');
  } else if (dogAge >= 1) {
    let humanAge = Math.round(16 * Math.log(dogAge) + 31);
    let output = `<hr>${dogAge} dog years is about ${humanAge} years in human years.`;
    document.getElementById('result').innerHTML = output;
    document.getElementById('humanAge').value = '';
    showResult('th', 'success');
  } else {
    showAlert('Input must be 1 or greater!', '#FF5555');
    showResult('th', 'error');
  }
}