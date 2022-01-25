let eventsTitle = document.getElementById('events-title');

let eventsDisplay = document.getElementById('events');

let monthVal = document.getElementById('month');
let dateVal = document.getElementById('date');

let getDate = document.getElementById('get-date');
let resetDate = document.getElementById('reset-date');

let yearOverview = document.getElementById('year-overview');
let yearOverviewList = document.getElementById('year-overview-list');

/* Add event listeners */
getDate.addEventListener('click', getFromDate);
resetDate.addEventListener('click', getCurrent);
monthVal.addEventListener('input', function () {
    monthVal.value = monthVal.value.replace(/((?![0-9]).)/g, '');
});
monthVal.addEventListener('paste', function () {
    monthVal.value = monthVal.value.replace(/((?![0-9]).)/g, '');
});
monthVal.addEventListener('input', function () {
    checkInput(this);
});
dateVal.addEventListener('input', function () {
    dateVal.value = dateVal.value.replace(/((?![0-9]).)/g, '');
});
dateVal.addEventListener('paste', function () {
    dateVal.value = dateVal.value.replace(/((?![0-9]).)/g, '');
});
dateVal.addEventListener('input', function () {
    checkInput(this);
});

function checkInput(element) {
    if (element.value.length > element.maxLength) element.value = element.value.slice(0, element.maxLength);
    if (element.value > element.max || element.value < 1) element.value = element.value.slice(0, 1);
}

let currentTime = new Date();
let year = currentTime.getFullYear();
let month = currentTime.getMonth() + 1;
let date = currentTime.getDate();
if (month < 10) {
    month = '0' + month;
}
if (date < 10) {
    date = '0' + date;
}

monthVal.placeholder = month;
dateVal.placeholder = date;

yearOverview.href = `https://en.pronouns.page/calendar/${year}-overview.png`;
yearOverviewList.href = `https://en.pronouns.page/calendar/${year}-labels.png`;

async function getFromDate() {
    let monthInput = escapeHtml(monthVal.value);
    let dateInput = escapeHtml(dateVal.value);

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

    if (Number(monthInput) !== 0 && Number(dateInput) !== 0) {
        eventsDisplay.innerHTML = '<span style="color:#FF5555">Loading data...</span>';

        eventsTitle.innerHTML = `Events on ${year}/${monthInput}/${dateInput}:`;

        fetch(`https://en.pronouns.page/api/calendar/${year}-${monthInput}-${dateInput}`)
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                events = data.events;

                events = '- ' + events.join('<br> – ').replace(/\w\w=/g, '');
                if (events === '- ') {
                    events = 'No events found on this date!';
                }

                eventsDisplay.innerHTML = events;
            })
            .catch((err) => {});
    } else {
        showAlert('Input cannot be zero!', 'error');
    }
}

async function getCurrent() {
    eventsTitle.innerHTML = 'Current Events:';
    eventsDisplay.innerHTML = '<span style="color:#FF5555">Loading data...</span>';

    monthVal.value = '';
    dateVal.value = '';

    fetch('https://en.pronouns.page/api/calendar/today')
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            events = data.events;

            events = '- ' + events.join('<br> – ').replace(/\w\w=/g, '');
            if (events === '- ') {
                events = 'No events found on this date!';
            }

            eventsDisplay.innerHTML = events;
        })
        .catch((err) => {});
}

getCurrent();