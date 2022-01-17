// some stuff modified from https://stackoverflow.com/questions/43726344/js-decoding-morse-code, https://www.tutorialspoint.com/converting-string-to-morse-code-in-javascript

let input = document.getElementById('input');
let toMorseBtn = document.getElementById('to-morse');
let fromMorseBtn = document.getElementById('from-morse');
let clearBtn = document.getElementById('clear');
let result = document.getElementById('result');
let resultCopy = document.getElementById('copy-result');
let resultCopy2 = document.getElementById('copy-result-2');
let resultCopy3 = document.getElementById('copy-result-3');

let resultVar1, resultVar2, resultVar3;

window.onload = function () {
  toMorseBtn.addEventListener('click', toMorse);
  fromMorseBtn.addEventListener('click', fromMorse);
  clearBtn.addEventListener('click', clear);
  resultCopy.addEventListener('click', function () {
    copyVar('resultVar1', 'copy-result', 'Copy')
  });
  resultCopy2.addEventListener('click', function () {
    copyVar('resultVar2', 'copy-result-2', 'Copy with vertical slash space')
  });
  resultCopy3.addEventListener('click', function () {
    copyVar('resultVar3', 'copy-result-3', 'Copy with three space space')
  });
}

function copyVar(variable, button, message) {
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

function clear() {
  resultCopy = document.getElementById('copy-result');
  input.value = '';
  result.value = '';
  resultCopy.innerHTML = 'Copy';
  resultCopy.disabled = true;
  resultCopy2.disabled = true;
  resultCopy3.disabled = true;
  showAlert('Cleared!', 'success')
}

const toMorseRef = {
  'a': '.-',
  'b': '-...',
  'c': '-.-.',
  'd': '-..',
  'e': '.',
  'f': '..-.',
  'g': '--.',
  'h': '....',
  'i': '..',
  'j': '.---',
  'k': '-.-',
  'l': '.-..',
  'm': '--',
  'n': '-.',
  'o': '---',
  'p': '.--.',
  'q': '--.-',
  'r': '.-.',
  's': '...',
  't': '-',
  'u': '..-',
  'v': '...-',
  'w': '.--',
  'x': '-..-',
  'y': '-.--',
  'z': '--..',
  '1': '.----',
  '2': '..---',
  '3': '...--',
  '4': '....-',
  '5': '.....',
  '6': '-....',
  '7': '--...',
  '8': '---..',
  '9': '----.',
  '0': '-----',
  '.': '.-.-.-',
  ',': '--..--',
  '?': '..--..',
  '\'': '.----.',
  '!': '-.-.--',
  '/': '-..-.',
  '(': '-.--.-',
  ')': '-.--.-',
  '&': '.-...',
  ':': '---...',
  ';': '-.-.-.',
  '=': '-...-',
  '+': '.-.-.',
  '-': '-....-',
  '_': '..--.-',
  '"': '.-..-.',
  '$': '...-..-',
  '@': '.--.-.',
}

const fromMorseRef = {
  '.-': 'a',
  '-...': 'b',
  '-.-.': 'c',
  '-..': 'd',
  '.': 'e',
  '..-.': 'f',
  '--.': 'g',
  '....': 'h',
  '..': 'i',
  '.---': 'j',
  '-.-': 'k',
  '.-..': 'l',
  '--': 'm',
  '-.': 'n',
  '---': 'o',
  '.--.': 'p',
  '--.-': 'q',
  '.-.': 'r',
  '...': 's',
  '-': 't',
  '..-': 'u',
  '...-': 'v',
  '.--': 'w',
  '-..-': 'x',
  '-.--': 'y',
  '--..': 'z',
  '.----': '1',
  '..---': '2',
  '...--': '3',
  '....-': '4',
  '.....': '5',
  '-....': '6',
  '--...': '7',
  '---..': '8',
  '----.': '9',
  '-----': '0',
  '.-.-.-': '.',
  '--..--': ',',
  '..--..': '?',
  '.----.': '\'',
  '-.-.--': '!',
  '-..-.': '/',
  '-.--.-': '(',
  '-.--.-': ')',
  '.-...': '&',
  '---...': ':',
  '-.-.-.': ';',
  '-...-': '=',
  '.-.-.': '+',
  '-....-': '-',
  '..--.-': '_',
  '.-..-.': '"',
  '...-..-': '$',
  '.--.-.': '@',
};

const convertToMorse = (str) => {
  return str.toLowerCase().split('').map(el => {
    return toMorseRef[el] ? toMorseRef[el] : el;
  }).join(' ').replace('   ', ' / ');
};

function toMorse() {
  resultCopy = document.getElementById('copy-result');
  if (/^[ a-zA-Z0-9\.,\?\'!\/\(\)&:;=+\-_"\$@]*$/.test(input.value.trim())) {
    result.value = convertToMorse(input.value);
    resultVar1 = convertToMorse(input.value);
    resultVar2 = convertToMorse(input.value).replace(' / ', ' | ');
    resultVar3 = convertToMorse(input.value).replace(' / ', '   ');
    resultCopy.disabled = false;
    resultCopy2.disabled = false;
    resultCopy3.disabled = false;
    showResult('e', 'success');
  } else {
    result.value = ''
    resultCopy.disabled = true;
    resultCopy2.disabled = true;
    resultCopy3.disabled = true;
    showResult('e', 'error');
    showAlert('Input cannot be converted into morse code!', 'error');
  }
}

function decodeMorse(morseCode) {
  return morseCode
    .split(/ {2,}| *[\|\/] */)
    .map(
      a => a
      .split(' ')
      .map(
        b => fromMorseRef[b]
      ).join('')
    ).join(' ');
}

function fromMorse() {
  let inputVal = input.value.trim().replace(/_/g, '-');
  resultCopy = document.getElementById('copy-result');
  if (/^[.-]{1,7}( [.-]{1,7})*(( {2,}| *[\|\/] *)[.-]{1,7}( [.-]{1,7})*)*$/g.test(inputVal)) {
    result.value = decodeMorse(inputVal);
    resultVar1 = decodeMorse(inputVal);
    resultCopy.disabled = false;
    resultCopy2.disabled = true;
    resultCopy3.disabled = true;
    showResult('d', 'success');
  } else {
    result.value = ''
    resultCopy.disabled = true;
    resultCopy2.disabled = true;
    resultCopy3.disabled = true;
    showResult('d', 'error');
    showAlert('Invalid morse code!', 'error');
  }
}