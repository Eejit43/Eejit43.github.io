window.onload = function () {
    document.getElementById('start').addEventListener('click', startTimer);
    document.getElementById('stop').addEventListener('click', stopTimer);
    document.getElementById('reset').addEventListener('click', resetTimer);
}

// Modified from https://jsfiddle.net/Larph/he10jyu9/

const HRS = document.getElementById('hrs'),
    MIN = document.getElementById('min'),
    SEC = document.getElementById('sec'),
    MIL = document.getElementById('mil'),
    DEL = document.getElementById('delayed');

var hrs = min = sec = mil = dt = ps = pt = tt = t = 0,
    running = started = false,
    iID;

function timerCycle() {
    if (running) {
        t = performance.now() * 0.001;
        dt += t - pt;
        pt = t;
        tt = Math.floor(dt);
        mil = dt - tt;
        MIL.textContent = (mil).toFixed(3).slice(-3);
        sec = tt % 60;
        if (sec == ps) return;
        ps = sec;
        min = Math.floor(tt / 60) % 60;
        hrs = Math.floor(tt / 3600);
        HRS.textContent = ('0' + hrs).slice(-2);
        MIN.textContent = ('0' + min).slice(-2);
        SEC.textContent = ('0' + sec).slice(-2);
    }
}

function stop() {
    if (iID) {
        clearInterval(iID);
        iID = 0;
    }
}

function start() {
    if (started && !running) {
        running = true;
        t = pt = performance.now() * 0.001;
        iID = setInterval(timerCycle, 33);
    }
}

function startTimer() {
    if (!started) {
        started = true;
        stop();
        if (!DEL.checked) {
            start();
        }
    }
}

function stopTimer() {
    if (started) {
        started = running = false;
        stop();
    }
}

function resetTimer() {
    started = running = false;
    stop();
    dt = ps = 0;
    HRS.textContent = '00';
    MIN.textContent = '00';
    SEC.textContent = '00';
    MIL.textContent = '000';
}

resetTimer();