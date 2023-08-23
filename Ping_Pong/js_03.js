function restart(){
    ball.x = can.widthh/2;
    ball.y = can.height/2;
    ball.velX = -ball.velX;
    ball.speed = 5;
}

canvas.addEventListner("mousemove",getMouse)