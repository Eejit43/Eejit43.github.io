/* Add event listeners */
document.getElementById('generate-number').addEventListener('click', generateNumber);
document.getElementById('reset').addEventListener('click', reset);

function reset() {
    document.getElementById('min-number').value = '1';
    document.getElementById('max-number').value = '10';
    document.getElementById('output-number').innerHTML = '';
    showAlert('Cleared!', 'success');
    resetResult('generate');
}

function generateNumber() {
    let min = Number(document.getElementById('min-number').value);
    let max = Number(document.getElementById('max-number').value);
    if (min.length === 0 || max.length === 0) {
        showAlert('Empty input!', 'error');
        showResult('generate', 'error');
    } else if (min > max || min === max) {
        showAlert('The minimum must be less than the maximum!', 'error');
        showResult('generate', 'error');
    } else {
        let output = Math.floor(Math.random() * (max - min + 1) + min).toLocaleString();
        document.getElementById('output-number').innerHTML = output;
        showResult('generate', 'success');
    }
}
