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
  inputType.value = 9;
  outputType.value = 7;
  copyOutput.disabled = true;
  showAlert('Reset!', 'success')
}

function convert() {
  if (/^-?([0-9]\d*)(\.\d*|,\d*)*$/g.test(input.value) || /^-?\d*\.\d+$/g.test(input.value)) {
    let inputNumber = Number(input.value.replace(/,/g, '').replace(/-\./g, '-0.').replace(/\.$/g, ''));
    if (inputType.value === '1') {
      kilometerConvert(inputNumber, outputType.value)
    }
    if (inputType.value === '2') {
      meterConvert(inputNumber, outputType.value)
    }
    if (inputType.value === '3') {
      centimeterConvert(inputNumber, outputType.value)
    }
    if (inputType.value === '4') {
      millimeterConvert(inputNumber, outputType.value)
    }
    if (inputType.value === '5') {
      micrometerConvert(inputNumber, outputType.value)
    }
    if (inputType.value === '6') {
      nanometerConvert(inputNumber, outputType.value)
    }
    if (inputType.value === '7') {
      mileConvert(inputNumber, outputType.value)
    }
    if (inputType.value === '8') {
      yardConvert(inputNumber, outputType.value)
    }
    if (inputType.value === '9') {
      footConvert(inputNumber, outputType.value)
    }
    if (inputType.value === '10') {
      inchConvert(inputNumber, outputType.value)
    }
    if (inputType.value === '11') {
      nauticalMileConvert(inputNumber, outputType.value)
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

function kilometerConvert(value, type) {
  if (type === '1') {
    showResult(value);
  }
  if (type === '2') {
    showResult(value * 1000);
  }
  if (type === '3') {
    showResult(value * 100000);
  }
  if (type === '4') {
    showResult(value * 1000000);
  }
  if (type === '5') {
    showResult(value * 1000000000);
  }
  if (type === '6') {
    showResult(value * 1000000000000);
  }
  if (type === '7') {
    showResult(value * 0.621371);
  }
  if (type === '8') {
    showResult(value * 1093.6132983377);
  }
  if (type === '9') {
    showResult(value * 3280.8398950131);
  }
  if (type === '10') {
    showResult(value * 39370.078740157);
  }
  if (type === '11') {
    showResult(value / 1.852);
  }
}

function meterConvert(value, type) {
  if (type === '1') {
    showResult(value / 1000);
  }
  if (type === '2') {
    showResult(value);
  }
  if (type === '3') {
    showResult(value * 100);
  }
  if (type === '4') {
    showResult(value * 1000);
  }
  if (type === '5') {
    showResult(value * 1000000);
  }
  if (type === '6') {
    showResult(value * 1000000000);
  }
  if (type === '7') {
    showResult(value * 0.0006213712);
  }
  if (type === '8') {
    showResult(value * 1.0936132983);
  }
  if (type === '9') {
    showResult(value * 3.280839895);
  }
  if (type === '10') {
    showResult(value * 39.3700787402);
  }
  if (type === '11') {
    showResult(value / 1852);
  }
}

function centimeterConvert(value, type) {
  if (type === '1') {
    showResult(value / 100000);
  }
  if (type === '2') {
    showResult(value / 100);
  }
  if (type === '3') {
    showResult(value);
  }
  if (type === '4') {
    showResult(value * 10);
  }
  if (type === '5') {
    showResult(value * 10000);
  }
  if (type === '6') {
    showResult(value * 10000000);
  }
  if (type === '7') {
    showResult(value * 0.0000062137119223733);
  }
  if (type === '8') {
    showResult(value * 0.010936133);
  }
  if (type === '9') {
    showResult(value / 30.48);
  }
  if (type === '10') {
    showResult(value / 2.54);
  }
  if (type === '11') {
    showResult(value / 185200);
  }
}

function millimeterConvert(value, type) {
  if (type === '1') {
    showResult(value / 1000000);
  }
  if (type === '2') {
    showResult(value / 1000);
  }
  if (type === '3') {
    showResult(value / 10);
  }
  if (type === '4') {
    showResult(value);
  }
  if (type === '5') {
    showResult(value * 1000);
  }
  if (type === '6') {
    showResult(value * 1000000);
  }
  if (type === '7') {
    showResult(value / 1609344);
  }
  if (type === '8') {
    showResult(value * 0.0010936133);
  }
  if (type === '9') {
    showResult(value * 0.0032808399);
  }
  if (type === '10') {
    showResult(value / 25.4);
  }
  if (type === '11') {
    showResult(value / 1852000);
  }
}

function micrometerConvert(value, type) {
  if (type === '1') {
    showResult(value / 1000000000);
  }
  if (type === '2') {
    showResult(value / 1000000);
  }
  if (type === '3') {
    showResult(value / 10000);
  }
  if (type === '4') {
    showResult(value / 1000);
  }
  if (type === '5') {
    showResult(value);
  }
  if (type === '6') {
    showResult(value * 1000);
  }
  if (type === '7') {
    showResult(value / 1609344000);
  }
  if (type === '8') {
    showResult(value / 914400);
  }
  if (type === '9') {
    showResult(value / 304800);
  }
  if (type === '10') {
    showResult(value / 25400);
  }
  if (type === '11') {
    showResult(value / 1852000000);
  }
}

function nanometerConvert(value, type) {
  if (type === '1') {
    showResult(value / 1000000000000);
  }
  if (type === '2') {
    showResult(value / 1000000000);
  }
  if (type === '3') {
    showResult(value / 10000000);
  }
  if (type === '4') {
    showResult(value / 1000000);
  }
  if (type === '5') {
    showResult(value / 1000);
  }
  if (type === '6') {
    showResult(value);
  }
  if (type === '7') {
    showResult(value / 1609344000000);
  }
  if (type === '8') {
    showResult(value / 914400000);
  }
  if (type === '9') {
    showResult(value / 304800000);
  }
  if (type === '10') {
    showResult(value / 25400000);
  }
  if (type === '11') {
    showResult(value / 1852000000000);
  }
}

function mileConvert(value, type) {
  if (type === '1') {
    showResult(value * 1.609344);
  }
  if (type === '2') {
    showResult(value * 1609.344);
  }
  if (type === '3') {
    showResult(value * 160934.4);
  }
  if (type === '4') {
    showResult(value * 1609344);
  }
  if (type === '5') {
    showResult(value * 1609344000);
  }
  if (type === '6') {
    showResult(value * 1609344000000);
  }
  if (type === '7') {
    showResult(value);
  }
  if (type === '8') {
    showResult(value * 1760);
  }
  if (type === '9') {
    showResult(value * 5280);
  }
  if (type === '10') {
    showResult(value * 63360);
  }
  if (type === '11') {
    showResult(value * 0.8689762419);
  }
}

function yardConvert(value, type) {
  if (type === '1') {
    showResult(value * 0.0009144);
  }
  if (type === '2') {
    showResult(value * 0.9144);
  }
  if (type === '3') {
    showResult(value * 91.44);
  }
  if (type === '4') {
    showResult(value * 914.4);
  }
  if (type === '5') {
    showResult(value * 914400);
  }
  if (type === '6') {
    showResult(value * 914400000);
  }
  if (type === '7') {
    showResult(value / 1760);
  }
  if (type === '8') {
    showResult(value);
  }
  if (type === '9') {
    showResult(value * 3);
  }
  if (type === '10') {
    showResult(value * 36);
  }
  if (type === '11') {
    showResult(value * 0.0004937365);
  }
}

function footConvert(value, type) {
  if (type === '1') {
    showResult(value * 0.0003048);
  }
  if (type === '2') {
    showResult(value * 0.3048);
  }
  if (type === '3') {
    showResult(value * 30.48);
  }
  if (type === '4') {
    showResult(value * 304.8);
  }
  if (type === '5') {
    showResult(value * 304800);
  }
  if (type === '6') {
    showResult(value * 304800000);
  }
  if (type === '7') {
    showResult(value / 5280);
  }
  if (type === '8') {
    showResult(value / 3);
  }
  if (type === '9') {
    showResult(value);
  }
  if (type === '10') {
    showResult(value * 12);
  }
  if (type === '11') {
    showResult(value * 0.0001645789126911);
  }
}

function inchConvert(value, type) {
  if (type === '1') {
    showResult(value * 0.0000254);
  }
  if (type === '2') {
    showResult(value * 0.0254);
  }
  if (type === '3') {
    showResult(value * 2.54);
  }
  if (type === '4') {
    showResult(value * 25.4);
  }
  if (type === '5') {
    showResult(value * 25400);
  }
  if (type === '6') {
    showResult(value * 25400000);
  }
  if (type === '7') {
    showResult(value / 63360);
  }
  if (type === '8') {
    showResult(value / 36);
  }
  if (type === '9') {
    showResult(value / 12);
  }
  if (type === '10') {
    showResult(value);
  }
  if (type === '11') {
    showResult(value / 0.0000137149);
  }
}

function nauticalMileConvert(value, type) {
  if (type === '1') {
    showResult(value * 1.852);
  }
  if (type === '2') {
    showResult(value * 1852);
  }
  if (type === '3') {
    showResult(value * 185200);
  }
  if (type === '4') {
    showResult(value * 1852000);
  }
  if (type === '5') {
    showResult(value * 1852000000);
  }
  if (type === '6') {
    showResult(value * 1852000000000);
  }
  if (type === '7') {
    showResult(value * 1.150779448);
  }
  if (type === '8') {
    showResult(value * 2025.3718285214);
  }
  if (type === '9') {
    showResult(value * 6076.1154855643);
  }
  if (type === '10') {
    showResult(value * 72913.385826772);
  }
  if (type === '11') {
    showResult(value);
  }
}

function showResult(result) {
  message.innerHTML = '';
  output.value = result.toLocaleString(undefined, {
    maximumFractionDigits: 15
  });
  copyOutput.disabled = false;
}