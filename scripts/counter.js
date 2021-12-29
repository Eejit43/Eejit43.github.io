let number = 0;
let key = 'Space';

window.onload = function () {
  document.getElementById('activationButton').addEventListener("change", updateKey);
  document.getElementById('reset').addEventListener("click", function () {
    showAlert('Reset!', 'success')
    number = 0;
    document.getElementById('number').innerHTML = 0;
    document.getElementById('activationButton').value = '1';
    key = 'Space';
    document.getElementById('reset').blur();
  });
  document.addEventListener('keyup', (event) => {
    if (event.code === key) {
      number++;
      document.getElementById('number').innerHTML = number;
    }
  }, false);
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

function updateKey() {
  let selection = document.getElementById('activationButton').value;
  if (selection === '1') {
    selection = 'Space';
  } else if (selection === '2') {
    selection = 'Enter';
  } else if (selection === '3') {
    selection = 'KeyC';
  }
  key = selection;
}