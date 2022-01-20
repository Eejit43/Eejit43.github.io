window.onload = function () {
    document.getElementById('toupper').addEventListener('click', toUpper);
    document.getElementById('tolower').addEventListener('click', toLower);
    document.getElementById('totitle').addEventListener('click', toTitle);
    document.getElementById('tosentence').addEventListener('click', toSentence);
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
    resetResult('u');
    resetResult('l');
    resetResult('t');
    resetResult('s');
}

function toUpper() {
    let string = document.getElementById('stringToModify').value;
    if (string.length === 0) {
        showAlert('Empty input!', 'error');
        showResult('u', 'error');
    } else {
        let result = string.toUpperCase();
        document.getElementById('result').value = result;
        showResult('u', 'success');
        document.getElementById('copy-result').disabled = false;
    }
}

function toLower() {
    let string = document.getElementById('stringToModify').value;
    if (string.length === 0) {
        showAlert('Empty input!', 'error');
        showResult('l', 'error');
    } else {
        let result = string.toLowerCase();
        document.getElementById('result').value = result;
        showResult('l', 'success');
        document.getElementById('copy-result').disabled = false;
    }
}

function titleCase(str) {
    var i, j, lowers, uppers;
    str = str.replace(/([^\W_]+[^\s-]*) */g, function (txt) {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });

    lowers = ['A', 'An', 'The', 'And', 'As', 'At', 'But', 'By', 'For', 'From', 'If', 'In', 'Into', 'Like', 'Near', 'Nor', 'Of', 'Off', 'On', 'Once', 'Onto', 'Or', 'Over', 'Past', 'So', 'Than', 'That', 'Till', 'To', 'Up', 'Upon', 'With', 'When', 'Yet'];
    for (i = 0, j = lowers.length; i < j; i++)
        str = str.replace(new RegExp('\\s' + lowers[i] + '\\s', 'g'),
            function (txt) {
                return txt.toLowerCase();
            });

    uppers = ['Id', 'Tv'];
    for (i = 0, j = uppers.length; i < j; i++)
        str = str.replace(new RegExp('\\b' + uppers[i] + '\\b', 'g'),
            uppers[i].toUpperCase());

    return str;
}

function toTitle() {
    let string = document.getElementById('stringToModify').value;
    if (string.length === 0) {
        showAlert('Empty input!', 'error');
        showResult('t', 'error');
    } else {
        let result = titleCase(string);
        document.getElementById('result').value = result;
        showResult('t', 'success');
        document.getElementById('copy-result').disabled = false;
    }
}

function toSentence() {
    let string = document.getElementById('stringToModify').value;
    if (string.length === 0) {
        showAlert('Empty input!', 'error');
        showResult('s', 'error');
    } else {
        let result = string.toLowerCase().replace(/(^\s*\w|[\.\!\?]\s*\w)/gm, function (c) {
            return c.toUpperCase()
        });
        result = result.replace(/(\s)i(\.|\!|\?|\s|\n|$)/gmi, '$1I$2');
        result = result.replace(/(\s)i'm(\.|\!|\?|\s|\n|$)/gmi, '$1I\'m$2');
        result = result.replace(/(\s)i'd(\.|\!|\?|\s|\n|$)/gmi, '$1I\'d$2');
        result = result.replace(/(\s)i'll(\.|\!|\?|\s|\n|$)/gmi, '$1I\'ll$2');
        result = result.replace(/(\s)i've(\.|\!|\?|\s|\n|$)/gmi, '$1I\'ve$2');
        document.getElementById('result').value = result;
        showResult('s', 'success');
        document.getElementById('copy-result').disabled = false;
    }
}