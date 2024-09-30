function setup() {
  createCanvas(800, 400);
  paddleHeight = 100;
  paddleWidth = 10;
  score1 = 0;
  score2 = 0;
  ballX = 400;
  ballY = 200;
  ballSpeedX = 5;
  ballSpeedY = 3;
  paddle1Y = 150;
  paddle2Y = 150;
}

function draw() {
  background(0);
  fill(255);
  textSize(30);
  text("P1 Score: " + score1, 50, 30);
  text("P2 Score: " + score2, 600, 30);

  ellipse(ballX, ballY, 20, 20);

  rect(20, paddle1Y, paddleWidth, paddleHeight);
  rect(800 - 30, paddle2Y, paddleWidth, paddleHeight);

  ballX += ballSpeedX;
  ballY += ballSpeedY;

  if (ballY < 10 || ballY > 390)
  {
    ballSpeedY *= -1;
  }

  if (ballX - 10 < 30 && ballY > paddle1Y && ballY < paddle1Y + paddleHeight)
  {
    ballSpeedX *= -1;
    ballX = 40;
  }

  if (ballX + 10 > 770 && ballY > paddle2Y && ballY < paddle2Y + paddleHeight) 
  {
    ballSpeedX *= -1;
    ballX = 760; 
  }

  if (keyIsDown(87))
  {
    paddle1Y -= 5;
  }
  if (keyIsDown(83))
  {
    paddle1Y += 5;
  }
  if (keyIsDown(38))
  {
    paddle2Y -= 5;
  }
  if (keyIsDown(40))
  {
    paddle2Y += 5;
  }

  if (paddle1Y < 0)
  {
    paddle1Y = 0;
  } 
  else if (paddle1Y > 300)
  {
    paddle1Y = 300;
  }

  if (paddle2Y < 0)
  {
    paddle2Y = 0;
  } 
  else if (paddle2Y > 300)
  {
    paddle2Y = 300;
  }

  if (ballX < 0)
  {
    ballX = 400;
    ballY = 200;
    ballSpeedX *= -1;
    score2 += 1;
  }
  if (ballX > 800)
  {
    ballX = 400;
    ballY = 200;
    ballSpeedX *= -1;
    score1 += 1;
  }
}