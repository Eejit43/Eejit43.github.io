let number = 0;
let key = 'Space';

window.onload = function () {
  document.getElementById('activationButton').addEventListener('change', updateKey);
  document.getElementById('reset').addEventListener('click', function () {
    showAlert('Reset!', 'success')
    number = 0;
    document.getElementById('number').innerHTML = 0;
    document.getElementById('activationButton').value = '1';
    key = 'Space';
    blurAll();
  });
  document.addEventListener('keyup', (event) => {
    blurAll();
    if (event.code === key) {
      number++;
      document.getElementById('number').innerHTML = number;
    }
  }, false);
  document.getElementById('manual-activation').addEventListener('click', function () {
    blurAll();
    number++;
    document.getElementById('number').innerHTML = number;
  });
}

function blurAll() {
  document.getElementById('activationButton').blur();
  document.getElementById('manual-activation').blur();
  document.getElementById('reset').blur();
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
  blurAll();
}