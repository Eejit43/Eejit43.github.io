let copyMessageTimeout, copyMessageTimeout2;

/* Add event listeners */
document.getElementById('file-upload').addEventListener('change', fileUpload);
document.getElementById('encode').addEventListener('click', encode);
document.getElementById('decode').addEventListener('click', decode);
document.getElementById('clear').addEventListener('click', clear1);
document.getElementById('clear2').addEventListener('click', clear2);
document.getElementById('b64-copy-result').addEventListener('click', function () {
    copyText('b64-result', 'b64-copy-result');
});

let clearMessageTimeout, clearMessageTimeout2;

function clear1() {
    validFile = 1;
    document.getElementById('file-upload').value = '';
    document.getElementById('file-message').innerHTML = '';
    document.getElementById('b64-result').value = '';
    document.getElementById('b64-copy-result').disabled = true;
    document.getElementById('b64-open-result').disabled = true;
    showAlert('Cleared!', 'success');
    document.getElementById('clear').innerHTML = 'Cleared!';
    clearTimeout(clearMessageTimeout);
    clearMessageTimeout = setTimeout(function () {
        document.getElementById('clear').innerHTML = 'Clear';
    }, 2000);
    resetResult('e');
}

function clear2() {
    document.getElementById('stringToDecode').value = '';
    document.getElementById('image-output').src = '';
    showAlert('Cleared!', 'success');
    document.getElementById('clear2').innerHTML = 'Cleared!';
    clearTimeout(clearMessageTimeout2);
    clearMessageTimeout = setTimeout(function () {
        document.getElementById('clear2').innerHTML = 'Clear';
    }, 2000);
    resetResult('d');
}

function fileUpload() {
    let file = document.getElementById('file-upload');
    let fileMsg = document.getElementById('file-message');
    let fileName = file.value.split('\\').pop();
    fileMsg.innerHTML = 'Uploaded: ' + escapeHtml(fileName);
}

// https://newbedev.com/base64-image-open-in-new-tab-window-is-not-allowed-to-navigate-top-frame-navigations-to-data-urls
function openBase64InNewTab(data, mimeType) {
    var byteCharacters = atob(data);
    var byteNumbers = new Array(byteCharacters.length);
    for (var i = 0; i < byteCharacters.length; i++) {
        byteNumbers[i] = byteCharacters.charCodeAt(i);
    }
    var byteArray = new Uint8Array(byteNumbers);
    var file = new Blob([byteArray], {
        type: mimeType + ';base64',
    });
    var fileURL = URL.createObjectURL(file);
    window.open(fileURL);
}

function encode() {
    let old_element = document.getElementById('b64-open-result');
    let new_element = old_element.cloneNode(true);
    old_element.parentNode.replaceChild(new_element, old_element);

    let image = document.getElementById('file-upload');
    let output = document.getElementById('b64-result');
    if (image.value) {
        let reader = new FileReader();
        reader.onloadend = function () {
            let imageType = reader.result.replace(/^data:image\/(.*?);base64,.*$/g, '$1');

            if (imageType === 'png' || imageType === 'jpg' || imageType === 'jpeg' || imageType === 'webp' || imageType === 'bmp' || imageType === 'gif') {
                base64 = reader.result;
                output.value = reader.result;
                document.getElementById('b64-open-result').addEventListener('click', function () {
                    openBase64InNewTab(reader.result.replace(/data:image\/.*?;base64,/g, ''), 'image/' + imageType);
                });
                document.getElementById('b64-copy-result').disabled = false;
                document.getElementById('b64-open-result').disabled = false;
                showResult('e', 'success');
            } else {
                showAlert('Invalid file type! (must be .png, .jpg, .jpeg, .webp, .bmp, or .gif)', 'error');
                showResult('e', 'error');
            }
        };
        reader.readAsDataURL(image.files[0]);
    } else {
        showAlert('Empty input!', 'error');
        showResult('e', 'error');
    }
}

async function isBase64Image(string) {
    let image = new Image();
    image.src = string;
    return await new Promise((resolve) => {
        image.onload = function () {
            if (image.height === 0 || image.width === 0) {
                resolve(false);
                return;
            }
            resolve(true);
        };
        image.onerror = () => {
            resolve(false);
        };
    });
}

const valid = async (string) => {
    let image = document.getElementById('image-output');
    const valid = await isBase64Image(string);
    if (valid === true) {
        image.src = string;
    } else if (valid === false) {
        document.getElementById('image-output').src = '';
        showAlert('Malformed input!', 'error');
        showResult('d', 'error');
    }
};

function decode() {
    let string = document.getElementById('stringToDecode').value;
    let image = document.getElementById('image-output');

    if (/data:image\/.*?;base64,/.test(string) === false) {
        string = 'data:image/png;base64,' + string;
    }
    if (string.length === 0) {
        showAlert('Empty input!', 'error');
        showResult('d', 'error');
    } else {
        valid(string);
    }
}
