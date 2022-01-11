let romanOutputCopy, romanOutputCopy2, integerOutput;

window.onload = function () {
  document.getElementById('integer-input').addEventListener('input', function () {
    let input = document.getElementById('integer-input');
    if (parseInt(input.value) === 0) {
      input.value = '';
    }
  });
  document.getElementById('integer-input').addEventListener('input', function () {
    let input = document.getElementById('integer-input')
    input.value = input.value.replace(/[^0-9]/g, '').replace(/(\..*)\./g, '$1');
  });
  document.getElementById('integer-input').addEventListener('input', function () {
    let input = document.getElementById('integer-input').value;
    let output = document.getElementById('roman-output').textContent;
    let arrow = document.getElementById('integer-arrow');
    if (input.length > 0) {
      document.getElementById('integer-convert').disabled = false;
    } else {
      document.getElementById('integer-convert').disabled = true;
    }
    if (input.length > 0 || output != '​' || arrow.style.color != 'dimgray') {
      document.getElementById('integer-reset').disabled = false;
    } else {
      document.getElementById('integer-reset').disabled = true;
    }
  });
  document.getElementById('integer-convert').addEventListener('click', convertInteger);
  document.getElementById('integer-reset').addEventListener('click', resetInteger);
  document.getElementById('roman-input').addEventListener('input', function () {
    let input = document.getElementById('roman-input');
    input.value = input.value.toUpperCase();
  });
  document.getElementById('roman-input').addEventListener('input', function () {
    let input = document.getElementById('roman-input');
    input.value = input.value.replace(/((?![IVXLCDM_]).)/gi, '');
  });
  document.getElementById('roman-input').addEventListener('input', function () {
    let input = document.getElementById('roman-input').value;
    let output = document.getElementById('integer-output').value;
    let arrow = document.getElementById('roman-arrow');
    if (input.length > 0) {
      document.getElementById('roman-convert').disabled = false;
    } else {
      document.getElementById('roman-convert').disabled = true;
    }
    if (input.length > 0 || output != '' || arrow.style.color != 'dimgray') {
      document.getElementById('roman-reset').disabled = false;
    } else {
      document.getElementById('roman-reset').disabled = true;
    }
  });
  document.getElementById('roman-convert').addEventListener('click', convertRoman);
  document.getElementById('roman-reset').addEventListener('click', resetRoman);
  document.getElementById('roman-output-copy').addEventListener('click', function () {
    copyText('romanOutputCopy', 'roman-output-copy', 'Copy w/ macrons');
  });
  document.getElementById('roman-output-copy-2').addEventListener('click', function () {
    copyText('romanOutputCopy2', 'roman-output-copy-2', 'Copy w/ underscores');
  });
  document.getElementById('integer-output-copy').addEventListener('click', function () {
    copyText('integerOutput', 'integer-output-copy', 'Copy');
  });
};

function copyText(variable, button, message) {
  let oldElement = document.getElementById(button);
  let newElement = oldElement.cloneNode(true);
  oldElement.parentNode.replaceChild(newElement, oldElement);
  navigator.clipboard.writeText(eval(variable));
  newElement.innerHTML = 'Copied!';
  setTimeout(function () {
    newElement.innerHTML = message;
  }, 2000);
  showAlert('Copied!', 'success');

  newElement.addEventListener('click', function () {
    copyText(variable, button, message)
  });
}

function convertInteger() {
  let input = document.getElementById('integer-input').value;
  let output = document.getElementById('roman-output');
  let copy = document.getElementById('roman-output-copy');
  let copy2 = document.getElementById('roman-output-copy-2');
  input = parseInt(input);
  if (input > 0) {
    output.innerHTML = romanize(input);
    copy.disabled = false;
    copy2.disabled = false;
    document.getElementById('integer-arrow').style.color = '#009c3f';
    document.getElementById('integer-arrow').className = 'fas fa-arrow-right';
  } else {
    showAlert('Value must be greater than 0!', 'error');
    output.textContent = '​';
    copy.disabled = true;
    copy2.disabled = true;
    document.getElementById('integer-arrow').style.color = '#bf4042';
    document.getElementById('integer-arrow').className = 'fas fa-times';
  }
}

function resetInteger() {
  showAlert('Reset!', 'success');
  document.getElementById('integer-input').value = '';
  document.getElementById('integer-convert').disabled = true;
  document.getElementById('integer-reset').disabled = true;
  document.getElementById('integer-arrow').style.color = 'dimgray';
  document.getElementById('integer-arrow').className = 'fas fa-arrow-right';
  document.getElementById('roman-output').textContent = '​';
  document.getElementById('roman-output-copy').disabled = true;
  document.getElementById('roman-output-copy-2').disabled = true;
  romanOutputCopy = undefined;
  romanOutputCopy2 = undefined;
}

