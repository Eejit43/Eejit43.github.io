function countdown(date, elementID) {
    let countdownDate = new Date(`${date} 00:00:00`).getTime();

    let daysfinal, hoursfinal, minutesfinal, secondsfinal, daysfinalsuffix, hoursfinalsuffix;

    let curtime = new Date().getTime();

    let distance = countdownDate - curtime;

    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);

    if (hours === 0 && minutes === 0 && seconds === 0) {
        daysfinalsuffix = '';
    } else {
        daysfinalsuffix = ', ';
    }

    if (days === 1) {
        daysfinal = days + ' day' + daysfinalsuffix;
    } else if (days === 0) {
        daysfinal = '';
    } else {
        daysfinal = days + ' days' + daysfinalsuffix;
    }

    if (minutes === 0 && seconds === 0) {
        hoursfinalsuffix = '';
    } else {
        hoursfinalsuffix = ', ';
    }

    if (hours === 1) {
        hoursfinal = hours + ' hour' + hoursfinalsuffix;
    } else if (hours === 0) {
        hoursfinal = '';
    } else {
        hoursfinal = hours + ' hours' + hoursfinalsuffix;
    }

    if (seconds === 0) {
        minutesfinalsuffix = '';
    } else {
        minutesfinalsuffix = ', ';
    }

    if (minutes === 1) {
        minutesfinal = minutes + ' minute' + minutesfinalsuffix;
    } else if (minutes === 0) {
        minutesfinal = '';
    } else {
        minutesfinal = minutes + ' minutes' + minutesfinalsuffix;
    }

    if (seconds === 1) {
        secondsfinal = seconds + ' second';
    } else if (seconds === 0) {
        secondsfinal = '';
    } else {
        secondsfinal = seconds + ' seconds';
    }

    if (distance <= 0) {
        if (document.getElementById(elementID).innerHTML !== '<span style="color:#FF5555;">This event has already occurred!</span>') {
            document.getElementById(elementID).innerHTML = '<span style="color:#FF5555;">This event has already occurred!</span>';
        }
    } else {
        if (document.getElementById(elementID).innerHTML !== daysfinal + hoursfinal + minutesfinal + secondsfinal) {
            document.getElementById(elementID).innerHTML = daysfinal + hoursfinal + minutesfinal + secondsfinal;
        }
    }
}

let valentines = setInterval(countdown, 100, 'February 14, 2022', 'valentines');

let patricks = setInterval(countdown, 100, 'March 17, 2022', 'patricks');

let easter = setInterval(countdown, 100, 'April 17, 2022', 'easter');

/*let independence = setInterval(countdown, 100, 'July 4, 2022', 'independence');

let halloween = setInterval(countdown, 100, 'October 31, 2022', 'halloween');

let thanksgiving = setInterval(countdown, 100, 'November 24, 2022', 'thanksgiving');

let christmas = setInterval(countdown, 100, 'December 25, 2022', 'christmas');

let newyears = setInterval(countdown, 100, 'January 1, 2023', 'newyears');*/
