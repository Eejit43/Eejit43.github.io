let decimalInput = document.getElementById('decimal-input');
let decimalConvert = document.getElementById('decimal-convert');
let decimalReset = document.getElementById('decimal-reset');
let decimalArrow = document.getElementById('decimal-arrow');
let scientificOutput = document.getElementById('scientific-output');
let scientificOutputCopy = document.getElementById('scientific-output-copy');
let scientificOutputCopy2 = document.getElementById('scientific-output-copy-2');
let scientificInput = document.getElementById('scientific-input');
let scientificConvert = document.getElementById('scientific-convert');
let scientificReset = document.getElementById('scientific-reset');
let scientificArrow = document.getElementById('scientific-arrow');
let decimalOutput = document.getElementById('decimal-output');
let decimalOutputCopy = document.getElementById('decimal-output-copy');

let scientificOutputVal, scientificOutputVal2;

/* Add event listeners */
decimalInput.addEventListener('input', function () {
    decimalInput.value = decimalInput.value.replace(/[^0-9\.\-\+]/g, '').replace(/(\..*?)\./g, '$1').replace(/(-.*?)-/g, '$1').replace(/(\+.*?)\+/g, '$1');
});
decimalInput.addEventListener('input', function () {
    if (decimalInput.value.length > 0) {
        decimalConvert.disabled = false;
    } else {
        decimalConvert.disabled = true;
        
    if (decimalInput.value.length > 0 || scientificOutput.value != '' || decimalArrow.style.color != 'dimgray') {
        decimalReset.disabled = false;
    } else {
        decimalReset.disabled = true;
    }
};
});
decimalConvert.addEventListener('click', convertDecimal);
decimalReset.addEventListener('click', resetDecimal);
scientificOutputCopy.addEventListener('click', function () {
    copyText('scientificOutputVal', 'scientific-output-copy', 'Copy scientific e notation');
});
scientificOutputCopy2.addEventListener('click', function () {
    copyText('scientificOutputVal2', 'scientific-output-copy-2', 'Copy scientific notation');
});
scientificInput.addEventListener('input', function () {
    if (scientificInput.value.length > 0) {
        scientificConvert.disabled = false;
    } else {
        scientificConvert.disabled = true;
    }
    if (scientificInput.value.length > 0 || decimalOutput.value != '' || scientificArrow.style.color != 'dimgray') {
        scientificReset.disabled = false;
    } else {
        scientificReset.disabled = true;
}
});
scientificConvert.addEventListener('click', convertScientific);
scientificReset.addEventListener('click', resetScientific);
decimalOutputCopy.addEventListener('click', function () {
    copyText('decimalOutputVal', 'decimal-output-copy', 'Copy');
});

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
        copyText(variable, button, message);
    });
}

function resetDecimal() {
    scientificOutputVal,
    scientificOutputVal2 = undefined;
    scientificOutputCopy = document.getElementById('scientific-output-copy');
    scientificOutputCopy2 = document.getElementById('scientific-output-copy-2');
    decimalInput.value = '';
    decimalConvert.disabled = true;
    decimalReset.disabled = true;
    decimalArrow.style.color = 'dimgray';
    decimalArrow.className = 'fas fa-arrow-right';
    scientificOutput.value = '';
    scientificOutputCopy.innerHTML = 'Copy scientific e notation';
    scientificOutputCopy2.innerHTML = 'Copy scientific notation';
    scientificOutputCopy.disabled = true;
    scientificOutputCopy2.disabled = true;
    showAlert('Reset!', 'success')
}

function resetScientific() {
    decimalOutputVal = undefined;
    decimalOutputCopy = document.getElementById('decimal-output-copy');
    scientificInput.value = '';
    scientificConvert.disabled = true;
    scientificReset.disabled = true;
    scientificArrow.style.color = 'dimgray';
    scientificArrow.className = 'fas fa-arrow-right';
    decimalOutput.value = '';
    decimalOutputCopy.innerHTML = 'Copy';
    decimalOutputCopy.disabled = true;
    showAlert('Reset!', 'success')
}

function convertDecimal() {
    if (/^[+-]?([0-9]\d*)(\.\d*|,\d*)*$/g.test(decimalInput.value.trim()) || /^-?\d*\.\d+$/g.test(decimalInput.value.trim())) {
        scientificOutput.value = Number(decimalInput.value).toExponential();
        scientificOutputVal = Number(decimalInput.value).toExponential();
        scientificOutputVal2 = String(Number(decimalInput.value).toExponential()).replace('e+', ' x 10^').replace('e-', ' x 10^-');
        scientificOutputCopy.disabled = false;
        scientificOutputCopy2.disabled = false;
        decimalArrow.style.color = '#009c3f';
        decimalArrow.className = 'fas fa-arrow-right';
    } else {
        scientificOutput.value = ''
        scientificOutputCopy.disabled = true;
        scientificOutputCopy2.disabled = true;
        decimalArrow.style.color = '#bf4042';
        decimalArrow.className = 'fas fa-times';
        showAlert('Invalid number!', 'error');
    }
}

function convertScientific() {
    if (/^[+-]?\d(\.\d+)?[Ee][+-]?\d+$/g.test(scientificInput.value.trim())) {
        decimalOutput.value = Number(scientificInput.value).toLocaleString('fullwide', {
            useGrouping: false,
            maximumFractionDigits: 20
        });
        decimalOutputVal = Number(scientificInput.value).toLocaleString('fullwide', {
            useGrouping: false,
            maximumFractionDigits: 20
        });
        decimalOutputCopy.disabled = false;
        scientificArrow.style.color = '#009c3f';
        scientificArrow.className = 'fas fa-arrow-right';
    } else if (/^[+-]?\d(\.\d+)? ?[xX\*] ?10\^[+-]?\d+$/g.test(scientificInput.value.trim())) {
        decimalOutput.value = Number(scientificInput.value.replace(/ ?[xX\*] ?10\^(\d)/g, 'e+$1').replace(/ ?[xX\*] ?10\^-/g, 'e-').replace(/ ?[xX\*] ?10\^\+/g, 'e')).toLocaleString('fullwide', {
            useGrouping: false,
            maximumFractionDigits: 20
        });
        decimalOutputVal = Number(scientificInput.value.replace(/ ?[xX\*] ?10\^(\d)/g, 'e+$1').replace(/ ?[xX\*] ?10\^-/g, 'e-')).toLocaleString('fullwide', {
            useGrouping: false,
            maximumFractionDigits: 20
        });
        decimalOutputCopy.disabled = false;
        scientificArrow.style.color = '#009c3f';
        scientificArrow.className = 'fas fa-arrow-right';
    } else {
        decimalOutput.value = ''
        decimalOutputCopy.disabled = true;
        scientificArrow.style.color = '#bf4042';
        scientificArrow.className = 'fas fa-times';
        showAlert('Invalid scientific notation!', 'error');
    }
}