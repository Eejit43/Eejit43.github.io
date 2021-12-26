let number = 0;
let key = 'Space';

window.onload = function () {
  document.getElementById('activationButton').addEventListener("change", updateKey);
  document.getElementById('reset').addEventListener("click", function () {
    showAlert('resetmsg');
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

function showAlert(id) {
  let element = document.getElementById(id);
  element.className = "alert show";
  setTimeout(function () {
    element.className = element.className.replace("alert show", "alert");
  }, 2000);
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