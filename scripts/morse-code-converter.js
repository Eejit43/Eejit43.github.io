// some stuff modified from https://stackoverflow.com/questions/43726344/js-decoding-morse-code, https://www.tutorialspoint.com/converting-string-to-morse-code-in-javascript

let input = document.getElementById('input');
let toMorseBtn = document.getElementById('to-morse');
let fromMorseBtn = document.getElementById('from-morse');
let clearBtn = document.getElementById('clear');
let result = document.getElementById('result');
let resultCopy = document.getElementById('copy-result');

window.onload = function () {
  toMorseBtn.addEventListener('click', toMorse);
  fromMorseBtn.addEventListener('click', fromMorse);
  clearBtn.addEventListener('click', clear);
  resultCopy.addEventListener('click', function () {
    copyText('result', 'copy-result')
  });
}

function clear() {
  resultCopy = document.getElementById('copy-result');
  input.value = '';
  result.value = '';
  resultCopy.innerHTML = 'Copy';
  resultCopy.disabled = true;
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
  }).join(' ');
};

function toMorse() {
  resultCopy = document.getElementById('copy-result');
  if (/^[ a-zA-z0-9\.,\?\'!\/\(\)&:;=\+-_"\$@]*$/.test(input.value.trim())) {
    result.value = convertToMorse(input.value);
    resultCopy.disabled = false;
    showResult('e', 'success');
  } else {
    result.value = ''
    resultCopy.disabled = true;
    showResult('e', 'error');
    showAlert('Input cannot be converted into morse code!', 'error');
  }
}

function decodeMorse(morseCode) {
  return morseCode
    .split('   ')
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
  if (/^[.-]{1,7}( [.-]{1,7})*(   [.-]{1,7}( [.-]{1,7})*)*$/g.test(inputVal)) {
    result.value = decodeMorse(inputVal);
    resultCopy.disabled = false;
    showResult('d', 'success');
  } else {
    result.value = ''
    resultCopy.disabled = true;
    showResult('d', 'error');
    showAlert('Invalid morse code!', 'error');
  }
}