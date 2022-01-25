/* Add event listeners */
document.getElementById('clearclipboard').addEventListener('click', clearClipboard);
document.getElementById('copy-zws').addEventListener('click', function () {
    copyVar('copy-zws', '​');
});
document.getElementById('copy-nbsp').addEventListener('click', function () {
    copyVar('copy-nbsp', '\u00a0');
});
document.getElementById('copy-ems').addEventListener('click', function () {
    copyVar('copy-ems', ' ');
});
document.getElementById('copy-ens').addEventListener('click', function () {
    copyVar('copy-ens', ' ');
});
document.getElementById('copy-ts').addEventListener('click', function () {
    copyVar('copy-ts', ' ');
});
document.getElementById('selectclipboard').addEventListener('click', function () {
    document.getElementById('copiedtext').select();
});

let clipboardTimeout, url;

function clearClipboard() {
    clearTimeout(clipboardTimeout);
    document.getElementById('clearclipboard').innerHTML = 'Cleared!';
    clipboardTimeout = setTimeout(function () {
        document.getElementById('clearclipboard').innerHTML = 'Clear Clipboard';
    }, 2000);
    navigator.clipboard.writeText('');
    url = undefined;
    showAlert('Cleared!', 'success');
}

navigator.permissions.query({
    name: 'clipboard-read'
}).then((result) => {
    if (result.state === 'granted' || result.state === 'prompt') {
        clipboardDisplay();
    } else {
        document.getElementById('clipboardwarning').innerHTML = '<i class="fas fa-exclamation-triangle"></i> Permission to read clipboard denied!<br>';
    }
});

async function clipboardDisplay() {
    navigator.clipboard.readText()
        .then(text => {
            if (text.length === 0) {
                document.getElementById('copiedtext').value = '';
                document.getElementById('selectclipboard').disabled = true;
                if (url === undefined) {
                    document.getElementById('clipboardwarning').innerHTML = '<span style="color:#009c3f;"><i class="far fa-clipboard"></i> Your clipboard is empty!<br></span>';
                    //console.log(url)
                }
                getImg();
            } else {
                document.getElementById('copiedtext').value = text;
                document.getElementById('clipboardwarning').innerHTML = '';
                document.getElementById('selectclipboard').disabled = false;
            }
        })
        .catch(err => {
            if (err.toString().match(/focused/g)) {
                document.getElementById('clipboardwarning').innerHTML = '<i class="fas fa-exclamation-triangle"></i> Tab not focused, unable to read clipboard!<br>';
            } else if (err.toString().match(/denied/g)) {
                document.getElementById('clipboardwarning').innerHTML = '<i class="fas fa-exclamation-triangle"></i> Permission to read clipboard denied!<br>';
            } else {
                document.getElementById('clipboardwarning').innerHTML = '<i class="fas fa-exclamation-triangle"></i> Unable to read clipboard!<br>';
            }
        });
    setTimeout(clipboardDisplay, 1000);
}

function getImg() {
    try {
        navigator.permissions.query({
            name: 'clipboard-read'
        }).then((result) => {
            if (result.state === 'granted' || result.state === 'prompt') {
                navigator.clipboard.read().then((data) => {
                    for (let i = 0; i < data.length; i++) {
                        data[i].getType('image/png').then((blob) => { // jshint ignore:line
                            url = URL.createObjectURL(blob);
                            document.getElementById('clipboardwarning').innerHTML = `<span style="color:#4b5663;"><i class="far fa-image"></i> Clipboard has image! (<a href='${url}' target="_blank">view</a>)<br></span>`;
                        });
                    }
                });
            }
        });
    } catch (err) {
        url = undefined;
    }
}