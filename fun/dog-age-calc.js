let humanAge = document.getElementById('humanAge');
let toDogBtn = document.getElementById('toDog');
let dogAge = document.getElementById('dogAge');
let toHumanBtn = document.getElementById('toHuman');
let result = document.getElementById('result');

/* Add event listeners */
toDogBtn.addEventListener('click', toDog);
toHumanBtn.addEventListener('click', toHuman);

function toDog() {
    if (humanAge.value.length === 0) {
        showAlert('No input given!', '#FF5555');
        showResult('td', 'error');
    } else if (humanAge.value >= 1) {
        let dogAgeVal = Math.round(humanAge.value / 7);
        let output = `<hr>${escapeHtml(humanAge.value)} human years is about ${dogAgeVal} years in dog years.`;
        result.innerHTML = output;
        dogAge.value = '';
        showResult('td', 'success');
    } else {
        showAlert('Input must be 1 or greater!', '#FF5555');
        showResult('td', 'error');
    }
}

function toHuman() {
    if (dogAge.value.length === 0) {
        showAlert('No input given!', '#FF5555');
        showResult('th', 'error');
    } else if (dogAge.value >= 1) {
        let humanAgeVal = Math.round(dogAge.value * 7);
        let output = `<hr>${escapeHtml(dogAge.value)} dog years is about ${humanAgeVal} years in human years.`;
        result.innerHTML = output;
        humanAge.value = '';
        showResult('th', 'success');
    } else {
        showAlert('Input must be 1 or greater!', '#FF5555');
        showResult('th', 'error');
    }
}
