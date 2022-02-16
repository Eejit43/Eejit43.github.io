let clearClipboardButton = document.getElementById('clear-clipboard');
let copyZws = document.getElementById('copy-zws');
let copyNbsp = document.getElementById('copy-nbsp');
let copyEms = document.getElementById('copy-ems');
let copyEns = document.getElementById('copy-ens');
let copyTs = document.getElementById('copy-ts');
let clipboardWarning = document.getElementById('clipboard-warning');
let copiedText = document.getElementById('copied-text');
let selectClipboard = document.getElementById('select-clipboard');

/* Add event listeners */
clearClipboardButton.addEventListener('click', clearClipboard);
copyZws.addEventListener('click', function () {
    copyText('copy-zws', '\u200b');
    clipboardDisplay();
});
copyNbsp.addEventListener('click', function () {
    copyText('copy-nbsp', '\u00a0');
    clipboardDisplay();
});
copyEms.addEventListener('click', function () {
    copyText('copy-ems', '\u2003');
    clipboardDisplay();
});
copyEns.addEventListener('click', function () {
    copyText('copy-ens', '\u2002');
    clipboardDisplay();
});
copyTs.addEventListener('click', function () {
    copyText('copy-ts', '\u2009');
    clipboardDisplay();
});
selectClipboard.addEventListener('click', function () {
    copiedText.select();
});
window.onfocus = onFocus;
window.onblur = onBlur;

let clipboardReadAllowed;

function showWarning(message) {
    if (clipboardWarning.innerHTML !== message) {
        clipboardWarning.innerHTML = message;
    }
}

function onFocus() {
    if (clipboardReadAllowed) {
        clipboardDisplay();
    }
}

function onBlur() {
    if (clipboardReadAllowed) {
        showWarning('<i class="fa-solid fa-exclamation-triangle"></i> Tab not focused, unable to read clipboard!<br />');
    }
}

let clipboardTimeout, url;

function clearClipboard() {
    clearTimeout(clipboardTimeout);
    clearClipboardButton.innerHTML = 'Cleared!';
    clipboardTimeout = setTimeout(function () {
        clearClipboardButton.innerHTML = 'Clear Clipboard';
    }, 2000);
    navigator.clipboard.writeText('');
    url = undefined;
    showAlert('Cleared!', 'success');
    clipboardDisplay();
}

navigator.permissions
    .query({
        name: 'clipboard-read',
    })
    .then((result) => {
        if (result.state === 'granted' || result.state === 'prompt') {
            clipboardDisplay();
            setInterval(clipboardDisplay, 1000);
            clipboardReadAllowed = true;
        } else {
            showWarning('<i class="fa-solid fa-exclamation-triangle"></i> Permission to read clipboard denied!<br />');
            clipboardReadAllowed = false;
        }
    });

async function clipboardDisplay() {
    navigator.clipboard
        .readText()
        .then((text) => {
            if (text.length === 0) {
                copiedText.value = '';
                selectClipboard.disabled = true;
                if (url === undefined) {
                    showWarning('<span style="color:#009c3f"><i class="far fa-clipboard"></i> Your clipboard is empty!<br /></span>');
                }
                getImg();
            } else {
                copiedText.value = text;
                showWarning('');
                selectClipboard.disabled = false;
            }
        })
        .catch((err) => {
            if (err.toString().match(/focused/g)) {
                showWarning('<i class="fa-solid fa-exclamation-triangle"></i> Tab not focused, unable to read clipboard!<br />');
            } else if (err.toString().match(/denied/g)) {
                showWarning('<i class="fa-solid fa-exclamation-triangle"></i> Permission to read clipboard denied!<br />');
            } else {
                showWarning('<i class="fa-solid fa-exclamation-triangle"></i> Unable to read clipboard!<br />');
            }
        });
}

function getImg() {
    try {
        navigator.clipboard
            .read()
            .then((data) => {
                for (let i = 0; i < data.length; i++) {
                    data[i].getType('image/png').then((blob) => {
                        url = URL.createObjectURL(blob);
                        clipboardWarning.innerHTML = `<span style="color:#4b5663"><i class="far fa-image"></i> Clipboard has image! (<a href='${url}' target="_blank">view</a>)<br /></span>`;
                    });
                }
            })
            .catch((err) => {
                url = undefined;
            });
    } catch (err) {
        url = undefined;
    }
}
