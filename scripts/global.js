// Emoji parser
function twemojiUpdate() {
    twemoji.parse(document.body, {
        folder: 'svg',
        ext: '.svg',
    });
}

twemojiUpdate();

// Popup alert
function showAlert(text, color) {
    if (color === 'success') {
        color = '#009c3f';
    } else if (color === 'error') {
        color = '#FF5555';
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
            fontFamily: '"Source Sans Pro", sans-serif',
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
        color = '#009c3f';
        icon = 'check';
    } else if (type === 'error') {
        color = '#ff5555';
        icon = 'times';
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
        copyText(toCopy, button);
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
        copyText(button, text);
    });
}

// Escape html
function escapeHtml(input) {
    return input.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#039;');
}

// Navtime
function navtime() {
    let currentTime = new Date();
    let fullhours = currentTime.getHours();
    let hours = ((fullhours + 11) % 12) + 1;
    let minutes = currentTime.getMinutes();
    let sec = currentTime.getSeconds();
    if (minutes < 10) {
        minutes = '0' + minutes;
    }
    if (sec < 10) {
        sec = '0' + sec;
    }

    let timesuffix = fullhours >= 12 ? 'PM' : 'AM';

    let timeemoji =
        fullhours >= 7 && fullhours < 17
            ? '<img draggable="false" class="emoji" alt="☀️" src="https://twemoji.maxcdn.com/v/13.1.0/svg/2600.svg">'
            : '<img draggable="false" class="emoji" alt="🌒" src="https://twemoji.maxcdn.com/v/13.1.0/svg/1f312.svg">';

    let finaltime = hours + ':' + minutes + ':' + sec + ' ' + timesuffix + ' ' + timeemoji;

    if (document.getElementById('navtime').innerHTML !== finaltime) {
        document.getElementById('navtime').innerHTML = finaltime;
    }

    setTimeout(navtime, 100);
}

navtime();

// Navbar resize on scroll
function resizeNav() {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        document.getElementById('navbar').className = 'nav-shrunk';
    } else {
        document.getElementById('navbar').className = '';
    }
}

window.onscroll = function () {
    resizeNav();
};

resizeNav();
