let resultElement = document.getElementById('result');
let yearVal = document.getElementById('year');
let monthVal = document.getElementById('month');
let dateVal = document.getElementById('date');
let getDate = document.getElementById('get-date');
let resetDate = document.getElementById('reset-date');

/* Add event listeners */
getDate.addEventListener('click', function () {
    checkApod(yearVal.value !== '' ? yearVal.value : year, monthVal.value !== '' ? monthVal.value : month, dateVal.value !== '' ? dateVal.value : date);
});
resetDate.addEventListener('click', function () {
    yearVal.value = '';
    monthVal.value = '';
    dateVal.value = '';
    checkApod(year, month, date);
});
yearVal.addEventListener('input', function () {
    yearVal.value = yearVal.value.replace(/((?![0-9]).)/g, '');
});
yearVal.addEventListener('paste', function () {
    yearVal.value = yearVal.value.replace(/((?![0-9]).)/g, '');
});
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

yearVal.placeholder = year;
monthVal.placeholder = month;
dateVal.placeholder = date;

checkApod(year, month, date);

function checkApod(yearInput, monthInput, dateInput) {
    if (
        new Date(`${yearInput}-${monthInput}-${dateInput} 00:00:00`) >= new Date(`1995-06-16 00:00:00`) &&
        new Date(`${yearInput}-${monthInput}-${dateInput} 00:00:00`) <= new Date(`${year}-${month}-${date} 00:00:00`)
    ) {
        fetchApod(yearInput, monthInput, dateInput);
    } else {
        showAlert(`Date out of range! Must be between ${new Date(`1995-06-16 00:00:00`).toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })} (inclusive) and ${new Date(`${year}-${month}-${date} 00:00:00`).toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })} (inclusive)`, 'error'); // prettier-ignore
    }
}

function fetchApod(yearInput, monthInput, dateInput) {
    resultElement.innerHTML = 'Loading...';
    fetch(`https://api.nasa.gov/planetary/apod?api_key=zKDatvp1WcJI6msXG39REUkcXmf84Kiax5lHqge6&date=${yearInput ? yearInput : year}-${monthInput ? monthInput : month}-${dateInput ? dateInput : date}`) // prettier-ignore
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            let result = [];
            if (data.media_type === 'image') {
                result.push(
                    `Astronomy Picture of the Day for ${new Date(`${yearInput}-${monthInput}-${dateInput} 00:00:00`).toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}.<br />`, // prettier-ignore
                    `<div style="text-align: center; font-size: 30px">${data.title}</div>`,
                    `<img style="display: block; margin: 10px auto -25px; width: 900px; max-width: 90%" alt="${data.title}" src="${data.url}"><br />`,
                    `<div style="text-align: center"><a href="${data.hdurl}" target="_blank">View high definition image</a></div><br />`,
                    `${data.explanation.replace(/  /g, ' ')}`
                );
            } else if (data.media_type === 'video') {
                result.push(
                    `Astronomy <strike>Picture</strike> Video of the Day for ${new Date(`${yearInput}-${monthInput}-${dateInput} 00:00:00`).toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}.<br />`, // prettier-ignore
                    `<div style="text-align: center; font-size: 30px">${data.title}</div>`,
                    `<div style="position: relative; overflow: hidden; margin: 15px auto -15px; width: 900px; max-width: 90%; padding-top: 56.25%;">`,
                    `<iframe style="position: absolute; top: 0; left: 0; bottom: 0; right: 0; width: 100%; height: 100%;" src="${data.url}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
                    `</div><br />`,
                    `${data.explanation.replace(/  /g, ' ')}`
                );
            }
            resultElement.innerHTML = result.join('');
        })
        .catch((err) => {});
}
