let ready = document.getElementById('ready');

let key = document.getElementById('key');
let keyRepeating = document.getElementById('key-repeating');
let keyLocation = document.getElementById('key-location');
let keyCode = document.getElementById('key-code');
let keyAscii = document.getElementById('key-ascii');
let keyUnicode = document.getElementById('key-unicode');

let keyVal, keyRepeatingVal, keyLocationVal, KeyCodeVal, KeyAsciiVal, KeyUnicodeVal;

let valExist = 0; // 0 = no, 1 = yes

/* Add event listeners */
document.addEventListener('keydown', keyInfo);
document.getElementById('key-cell').addEventListener('click', function () {
    copyKeycodeInfo(keyVal);
});
document.getElementById('key-repeating-cell').addEventListener('click', function () {
    copyKeycodeInfo(keyRepeatingVal);
});
document.getElementById('key-location-cell').addEventListener('click', function () {
    copyKeycodeInfo(keyLocationVal);
});
document.getElementById('key-code-cell').addEventListener('click', function () {
    copyKeycodeInfo(keyCodeVal);
});
document.getElementById('key-ascii-cell').addEventListener('click', function () {
    copyKeycodeInfo(keyAsciiVal);
});
document.getElementById('key-unicode-cell').addEventListener('click', function () {
    copyKeycodeInfo(keyUnicodeVal);
});

if ( /*@cc_on!@*/ false) { // check for Internet Explorer
    document.onfocusin = onFocus;
    document.onfocusout = onBlur;
} else {
    window.onfocus = onFocus;
    window.onblur = onBlur;
}

function copyKeycodeInfo(variable) {
    if (valExist === 1) {
        navigator.clipboard.writeText(variable);
        showAlert('Copied!', 'success');
    }
}

function onBlur() {
    ready.innerHTML = '<span style="color:#FF5555"><i class="fas fa-exclamation-triangle"></i> Focus the tab in order for keys to be identified!</span>';
}

function onFocus() {
    ready.innerHTML = '<span style="color:#009c3f"><i class="fas fa-check"></i> Ready to get key information!</span>';
}

function keyInfo(event) {
    valExist = 1;
    document.getElementById('key-results').className = 'keycodes-td-ready';
    key.innerHTML = event.key;
    keyVal = event.key;
    if (String(event.key) === ' ') {
        key.innerHTML = 'Space ( )';
    }
    if (String(event.key) === '\u00a0') {
        key.innerHTML = '<span class="tooltip-text tooltip-bottom" data-tooltip="Non breaking space">NBSP</span> (\u00a0)';
    }
    keyRepeating.innerHTML = event.repeat;
    keyRepeatingVal = event.repeat;
    keyLocation.innerHTML = event.location;
    keyLocationVal = event.location;
    if (String(event.location) === '0') {
        keyLocation.innerHTML = '0<br>(general)';
    }
    if (String(event.location) === '1') {
        keyLocation.innerHTML = '1<br>(left)';
    }
    if (String(event.location) === '2') {
        keyLocation.innerHTML = '2<br>(right)';
    }
    if (String(event.location) === '3') {
        keyLocation.innerHTML = '3<br>(numpad)';
    }
    keyCode.innerHTML = event.code;
    keyCodeVal = event.code;
    keyAscii.innerHTML = event.which;
    keyAsciiVal = event.which;
    keyUnicode.innerHTML = String(event.key).charCodeAt(0);
    keyUnicodeVal = String(event.key).charCodeAt(0);
}