function convertRoman() {
  let input = document.getElementById('roman-input').value;
  input = input.toUpperCase();
  input = input.replace(/_(\w)/g, function (match) {
    return match.toLowerCase();
  });
  let output = document.getElementById('integer-output');
  let copy = document.getElementById('integer-output-copy');
  if (/^(?:m*)(?:d?c{0,3}|c[md])(?:l?x{0,3}|x[cl])(?:(?:vi?){0,3}|i[xv])(?:M{0,3})(?:D?C{0,3}|C[MD])(?:L?X{0,3}|X[CL])(?:V?I{0,3}|I[XV])$/.test(input) === true) {
    integerOutput = deromanize(input);
    output.value = integerOutput;
    copy.disabled = false;
    document.getElementById('roman-arrow').style.color = '#009c3f';
    document.getElementById('roman-arrow').className = 'fas fa-arrow-right';
  } else {
    showAlert('Invalid roman numeral!', 'error');
    output.value = '';
    copy.disabled = true;
    document.getElementById('roman-arrow').style.color = '#bf4042';
    document.getElementById('roman-arrow').className = 'fas fa-times';
  }
}

function resetRoman() {
  showAlert('Reset!', 'success');
  document.getElementById('roman-input').value = '';
  document.getElementById('roman-convert').disabled = true;
  document.getElementById('roman-reset').disabled = true;
  document.getElementById('roman-arrow').style.color = 'dimgray';
  document.getElementById('roman-arrow').className = 'fas fa-arrow-right';
  document.getElementById('integer-output').value = '';
  document.getElementById('integer-output-copy').disabled = true;
}

//Some portions modified from https://blog.stevenlevithan.com/archives/javascript-roman-numeral-converter and https://iandevlin.com/files/blog/romanNumerals.html
//HHHUUUUGEEE thanks to EmNudge#5549 from The Coding Den for their help in remaking this function!!!

const roman = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];
const decimal = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];

function romanize(value) {
  let num = value;

  let barredNumerals = '';
  while (num > 3999) {
    for (let i = 0; i < decimal.length - 1; i++) {
      const currentNumber = decimal[i] * 1000;
      if (num < currentNumber) continue;

      num -= currentNumber;
      barredNumerals += roman[i];
      break;
    }
  }

  let regularNumerals = '';
  while (num > 0) {
    for (let i = 0; i < decimal.length; i++) {
      const currentNumber = decimal[i];
      if (num < currentNumber) continue;

      num -= currentNumber;
      regularNumerals += roman[i];
      break;
    }
  }
  romanOutputCopy = barredNumerals.replace(/I/g, 'Ī').replace(/V/g, 'V̄').replace(/X/g, 'X̄').replace(/L/g, 'L̄').replace(/C/g, 'C̄').replace(/D/g, 'D̄').replace(/M/g, 'M̄') + regularNumerals;
  romanOutputCopy2 = barredNumerals.replace(/([A-Z])/g, '_$1') + regularNumerals;
  return `<span style="border-top:1px solid">${barredNumerals}</span>` + regularNumerals;
}

function deromanize(str) {
  let validator = /^(?:m*)(?:d?c{0,3}|c[md])(?:l?x{0,3}|x[cl])(?:(?:vi?){0,3}|i[xv])(?:M{0,3})(?:D?C{0,3}|C[MD])(?:L?X{0,3}|X[CL])(?:V?I{0,3}|I[XV])$/,
    token = /[mdlv]|c[md]?|x[cl]?|i[xv]|[MDLV]|C[MD]?|X[CL]?|I[XV]?/g,
    key = {
      m: 1000000,
      cm: 900000,
      d: 500000,
      cd: 400000,
      c: 100000,
      xc: 90000,
      l: 50000,
      xl: 40000,
      x: 10000,
      ix: 9000,
      v: 5000,
      iv: 4000,
      M: 1000,
      CM: 900,
      D: 500,
      CD: 400,
      C: 100,
      XC: 90,
      L: 50,
      XL: 40,
      X: 10,
      IX: 9,
      V: 5,
      IV: 4,
      I: 1
    },
    num = 0,
    m;
  if (!(str && validator.test(str)))
    return false;
  while (m = token.exec(str))
    num += key[m[0]];
  return num;
}