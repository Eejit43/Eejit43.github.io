// Modified from http://codegolf.stackexchange.com/questions/10713/pong-in-the-shortest-code

canvas = document.getElementById('canvas').getContext('2d');
canvas.fillStyle = "#ffffff";
canvas.font = "60px monospace";

gamePaused = startGame = 1;
leftPaddleYVelocity = rightPaddleYVelocity = leftScore = rightScore = 0;
leftPaddleY = rightPaddleY = 190;
ballX = 300;
ballY = 235;
ballXVelocity = - 5;
ballYVelocity = 5;

setInterval(function () {
    if (gamePaused && !startGame) return;
    startGame = 0;
    canvas.clearRect(0, 0, 640, 480);
    for (i = 5; i < 480; i += 20) canvas.fillRect(318, i, 4, 10);
    leftPaddleY += leftPaddleYVelocity;
    rightPaddleY += rightPaddleYVelocity;
    leftPaddleY = leftPaddleY < 0 ? 0 : leftPaddleY;
    leftPaddleY = leftPaddleY > 380 ? 380 : leftPaddleY;
    rightPaddleY = rightPaddleY < 0 ? 0 : rightPaddleY;
    rightPaddleY = rightPaddleY > 380 ? 380 : rightPaddleY;
    ballX += ballXVelocity;
    ballY += ballYVelocity;
    if (ballY <= 0) {
        ballY = 0;
        ballYVelocity = - ballYVelocity;
    }
    if (ballY >= 470) {
        ballY = 470;
        ballYVelocity = - ballYVelocity;
    }
    if (ballX <= 40 && ballX >= 20 && ballY < leftPaddleY + 110 && ballY > leftPaddleY - 10) {
        ballXVelocity = - ballXVelocity + 0.2;
        ballYVelocity += (ballY - leftPaddleY - 45) / 20;
    }
    if (ballX <= 610 && ballX >= 590 && ballY < rightPaddleY + 110 && ballY > rightPaddleY - 10) {
        ballXVelocity = - ballXVelocity - 0.2;
        ballYVelocity += (ballY - rightPaddleY - 45) / 20;
    }
    if (ballX < - 10) {
        rightScore ++;
        ballX = 360;
        ballY = 235;
        ballXVelocity = 5;
        ballYVelocity = 3;
        gamePaused = 1;
    }
    if (ballX > 640) {
        leftScore ++;
        ballX = 280;
        ballY = 235;
        ballXVelocity = - 5;
        ballYVelocity = 3;
        gamePaused = 1;
    }
    canvas.fillText(leftScore + " " + rightScore, 266, 60);
    canvas.fillRect(20, leftPaddleY, 20, 100);
    canvas.fillRect(600, rightPaddleY, 20, 100);
    canvas.fillRect(ballX, ballY, 10, 10);
}, 30);

document.onkeydown = function (event) {
    // jshint ignore:start
    keycode = (event || window.event).keyCode;
    gamePaused = gamePaused ? 0 : keycode == '27' ? 1 : 0;
    leftPaddleYVelocity = keycode == '83' ? 6 : keycode == '87' ? - 6 : leftPaddleYVelocity;
    rightPaddleYVelocity = keycode == '40' ? 6 : keycode == '38' ? - 6 : rightPaddleYVelocity;
    // jshint ignore:end
};

document.onkeyup = function (event) {
    // jshint ignore:start
    keycode = (event || window.event).keyCode;
    leftPaddleYVelocity = keycode == '83' || keycode == '87' ? 0 : leftPaddleYVelocity;
    rightPaddleYVelocity = keycode == '38' || keycode == '40' ? 0 : rightPaddleYVelocity;
    // jshint ignore:end
};