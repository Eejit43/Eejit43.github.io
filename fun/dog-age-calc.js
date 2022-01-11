document.getElementById('toDog').addEventListener("click", toDog);
document.getElementById('toHuman').addEventListener("click", toHuman);

function toDog() {
  let humanAge = document.getElementById('humanAge').value;
  if (humanAge.length === 0) {
    showAlert('No input given!', '#FF5555');
    showResult('td', 'error');
  } else if (humanAge >= 1) {
    let dogAge = Math.round(Math.exp((humanAge - 31) / 16));
    let output = `<hr>${escapeHtml(humanAge)} human years is about ${dogAge} years in dog years.`;
    document.getElementById('result').innerHTML = output;
    document.getElementById('dogAge').value = '';
    showResult('td', 'success');
  } else {
    showAlert('Input must be 1 or greater!', '#FF5555');
    showResult('td', 'error');
  }
}

function toHuman() {
  let dogAge = document.getElementById('dogAge').value;
  if (dogAge.length === 0) {
    showAlert('No input given!', '#FF5555');
    showResult('th', 'error');
  } else if (dogAge >= 1) {
    let humanAge = Math.round(16 * Math.log(dogAge) + 31);
    let output = `<hr>${escapeHtml(dogAge)} dog years is about ${humanAge} years in human years.`;
    document.getElementById('result').innerHTML = output;
    document.getElementById('humanAge').value = '';
    showResult('th', 'success');
  } else {
    showAlert('Input must be 1 or greater!', '#FF5555');
    showResult('th', 'error');
  }
}