let eventsTitle = document.getElementById('events-title');

let eventsDisplay = document.getElementById('events');

let yearVal = document.getElementById('year');
let monthVal = document.getElementById('month');
let dateVal = document.getElementById('date');

let getDate = document.getElementById('get-date');
let resetDate = document.getElementById('reset-date');

let yearOverview = document.getElementById('year-overview');
let yearOverviewList = document.getElementById('year-overview-list');

window.onload = function () {
    getDate.addEventListener('click', getFromDate);
    resetDate.addEventListener('click', getCurrent);
}

let currentTime = new Date();
let year = currentTime.getFullYear();
let month = currentTime.getMonth() + 1;
let date = currentTime.getDate();
if (month < 10) {
    month = '0' + month
}
if (date < 10) {
    date = '0' + date
}

yearVal.placeholder = year;
monthVal.placeholder = month;
dateVal.placeholder = date;

yearOverview.href = `https://en.pronouns.page/calendar/${year}-overview.png`;
yearOverviewList.href = `https://en.pronouns.page/calendar/${year}-labels.png`;

async function getFromDate() {
    eventsDisplay.innerHTML = '<span style="color:#FF5555">Loading data...</span>';

    let yearInput = escapeHtml(yearVal.value);
    let monthInput = escapeHtml(monthVal.value);
    let dateInput = escapeHtml(dateVal.value);
    if (yearInput === '') {
        yearInput = year;
    }
    if (monthInput === '') {
        monthInput = month;
    } else if (monthInput.length === 1) {
        monthInput = '0' + monthInput;
    }
    if (dateInput === '') {
        dateInput = date;
    } else if (dateInput.length === 1) {
        dateInput = '0' + dateInput;
    }

    eventsTitle.innerHTML = `Events on ${yearInput}/${monthInput}/${dateInput}:`;

    fetch(`https://en.pronouns.page/api/calendar/${yearInput}-${monthInput}-${dateInput}`)
        .then((response) => {
            return response.json()
        })
        .then((data) => {
            events = data.events;

            events = '- ' + events.join('<br> – ').replace(/\w\w=/g, '');
            if (events === '- ') {
                events = 'No events found on this date!';
            }

            eventsDisplay.innerHTML = events;
        })
        .catch((err) => {})
}

async function getCurrent() {
    eventsTitle.innerHTML = 'Current Events:';
    eventsDisplay.innerHTML = '<span style="color:#FF5555">Loading data...</span>';

    yearVal.value = '';
    monthVal.value = '';
    dateVal.value = '';

    fetch('https://en.pronouns.page/api/calendar/today')
        .then((response) => {
            return response.json()
        })
        .then((data) => {
            events = data.events;

            events = '- ' + events.join('<br> – ').replace(/\w\w=/g, '');
            if (events === '- ') {
                events = 'No events found on this date!';
            }

            eventsDisplay.innerHTML = events;
        })
        .catch((err) => {})
}

getCurrent();