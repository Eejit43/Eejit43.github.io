let inputType = document.getElementById('input-type');
let input = document.getElementById('input');
let resetButton = document.getElementById('reset');
let message = document.getElementById('message');
let outputType = document.getElementById('output-type');
let output = document.getElementById('output');
let copyOutput = document.getElementById('copy-output');

window.onload = function () {
  inputType.addEventListener('change', convert);
  input.addEventListener('input', convert);
  resetButton.addEventListener('click', reset);
  outputType.addEventListener('change', convert);
  copyOutput.addEventListener('click', function () {
    copyText('output', 'copy-output')
  });
}

function reset() {
  input.value = '';
  output.value = '';
  message.innerHTML = '';
  inputType.value = 1;
  outputType.value = 2;
  copyOutput.disabled = true;
  showAlert('Reset!', 'success')
}

function convert() {
  if (/^-?([0-9]\d*)(\.\d*|,\d*)*$/g.test(input.value) || /^-?\d*\.\d+$/g.test(input.value)) {
    let inputNumber = Number(input.value.replace(/,/g, '').replace(/-\./g, '-0.').replace(/\.$/g, ''));
    if (inputType.value === '1' && outputType.value === '1') {
      showResult(inputNumber);
    }
    if (inputType.value === '1' && outputType.value === '2') {
      showResult((inputNumber - 32) * (5 / 9));
    }
    if (inputType.value === '1' && outputType.value === '3') {
      showResult((inputNumber - 32) * (5 / 9) + 273.15);
    }
    if (inputType.value === '2' && outputType.value === '1') {
      showResult(inputNumber * (9 / 5) + 32);
    }
    if (inputType.value === '2' && outputType.value === '2') {
      showResult(inputNumber);
    }
    if (inputType.value === '2' && outputType.value === '3') {
      showResult(inputNumber + 273.15);
    }
    if (inputType.value === '3' && outputType.value === '1') {
      showResult((inputNumber - 273.15) * (9 / 5) + 32);
    }
    if (inputType.value === '3' && outputType.value === '2') {
      showResult(inputNumber - 273.15);
    }
    if (inputType.value === '3' && outputType.value === '3') {
      showResult(inputNumber);
    }
  } else {
    if (input.value != '') {
      message.innerHTML = '<i class="fas fa-exclamation-triangle"></i> Input is not a number!<br>';
    } else {
      message.innerHTML = '';
    }
    output.value = '';
    copyOutput.disabled = true;
  }
}

function showResult(result) {
  message.innerHTML = '';
  output.value = result.toLocaleString();
  copyOutput.disabled = false;
}