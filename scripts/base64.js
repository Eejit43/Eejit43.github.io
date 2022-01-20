window.onload = function () {
    document.getElementById('encode').addEventListener('click', encode);
    document.getElementById('decode').addEventListener('click', decode);
    document.getElementById('clear').addEventListener('click', clearAll);
    document.getElementById('copy-result').addEventListener('click', function () {
        copyText('result', 'copy-result')
    });
}

let clearMessageTimeout;

function clearAll() {
    document.getElementById('stringToModify').value = '';
    document.getElementById('result').value = '';
    document.getElementById('copy-result').disabled = true;
    showAlert('Cleared!', 'success')
    document.getElementById('clear').innerHTML = 'Cleared!';
    clearTimeout(clearMessageTimeout);
    clearMessageTimeout = setTimeout(function () {
        document.getElementById('clear').innerHTML = 'Clear';
    }, 2000);
    resetResult('e');
    resetResult('d');
}

function encode() {
    let stringToEncode = document.getElementById('stringToModify').value;
    if (stringToEncode.length === 0) {
        showAlert('Empty input!', 'error');
        showResult('e', 'error');
    } else {
        try {
            let decodedString = btoa(stringToEncode);
            document.getElementById('result').value = decodedString;
            showResult('e', 'success');
            document.getElementById('copy-result').disabled = false;
        } catch (err) {
            showAlert('Malformed input!', 'error');
            showResult('e', 'error');
        }
    }
}

function decode() {
    let stringToDecode = document.getElementById('stringToModify').value;
    if (stringToDecode.length === 0) {
        showAlert('Empty input!', 'error');
        showResult('d', 'error');
    } else {
        try {
            let encodedString = atob(stringToDecode);
            document.getElementById('result').value = encodedString;
            showResult('d', 'success');
            document.getElementById('copy-result').disabled = false;
        } catch (err) {
            showAlert('Malformed input!', 'error');
            showResult('d', 'error');
        }
    }
}