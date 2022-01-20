// Emoji parser
function twemojiUpdate() {
    twemoji.parse(document.body, {
        folder: 'svg',
        ext: '.svg'
    });
}

window.onload = function () {
    twemojiUpdate();
}

setTimeout(twemojiUpdate, 200)

setTimeout(twemojiUpdate, 500)

setTimeout(twemojiUpdate, 1000)

setTimeout(twemojiUpdate, 2000)

// Popup alert
function showAlert(text, color) {
    if (color === 'success') {
        color = '#009c3f'
    } else if (color === 'error') {
        color = '#FF5555'
    }
    Toastify({
        text: text,
        duration: 2000,
        position: 'center',
        style: {
            background: '#333',
            boxShadow: 'none',
            minWidth: '150px',
            textAlign: 'center',
            fontFamily: '"Rubik", sans-serif',
            fontWeight: '600',
            fontSize: '17px',
            color: color,
            padding: '16px 30px',
        },
    }).showToast();
}

// Button icon
function showResult(id, type, color = undefined, icon = undefined) {
    let oldElement = document.getElementById(id + '-runResult');
    // Reset any timeout
    let element = oldElement.cloneNode(true);
    oldElement.parentNode.replaceChild(element, oldElement);
    if (type === 'success') {
        color = '#009c3f'
        icon = 'check'
    } else if (type === 'error') {
        color = '#FF5555'
        icon = 'times'
    }
    element.style.color = color;
    element.className = 'fas fa-' + icon;
    setTimeout(function () {
        element.style.color = '';
        element.className = '';
    }, 2000);
}

function resetResult(id) {
    let element = document.getElementById(id + '-runResult');
    element.style.color = '';
    element.className = '';
}

// Copy text
function copyText(toCopy, button) {
    let oldElement = document.getElementById(button);
    let newElement = oldElement.cloneNode(true);
    oldElement.parentNode.replaceChild(newElement, oldElement);
    const element = document.getElementById(toCopy);
    navigator.clipboard.writeText(element.value);
    newElement.innerHTML = 'Copied!';
    setTimeout(function () {
        newElement.innerHTML = 'Copy';
    }, 2000);
    showAlert('Copied!', 'success');

    newElement.addEventListener('click', function () {
        copyText(toCopy, button)
    });
}

function copyVar(button, text) {
    let oldElement = document.getElementById(button);
    let newElement = oldElement.cloneNode(true);
    oldElement.parentNode.replaceChild(newElement, oldElement);
    navigator.clipboard.writeText(text);
    newElement.innerHTML = 'Copied!';
    setTimeout(function () {
        newElement.innerHTML = 'Copy';
    }, 2000);
    showAlert('Copied!', 'success');

    newElement.addEventListener('click', function () {
        copyText(button, text)
    });
}

// Escape html
function escapeHtml(input) {
    return input.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;");
}