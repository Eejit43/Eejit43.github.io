document.getElementById('rollBall').addEventListener("click", rollBall);

function rollBall() {
  let userQuestion = document.getElementById('userQuestion').value;
  if (userQuestion.length === 0) {
    showAlert('You didn\'t ask a question!', 'error');
  } else {
    let result = document.getElementById('result');
    let randomNumber = Math.floor(Math.random() * 11);
    let eightBall = '';
    switch (randomNumber) {
      case 0:
        eightBall = 'It is certain' // Yes
        break;
      case 1:
        eightBall = 'It is decidedly so' // Yes
        break;
      case 2:
        eightBall = 'Signs point to yes' // Yes
        break;
      case 3:
        eightBall = '100% yes!' // Yes
        break;
      case 4:
        eightBall = 'Do not count on it' // No
        break;
      case 5:
        eightBall = 'My sources say no' // No
        break;
      case 6:
        eightBall = 'Outlook not so good' // No
        break;
      case 7:
        eightBall = 'No way' // No
        break;
      case 8:
        eightBall = 'Reply hazy try again' // Neutral
        break;
      case 9:
        eightBall = 'Cannot predict now' // Neutral
        break;
      case 10:
        eightBall = 'Radio interference, try again' // Neutral
        break;
    }
    document.getElementById("rollBall").innerHTML = "Rolling!";
    setTimeout(function () {
      document.getElementById("rollBall").innerHTML = "Roll ball!";
    }, 2000);
    result.innerHTML = `<hr>You asked: <span style="font-weight:500;color:dimgray;font-size:16px;">${userQuestion}</span><br>Response: <span style="font-weight:500;color:#ffba24;font-size:16px;">Predicting... <i class="fas fa-spinner fa-pulse"></i></span>`
    setTimeout(function () {
      result.innerHTML = `<hr>You asked: <span style="font-weight:500;color:dimgray;font-size:16px;">${userQuestion}</span><br>Response: <span style="font-weight:500;color:dimgray;font-size:16px;">${eightBall}</span>`
    }, 2000);
  }
}